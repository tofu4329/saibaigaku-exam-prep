/* ==========================================================================
   (G5560) 栽培学 試験対策ポータル - Interactive App Logic
   ========================================================================== */

(function () {
  const STORAGE_KEY = "saibaigaku_g5560_progress_v1";

  const state = {
    view: "overview", // overview | flashcards | quiz | essay | unit:<id> | search
    searchQuery: "",
    maskMode: false,
    theme: localStorage.getItem("saibaigaku_theme") || "light",
    progress: loadProgress(),
    flashcard: {
      filterUnit: "all",
      onlyUnlearned: false,
      deck: [],
      index: 0,
      flipped: false
    },
    quiz: {
      filterUnit: "all",
      mode: "all", // all | wrong | random10
      questions: [],
      current: 0,
      selected: null,
      score: 0,
      finished: false
    },
    essay: {
      filterUnit: "all",
      openIds: []
    }
  };

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          checkedEssays: parsed.checkedEssays || [],
          completedUnits: parsed.completedUnits || [],
          knownCards: parsed.knownCards || [],
          wrongQuizIds: parsed.wrongQuizIds || [],
          correctQuizIds: parsed.correctQuizIds || []
        };
      }
    } catch (_) {}
    return {
      checkedEssays: [],
      completedUnits: [],
      knownCards: [],
      wrongQuizIds: [],
      correctQuizIds: []
    };
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
    } catch (_) {}
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function initTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    const btn = document.getElementById("themeToggleBtn");
    btn.textContent = state.theme === "dark" ? "☀️" : "🌙";
  }

  function setupEvents() {
    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");
    menuBtn.addEventListener("click", () => sidebar.classList.toggle("open"));

    document.getElementById("brandLink").addEventListener("click", (e) => {
      e.preventDefault();
      navigate("overview");
    });

    document.getElementById("maskToggleBtn").addEventListener("click", () => {
      state.maskMode = !state.maskMode;
      document.body.classList.toggle("study-mask", state.maskMode);
      const btn = document.getElementById("maskToggleBtn");
      btn.classList.toggle("active", state.maskMode);
      btn.textContent = state.maskMode ? "🟥 赤シート ON" : "🟥 赤シート";
      document.querySelectorAll(".cloze.revealed").forEach((el) => el.classList.remove("revealed"));
      const statMask = document.getElementById("statMaskValue");
      if (statMask) statMask.textContent = state.maskMode ? "ON" : "OFF";
    });

    document.getElementById("themeToggleBtn").addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("saibaigaku_theme", state.theme);
      initTheme();
    });

    const searchInput = document.getElementById("searchInput");
    const mobileSearchInput = document.getElementById("mobileSearchInput");
    const handleSearch = (val) => {
      state.searchQuery = val.trim();
      if (searchInput.value !== val) searchInput.value = val;
      if (mobileSearchInput && mobileSearchInput.value !== val) mobileSearchInput.value = val;
      if (state.searchQuery.length > 0) {
        state.view = "search";
        updateActiveNav();
        render();
      } else if (state.view === "search") {
        navigate("overview");
      }
    };
    searchInput.addEventListener("input", () => handleSearch(searchInput.value));
    if (mobileSearchInput) {
      mobileSearchInput.addEventListener("input", () => handleSearch(mobileSearchInput.value));
    }

    document.querySelectorAll(".nav-item[data-view]").forEach((btn) => {
      btn.addEventListener("click", () => navigate(btn.dataset.view));
    });

    document.getElementById("resetProgressBtn").addEventListener("click", () => {
      if (confirm("学習進捗（単元チェック・暗記カード・クイズ履歴・論述チェック）をすべてリセットしますか？")) {
        state.progress = {
          checkedEssays: [],
          completedUnits: [],
          knownCards: [],
          wrongQuizIds: [],
          correctQuizIds: []
        };
        saveProgress();
        renderSidebarUnits();
        render();
      }
    });

    document.getElementById("mainContent").addEventListener("click", (e) => {
      const cloze = e.target.closest(".cloze");
      if (cloze && state.maskMode) {
        cloze.classList.toggle("revealed");
      }
    });
  }

  function navigate(view) {
    state.view = view;
    if (view !== "search") {
      state.searchQuery = "";
      document.getElementById("searchInput").value = "";
      const ms = document.getElementById("mobileSearchInput");
      if (ms) ms.value = "";
    }
    document.getElementById("sidebar").classList.remove("open");
    if (view === "flashcards") buildFlashcardDeck();
    if (view === "quiz" && state.quiz.questions.length === 0) startQuiz("all", "all");
    updateActiveNav();
    render();
    window.scrollTo(0, 0);
  }

  function updateActiveNav() {
    document.querySelectorAll(".nav-item").forEach((el) => {
      el.classList.toggle("active", el.dataset.view === state.view);
    });
  }

  function renderSidebarUnits() {
    const container = document.getElementById("unitNavList");
    container.innerHTML = SAIBAI_DATA.units
      .map((u) => {
        const done = state.progress.completedUnits.includes(u.id);
        return `
          <button class="nav-item ${state.view === "unit:" + u.id ? "active" : ""}" data-view="unit:${u.id}">
            <span>${escapeHtml(u.shortTitle)}</span>
            <span class="nav-pill">${done ? "✓" : escapeHtml(u.date)}</span>
          </button>
        `;
      })
      .join("");

    container.querySelectorAll(".nav-item").forEach((btn) => {
      btn.addEventListener("click", () => navigate(btn.dataset.view));
    });

    document.getElementById("pillFlashcards").textContent = SAIBAI_DATA.flashcards.length;
    document.getElementById("pillQuiz").textContent = SAIBAI_DATA.quizzes.length;
    document.getElementById("pillEssay").textContent = SAIBAI_DATA.essays.length;
  }

  /* ======================================================================
     Overview View
     ====================================================================== */
  function renderOverview() {
    const totalUnits = SAIBAI_DATA.units.length;
    const doneUnits = state.progress.completedUnits.length;
    const totalCards = SAIBAI_DATA.flashcards.length;
    const knownCards = state.progress.knownCards.length;
    const totalQuiz = SAIBAI_DATA.quizzes.length;
    const correctQuiz = state.progress.correctQuizIds.length;
    const totalEssay = SAIBAI_DATA.essays.length;
    const checkedEssay = state.progress.checkedEssays.length;

    const unitCardsHtml = SAIBAI_DATA.units
      .map((u) => {
        const done = state.progress.completedUnits.includes(u.id);
        return `
          <div class="card" style="margin-bottom:0;display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <span class="tag">${escapeHtml(u.date)}</span>
                ${done ? '<span class="tag" style="background:var(--success-soft);color:var(--success);border-color:transparent;">✓ 学習済</span>' : '<span class="tag tag-accent">未完了</span>'}
              </div>
              <h3 style="margin-bottom:6px;">${escapeHtml(u.title)}</h3>
              <p style="font-size:0.88rem;color:var(--text-muted);margin:0 0 14px;">${escapeHtml(u.summary)}</p>
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;">
              <button class="btn btn-primary btn-sm" data-nav="unit:${u.id}">ノートを読む</button>
              <button class="btn btn-sm" data-quick-quiz="${u.id}">単元テスト</button>
            </div>
          </div>
        `;
      })
      .join("");

    const comparisonsHtml = SAIBAI_DATA.comparisons
      .map(
        (comp) => `
      <div class="card">
        <h3>📌 ${escapeHtml(comp.title)}</h3>
        ${comp.note ? `<p style="font-size:0.88rem;color:var(--text-muted);margin-top:0;">${comp.note}</p>` : ""}
        <div class="table-wrap">
          <table>
            <thead>
              <tr>${comp.headers.map((h) => `<th>${escapeHtml(h)}</th>`).join("")}</tr>
            </thead>
            <tbody>
              ${comp.rows
                .map(
                  (row) =>
                    `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
    `
      )
      .join("");

    return `
      <section class="hero">
        <h1>🌱 (G5560) 栽培学 試験対策ポータル</h1>
        <p>${escapeHtml(SAIBAI_DATA.meta.subtitle)}</p>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-label">単元ノート完了</div>
            <div class="stat-value">${doneUnits} / ${totalUnits}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">一問一答 習得</div>
            <div class="stat-value">${knownCards} / ${totalCards}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">4択クイズ 正解済</div>
            <div class="stat-value">${correctQuiz} / ${totalQuiz}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">論述対策 習得</div>
            <div class="stat-value">${checkedEssay} / ${totalEssay}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">赤シート機能</div>
            <div class="stat-value" id="statMaskValue">${state.maskMode ? "ON" : "OFF"}</div>
          </div>
        </div>
      </section>

      ${
        SAIBAI_DATA.notebookHighlights && SAIBAI_DATA.notebookHighlights.length > 0
          ? `
        <div class="card" style="border-color:var(--primary-border);">
          <h3>🎯 論述式試験・直前総整理（NotebookLM ＆ 講義資料統合）</h3>
          <div class="callout">
            <span class="callout-title">効率的な使い方</span>
            右上の「🟥 赤シート」をONにすると、オレンジ色の重要語句が赤く隠れます（タップ・クリックで個別に確認できます）。<strong>試験は論述式</strong>のため、「記述・論述対策」メニューも必ず演習してください。
          </div>
          <ul style="padding-left:20px;margin:10px 0 12px;">
            ${SAIBAI_DATA.notebookHighlights.map((item) => `<li style="margin-bottom:6px;">${item}</li>`).join("")}
          </ul>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <button class="btn btn-primary btn-sm" data-nav="essay">✍️ 論述対策(${totalEssay}問)を始める</button>
            <button class="btn btn-accent btn-sm" data-nav="quiz">🎲 4択実戦テストへ</button>
          </div>
        </div>
      `
          : ""
      }

      <div class="section-header">
        <h2>📚 単元別ショートカット</h2>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="btn btn-accent btn-sm" data-nav="quiz">🎲 全範囲ランダム10問テスト</button>
          <button class="btn btn-sm" data-nav="flashcards">🃏 暗記カードへ</button>
        </div>
      </div>

      <div class="card-grid">${unitCardsHtml}</div>

      <div class="section-header" style="margin-top:28px;">
        <h2>⚡ 試験頻出「比較・セット暗記」一覧表</h2>
      </div>
      ${comparisonsHtml}
    `;
  }

  /* ======================================================================
     Unit Detail View
     ====================================================================== */
  function renderUnit(unitId) {
    const idx = SAIBAI_DATA.units.findIndex((u) => u.id === unitId);
    const unit = SAIBAI_DATA.units[idx];
    if (!unit) return renderOverview();

    const done = state.progress.completedUnits.includes(unit.id);
    const prev = idx > 0 ? SAIBAI_DATA.units[idx - 1] : null;
    const next = idx < SAIBAI_DATA.units.length - 1 ? SAIBAI_DATA.units[idx + 1] : null;

    const blocksHtml = unit.sections
      .map((sec) => {
        const tableHtml = sec.table
          ? `
          <div class="table-wrap">
            <table>
              <thead><tr>${sec.table.headers.map((h) => `<th>${escapeHtml(h)}</th>`).join("")}</tr></thead>
              <tbody>${sec.table.rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody>
            </table>
          </div>`
          : "";

        const diagramHtml = sec.diagramSvg
          ? `
          <div class="diagram-box">
            ${sec.diagramSvg}
            ${sec.diagramCaption ? `<div class="diagram-caption">${escapeHtml(sec.diagramCaption)}</div>` : ""}
          </div>`
          : "";

        const calloutHtml = sec.callout
          ? `
          <div class="callout ${sec.callout.warn ? "callout-warn" : ""}">
            <span class="callout-title">${escapeHtml(sec.callout.title)}</span>
            ${sec.callout.body}
          </div>`
          : "";

        const customHtml = sec.customWidget === "fertilizer-calc" ? renderFertilizerCalcWidget() : "";

        return `
          <div class="card">
            <h3>${escapeHtml(sec.title)}</h3>
            ${sec.body || ""}
            ${diagramHtml}
            ${tableHtml}
            ${calloutHtml}
            ${customHtml}
          </div>
        `;
      })
      .join("");

    return `
      <div class="section-header">
        <div>
          <span class="tag">${escapeHtml(unit.date)}</span>
          <h2 style="margin-top:6px;">${escapeHtml(unit.title)}</h2>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="btn btn-sm" data-quick-cards="${unit.id}">🃏 この単元の暗記カード</button>
          <button class="btn btn-primary btn-sm" data-quick-quiz="${unit.id}">📝 この単元の確認テスト</button>
        </div>
      </div>

      <div class="unit-done-bar">
        <span><strong>この単元の理解チェック：</strong> 読み終えたら完了マークをつけましょう。</span>
        <button class="btn ${done ? "btn-primary" : ""}" id="toggleUnitDoneBtn" data-unit-id="${unit.id}">
          ${done ? "✓ 学習済みにマーク済み（解除する）" : "☐ この単元を学習済みにする"}
        </button>
      </div>

      ${blocksHtml}

      <div style="display:flex;justify-content:space-between;gap:12px;margin-top:24px;flex-wrap:wrap;">
        ${prev ? `<button class="btn" data-nav="unit:${prev.id}">← 前回：${escapeHtml(prev.shortTitle)}</button>` : "<span></span>"}
        ${next ? `<button class="btn btn-primary" data-nav="unit:${next.id}">次回：${escapeHtml(next.shortTitle)} →</button>` : `<button class="btn btn-accent" data-nav="quiz">📝 実戦テストに挑戦 →</button>`}
      </div>
    `;
  }

  function renderFertilizerCalcWidget() {
    return `
      <div class="callout" style="margin-top:16px;">
        <span class="callout-title">🧮 施肥量算出シミュレータ（図4-22 計算演習）</span>
        <p style="margin:4px 0 10px;font-size:0.86rem;">
          式：<code>施肥量 = (①吸収しなければならない養分量 − ②土壌からの天然養分) ÷ (利用率 ÷ 100) − 有機物からの養分供給量</code>
        </p>
        <div class="calc-grid">
          <div class="calc-field">
            <label>① 必要養分量 (kg/10a)</label>
            <input type="number" id="calcNeed" value="20" min="0" step="0.5" />
          </div>
          <div class="calc-field">
            <label>② 天然養分供給量 (kg/10a)</label>
            <input type="number" id="calcNatural" value="8" min="0" step="0.5" />
          </div>
          <div class="calc-field">
            <label>肥料の利用率 (%)</label>
            <input type="number" id="calcRate" value="50" min="1" max="100" step="1" />
          </div>
          <div class="calc-field">
            <label>有機物からの供給量 (kg/10a)</label>
            <input type="number" id="calcOrganic" value="0" min="0" step="0.5" />
          </div>
        </div>
        <div class="calc-result" id="calcOutput">必要施肥量：24.0 kg/10a</div>
      </div>
    `;
  }

  function attachFertilizerCalcEvents() {
    const ids = ["calcNeed", "calcNatural", "calcRate", "calcOrganic"];
    const inputs = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (inputs.length !== 4) return;
    const update = () => {
      const need = parseFloat(inputs[0].value) || 0;
      const nat = parseFloat(inputs[1].value) || 0;
      const rate = Math.max(1, parseFloat(inputs[2].value) || 1);
      const org = parseFloat(inputs[3].value) || 0;
      const net = Math.max(0, need - nat);
      const raw = net / (rate / 100);
      const ans = Math.max(0, raw - org);
      document.getElementById("calcOutput").innerHTML =
        `計算：(${need} − ${nat}) ÷ (${rate} / 100) − ${org} = <span style="font-size:1.15rem;color:var(--primary);">${ans.toFixed(1)} kg/10a</span>`;
    };
    inputs.forEach((inp) => inp.addEventListener("input", update));
  }

  /* ======================================================================
     Flashcards View
     ====================================================================== */
  function buildFlashcardDeck() {
    let list = SAIBAI_DATA.flashcards.filter(
      (c) => state.flashcard.filterUnit === "all" || c.unitId === state.flashcard.filterUnit
    );
    if (state.flashcard.onlyUnlearned) {
      list = list.filter((c) => !state.progress.knownCards.includes(c.id));
    }
    state.flashcard.deck = list;
    if (state.flashcard.index >= list.length) state.flashcard.index = 0;
    state.flashcard.flipped = false;
  }

  function renderFlashcards() {
    if (state.flashcard.deck.length === 0 && !state.flashcard.onlyUnlearned) {
      buildFlashcardDeck();
    }
    const deck = state.flashcard.deck;
    const card = deck[state.flashcard.index];
    const unitChips = [
      `<button class="chip ${state.flashcard.filterUnit === "all" ? "active" : ""}" data-fc-unit="all">全単元</button>`,
      ...SAIBAI_DATA.units.map(
        (u) => `<button class="chip ${state.flashcard.filterUnit === u.id ? "active" : ""}" data-fc-unit="${u.id}">${escapeHtml(u.shortTitle)}</button>`
      )
    ].join("");

    const knownTotal = state.progress.knownCards.length;

    return `
      <div class="section-header">
        <h2>🃏 一問一答フラッシュカード</h2>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="btn btn-sm ${state.flashcard.onlyUnlearned ? "btn-accent" : ""}" id="fcToggleUnlearned">
            ${state.flashcard.onlyUnlearned ? "未習得のみ表示中" : "未習得のみに絞る"}
          </button>
          <button class="btn btn-sm" id="fcShuffleBtn">🔀 シャッフル</button>
        </div>
      </div>

      <div class="chips">${unitChips}</div>

      <div style="font-size:0.86rem;color:var(--text-muted);margin-bottom:8px;">
        習得状況：<strong>${knownTotal} / ${SAIBAI_DATA.flashcards.length} 枚</strong>
        <div class="progress-track"><div class="progress-fill" style="width:${Math.round((knownTotal / Math.max(1, SAIBAI_DATA.flashcards.length)) * 100)}%;"></div></div>
      </div>

      ${
        deck.length === 0
          ? `<div class="card" style="text-align:center;padding:36px;">
              <h3>🎉 表示するカードはありません！</h3>
              <p style="color:var(--text-muted);">選択した条件のカードをすべて習得済みです。</p>
              <button class="btn btn-primary" id="fcShowAllBtn">すべてのカードを表示する</button>
            </div>`
          : `
        <div class="flashcard-stage">
          <div style="text-align:center;font-size:0.85rem;color:var(--text-muted);margin-bottom:8px;">
            ${state.flashcard.index + 1} / ${deck.length} 枚目（カードをクリックで裏返す）
          </div>
          <div class="flashcard ${state.flashcard.flipped ? "flipped" : ""}" id="flashcardBox">
            <span class="tag flashcard-badge">${escapeHtml(getUnitShortTitle(card.unitId))}</span>
            <span class="flashcard-side">${state.flashcard.flipped ? "解答・解説" : "問題"}</span>
            ${
              !state.flashcard.flipped
                ? `<div class="flashcard-q">${escapeHtml(card.q)}</div>`
                : `<div class="flashcard-a">${escapeHtml(card.a)}</div>
                   ${card.note ? `<div class="flashcard-note">${escapeHtml(card.note)}</div>` : ""}`
            }
          </div>

          <div class="flashcard-actions">
            <button class="btn" id="fcPrevBtn">← 前へ</button>
            <button class="btn btn-primary" id="fcFlipBtn">${state.flashcard.flipped ? "問題に戻す" : "答えを見る"}</button>
            <button class="btn ${state.progress.knownCards.includes(card.id) ? "btn-accent" : ""}" id="fcMarkKnownBtn">
              ${state.progress.knownCards.includes(card.id) ? "✓ 覚えた（解除）" : "✓ 覚えた！"}
            </button>
            <button class="btn" id="fcNextBtn">次へ →</button>
          </div>
        </div>
      `
      }
    `;
  }

  /* ======================================================================
     Quiz View
     ====================================================================== */
  function startQuiz(filterUnit, mode) {
    state.quiz.filterUnit = filterUnit;
    state.quiz.mode = mode;

    let pool = SAIBAI_DATA.quizzes.filter(
      (q) => filterUnit === "all" || q.unitId === filterUnit
    );
    if (mode === "wrong") {
      pool = pool.filter((q) => state.progress.wrongQuizIds.includes(q.id));
    }
    pool = [...pool].sort(() => Math.random() - 0.5);
    if (mode === "random10") {
      pool = pool.slice(0, 10);
    }

    state.quiz.questions = pool;
    state.quiz.current = 0;
    state.quiz.selected = null;
    state.quiz.score = 0;
    state.quiz.finished = false;
  }

  function renderQuiz() {
    const unitChips = [
      `<button class="chip ${state.quiz.filterUnit === "all" && state.quiz.mode === "all" ? "active" : ""}" data-quiz-start="all:all">全問チャレンジ (${SAIBAI_DATA.quizzes.length})</button>`,
      `<button class="chip ${state.quiz.mode === "random10" ? "active" : ""}" data-quiz-start="all:random10">🎲 ランダム10問</button>`,
      `<button class="chip ${state.quiz.mode === "wrong" ? "active" : ""}" data-quiz-start="all:wrong">🔁 間違えた問題 (${state.progress.wrongQuizIds.length})</button>`,
      ...SAIBAI_DATA.units.map(
        (u) => `<button class="chip ${state.quiz.filterUnit === u.id ? "active" : ""}" data-quiz-start="${u.id}:all">${escapeHtml(u.shortTitle)}</button>`
      )
    ].join("");

    const qs = state.quiz.questions;

    if (qs.length === 0) {
      return `
        <div class="section-header"><h2>📝 4択実戦テスト</h2></div>
        <div class="chips">${unitChips}</div>
        <div class="card" style="text-align:center;padding:36px;">
          <h3>該当する問題がありません</h3>
          <p style="color:var(--text-muted);">「間違えた問題」が0件か、別のモードを選んでください。</p>
          <button class="btn btn-primary" data-quiz-start="all:random10">ランダム10問を開始</button>
        </div>
      `;
    }

    if (state.quiz.finished) {
      const pct = Math.round((state.quiz.score / qs.length) * 100);
      return `
        <div class="section-header"><h2>📝 4択実戦テスト</h2></div>
        <div class="chips">${unitChips}</div>
        <div class="card quiz-box" style="text-align:center;padding:36px;">
          <div style="font-size:2.4rem;margin-bottom:8px;">${pct >= 80 ? "🏆" : pct >= 60 ? "👍" : "📖"}</div>
          <h3 style="justify-content:center;font-size:1.4rem;">結果：${state.quiz.score} / ${qs.length} 問正解（${pct}%）</h3>
          <p style="color:var(--text-muted);">${pct >= 80 ? "素晴らしい仕上がりです！記述問題や赤シートでも確認しましょう。" : "間違えた問題は自動で記録されました。上の「間違えた問題」から復習できます。"}</p>
          <div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-top:16px;">
            <button class="btn btn-primary" id="quizRetryBtn">同じ条件でもう一度</button>
            ${state.progress.wrongQuizIds.length > 0 ? `<button class="btn btn-accent" data-quiz-start="all:wrong">間違えた問題だけ復習</button>` : ""}
          </div>
        </div>
      `;
    }

    const q = qs[state.quiz.current];
    const answered = state.quiz.selected !== null;

    return `
      <div class="section-header"><h2>📝 4択実戦テスト</h2></div>
      <div class="chips">${unitChips}</div>
      <div class="card quiz-box">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
          <span class="tag">${escapeHtml(getUnitShortTitle(q.unitId))}</span>
          <span style="font-size:0.86rem;color:var(--text-muted);font-weight:700;">第 ${state.quiz.current + 1} 問 / ${qs.length}</span>
        </div>
        <div class="progress-track" style="margin-bottom:16px;">
          <div class="progress-fill" style="width:${Math.round(((state.quiz.current + (answered ? 1 : 0)) / qs.length) * 100)}%;"></div>
        </div>
        <h3 style="font-size:1.08rem;line-height:1.65;margin-bottom:16px;">${escapeHtml(q.question)}</h3>
        <div>
          ${q.options
            .map((opt, idx) => {
              let cls = "quiz-option";
              if (answered) {
                if (idx === q.answer) cls += " correct";
                else if (idx === state.quiz.selected) cls += " wrong";
              }
              return `<button class="${cls}" data-quiz-opt="${idx}" ${answered ? "disabled" : ""}>
                <span style="font-weight:700;">${["A", "B", "C", "D"][idx]}.</span>
                <span>${escapeHtml(opt)}</span>
              </button>`;
            })
            .join("")}
        </div>
        ${
          answered
            ? `
          <div class="quiz-explain">
            <strong>${state.quiz.selected === q.answer ? "✅ 正解！" : "❌ 不正解…"}</strong>
            <div style="margin-top:6px;">${escapeHtml(q.explanation)}</div>
          </div>
          <div style="margin-top:16px;text-align:right;">
            <button class="btn btn-primary" id="quizNextBtn">
              ${state.quiz.current + 1 >= qs.length ? "結果を見る →" : "次の問題へ →"}
            </button>
          </div>
        `
            : ""
        }
      </div>
    `;
  }

  /* ======================================================================
     Essay / Why Questions View
     ====================================================================== */
  function renderEssay() {
    const unitChips = [
      `<button class="chip ${state.essay.filterUnit === "all" ? "active" : ""}" data-essay-unit="all">すべて (${SAIBAI_DATA.essays.length})</button>`,
      ...SAIBAI_DATA.units.map(
        (u) => `<button class="chip ${state.essay.filterUnit === u.id ? "active" : ""}" data-essay-unit="${u.id}">${escapeHtml(u.shortTitle)}</button>`
      )
    ].join("");

    const list = SAIBAI_DATA.essays.filter(
      (e) => state.essay.filterUnit === "all" || e.unitId === state.essay.filterUnit
    );
    const checkedCount = state.progress.checkedEssays.length;

    return `
      <div class="section-header">
        <h2>✍️ 記述・論述式 試験対策（全${SAIBAI_DATA.essays.length}問）</h2>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="btn btn-sm" id="essayOpenAllBtn">すべて解答を開く</button>
          <button class="btn btn-sm" id="essayCloseAllBtn">すべて閉じる</button>
        </div>
      </div>
      <div class="callout callout-warn">
        <span class="callout-title">🔥 論述式試験の攻略法（NotebookLM・講義対策）</span>
        試験は<strong>論述式</strong>です。「結論 → 生理的メカニズム（ホルモン・組織・養分）→ 栽培上の意義」の順で書くと高得点になります。まず頭の中や紙で下書きしてから「解答例・キーワード」を開き、必須キーワードが網羅できたらチェックを付けましょう（現在 <strong>${checkedCount} / ${SAIBAI_DATA.essays.length} 問</strong> 習得済）。
      </div>
      <div class="chips">${unitChips}</div>
      ${list
        .map((item, i) => {
          const isDone = state.progress.checkedEssays.includes(item.id);
          const isOpen = state.essay.openIds.includes(item.id);
          const kwHtml = item.keywords
            ? `<div style="margin:8px 0;display:flex;flex-wrap:wrap;gap:6px;align-items:center;">
                <span style="font-size:0.8rem;font-weight:700;color:var(--text-muted);">必須キーワード：</span>
                ${item.keywords.map((k) => `<span class="tag tag-accent">${escapeHtml(k)}</span>`).join("")}
               </div>`
            : "";
          return `
        <div class="essay-card" style="${isDone ? "border-color:var(--success);" : ""}">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;gap:8px;flex-wrap:wrap;">
            <span class="tag">${escapeHtml(getUnitShortTitle(item.unitId))}</span>
            <div style="display:flex;align-items:center;gap:8px;">
              <button class="btn btn-sm ${isDone ? "btn-primary" : ""}" data-essay-check="${item.id}">
                ${isDone ? "✓ 書けるようになった" : "☐ 習得チェック"}
              </button>
              <span style="font-size:0.8rem;color:var(--text-muted);">Q${i + 1}</span>
            </div>
          </div>
          <div style="font-weight:700;font-size:1.02rem;margin-bottom:10px;">${escapeHtml(item.question)}</div>
          <button class="btn btn-sm btn-primary essay-toggle-btn" data-essay-idx="${i}" data-essay-id="${item.id}">${isOpen ? "解答を隠す" : "解答例・キーワードを見る"}</button>
          <div class="essay-answer ${isOpen ? "open" : ""}" id="essayAns-${i}">
            ${kwHtml}
            <div><strong>【模範解答】</strong></div>
            <div style="margin-top:4px;">${item.answer}</div>
            ${item.tip ? `<div style="margin-top:8px;font-size:0.86rem;color:var(--text-muted);">💡 <strong>減点防止メモ：</strong> ${escapeHtml(item.tip)}</div>` : ""}
          </div>
        </div>
      `;
        })
        .join("")}
    `;
  }

  /* ======================================================================
     Search View
     ====================================================================== */
  function renderSearch() {
    const q = state.searchQuery.toLowerCase();
    const matchedUnits = [];
    SAIBAI_DATA.units.forEach((u) => {
      u.sections.forEach((sec) => {
        const plain = (sec.title + " " + (sec.body || "")).replace(/<[^>]+>/g, " ");
        if (plain.toLowerCase().includes(q)) {
          matchedUnits.push({ unit: u, sec });
        }
      });
    });

    const matchedCards = SAIBAI_DATA.flashcards.filter(
      (c) => (c.q + " " + c.a + " " + (c.note || "")).toLowerCase().includes(q)
    );
    const matchedQuiz = SAIBAI_DATA.quizzes.filter(
      (qz) => (qz.question + " " + qz.options.join(" ") + " " + qz.explanation).toLowerCase().includes(q)
    );

    return `
      <div class="search-results-banner">
        <span>「<strong>${escapeHtml(state.searchQuery)}</strong>」の検索結果：ノート ${matchedUnits.length}件 / カード ${matchedCards.length}件 / テスト ${matchedQuiz.length}件</span>
        <button class="btn btn-sm" id="clearSearchBtn">検索をクリア</button>
      </div>

      ${
        matchedUnits.length > 0
          ? `<div class="section-header"><h2>📖 該当する講義セクション</h2></div>` +
            matchedUnits
              .map(
                ({ unit, sec }) => `
              <div class="card">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                  <span class="tag">${escapeHtml(unit.shortTitle)}</span>
                  <button class="btn btn-sm btn-primary" data-nav="unit:${unit.id}">この単元を開く</button>
                </div>
                <h3>${escapeHtml(sec.title)}</h3>
                <div>${sec.body || ""}</div>
              </div>
            `
              )
              .join("")
          : ""
      }

      ${
        matchedCards.length > 0
          ? `<div class="section-header"><h2>🃏 該当する一問一答</h2></div>` +
            matchedCards
              .map(
                (c) => `
              <div class="card">
                <span class="tag">${escapeHtml(getUnitShortTitle(c.unitId))}</span>
                <div style="font-weight:700;margin-top:6px;">Q. ${escapeHtml(c.q)}</div>
                <div style="color:var(--primary);font-weight:700;margin-top:4px;">A. ${escapeHtml(c.a)}</div>
                ${c.note ? `<div style="font-size:0.86rem;color:var(--text-muted);margin-top:4px;">${escapeHtml(c.note)}</div>` : ""}
              </div>
            `
              )
              .join("")
          : ""
      }

      ${
        matchedUnits.length === 0 && matchedCards.length === 0 && matchedQuiz.length === 0
          ? `<div class="card" style="text-align:center;padding:36px;">一致する項目が見つかりませんでした。</div>`
          : ""
      }
    `;
  }

  function getUnitShortTitle(unitId) {
    const u = SAIBAI_DATA.units.find((x) => x.id === unitId);
    return u ? u.shortTitle : unitId;
  }

  /* ======================================================================
     Main Render & Dynamic Event Binding
     ====================================================================== */
  function render() {
    const main = document.getElementById("mainContent");
    if (state.view === "overview") {
      main.innerHTML = renderOverview();
    } else if (state.view.startsWith("unit:")) {
      main.innerHTML = renderUnit(state.view.slice(5));
    } else if (state.view === "flashcards") {
      main.innerHTML = renderFlashcards();
    } else if (state.view === "quiz") {
      main.innerHTML = renderQuiz();
    } else if (state.view === "essay") {
      main.innerHTML = renderEssay();
    } else if (state.view === "search") {
      main.innerHTML = renderSearch();
    }
    bindViewEvents();
  }

  function bindViewEvents() {
    document.querySelectorAll("[data-nav]").forEach((btn) => {
      btn.addEventListener("click", () => navigate(btn.dataset.nav));
    });

    document.querySelectorAll("[data-quick-quiz]").forEach((btn) => {
      btn.addEventListener("click", () => {
        startQuiz(btn.dataset.quickQuiz, "all");
        navigate("quiz");
      });
    });

    document.querySelectorAll("[data-quick-cards]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.flashcard.filterUnit = btn.dataset.quickCards;
        state.flashcard.index = 0;
        navigate("flashcards");
      });
    });

    const toggleUnitBtn = document.getElementById("toggleUnitDoneBtn");
    if (toggleUnitBtn) {
      toggleUnitBtn.addEventListener("click", () => {
        const uid = toggleUnitBtn.dataset.unitId;
        const idx = state.progress.completedUnits.indexOf(uid);
        if (idx >= 0) state.progress.completedUnits.splice(idx, 1);
        else state.progress.completedUnits.push(uid);
        saveProgress();
        renderSidebarUnits();
        render();
      });
    }

    attachFertilizerCalcEvents();

    // Flashcard events
    document.querySelectorAll("[data-fc-unit]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.flashcard.filterUnit = btn.dataset.fcUnit;
        state.flashcard.index = 0;
        buildFlashcardDeck();
        render();
      });
    });

    const fcBox = document.getElementById("flashcardBox");
    const fcFlip = document.getElementById("fcFlipBtn");
    const toggleFlip = () => {
      state.flashcard.flipped = !state.flashcard.flipped;
      render();
    };
    if (fcBox) fcBox.addEventListener("click", toggleFlip);
    if (fcFlip) fcFlip.addEventListener("click", toggleFlip);

    const fcPrev = document.getElementById("fcPrevBtn");
    if (fcPrev) {
      fcPrev.addEventListener("click", () => {
        const len = state.flashcard.deck.length;
        state.flashcard.index = (state.flashcard.index - 1 + len) % len;
        state.flashcard.flipped = false;
        render();
      });
    }

    const fcNext = document.getElementById("fcNextBtn");
    if (fcNext) {
      fcNext.addEventListener("click", () => {
        const len = state.flashcard.deck.length;
        state.flashcard.index = (state.flashcard.index + 1) % len;
        state.flashcard.flipped = false;
        render();
      });
    }

    const fcMark = document.getElementById("fcMarkKnownBtn");
    if (fcMark) {
      fcMark.addEventListener("click", () => {
        const card = state.flashcard.deck[state.flashcard.index];
        if (!card) return;
        const i = state.progress.knownCards.indexOf(card.id);
        if (i >= 0) state.progress.knownCards.splice(i, 1);
        else state.progress.knownCards.push(card.id);
        saveProgress();
        if (state.flashcard.onlyUnlearned) {
          buildFlashcardDeck();
        }
        render();
      });
    }

    const fcUnlearned = document.getElementById("fcToggleUnlearned");
    if (fcUnlearned) {
      fcUnlearned.addEventListener("click", () => {
        state.flashcard.onlyUnlearned = !state.flashcard.onlyUnlearned;
        state.flashcard.index = 0;
        buildFlashcardDeck();
        render();
      });
    }

    const fcShowAll = document.getElementById("fcShowAllBtn");
    if (fcShowAll) {
      fcShowAll.addEventListener("click", () => {
        state.flashcard.onlyUnlearned = false;
        buildFlashcardDeck();
        render();
      });
    }

    const fcShuffle = document.getElementById("fcShuffleBtn");
    if (fcShuffle) {
      fcShuffle.addEventListener("click", () => {
        state.flashcard.deck.sort(() => Math.random() - 0.5);
        state.flashcard.index = 0;
        state.flashcard.flipped = false;
        render();
      });
    }

    // Quiz events
    document.querySelectorAll("[data-quiz-start]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const [u, m] = btn.dataset.quizStart.split(":");
        startQuiz(u, m);
        render();
      });
    });

    document.querySelectorAll("[data-quiz-opt]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (state.quiz.selected !== null) return;
        const chosen = parseInt(btn.dataset.quizOpt, 10);
        const q = state.quiz.questions[state.quiz.current];
        state.quiz.selected = chosen;
        if (chosen === q.answer) {
          state.quiz.score += 1;
          if (!state.progress.correctQuizIds.includes(q.id)) {
            state.progress.correctQuizIds.push(q.id);
          }
          state.progress.wrongQuizIds = state.progress.wrongQuizIds.filter((id) => id !== q.id);
        } else {
          if (!state.progress.wrongQuizIds.includes(q.id)) {
            state.progress.wrongQuizIds.push(q.id);
          }
        }
        saveProgress();
        render();
      });
    });

    const quizNext = document.getElementById("quizNextBtn");
    if (quizNext) {
      quizNext.addEventListener("click", () => {
        if (state.quiz.current + 1 >= state.quiz.questions.length) {
          state.quiz.finished = true;
        } else {
          state.quiz.current += 1;
          state.quiz.selected = null;
        }
        render();
      });
    }

    const quizRetry = document.getElementById("quizRetryBtn");
    if (quizRetry) {
      quizRetry.addEventListener("click", () => {
        startQuiz(state.quiz.filterUnit, state.quiz.mode);
        render();
      });
    }

    // Essay events
    document.querySelectorAll("[data-essay-check]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const eid = btn.dataset.essayCheck;
        const idx = state.progress.checkedEssays.indexOf(eid);
        if (idx >= 0) state.progress.checkedEssays.splice(idx, 1);
        else state.progress.checkedEssays.push(eid);
        saveProgress();
        render();
      });
    });

    document.querySelectorAll("[data-essay-unit]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.essay.filterUnit = btn.dataset.essayUnit;
        render();
      });
    });

    document.querySelectorAll(".essay-toggle-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const eid = btn.dataset.essayId;
        const ans = document.getElementById("essayAns-" + btn.dataset.essayIdx);
        if (ans) {
          const open = ans.classList.toggle("open");
          btn.textContent = open ? "解答を隠す" : "解答例・キーワードを見る";
          if (eid) {
            if (open && !state.essay.openIds.includes(eid)) state.essay.openIds.push(eid);
            if (!open) state.essay.openIds = state.essay.openIds.filter((id) => id !== eid);
          }
        }
      });
    });

    const openAll = document.getElementById("essayOpenAllBtn");
    if (openAll) {
      openAll.addEventListener("click", () => {
        state.essay.openIds = SAIBAI_DATA.essays.map((e) => e.id);
        document.querySelectorAll(".essay-answer").forEach((el) => el.classList.add("open"));
        document.querySelectorAll(".essay-toggle-btn").forEach((b) => (b.textContent = "解答を隠す"));
      });
    }

    const closeAll = document.getElementById("essayCloseAllBtn");
    if (closeAll) {
      closeAll.addEventListener("click", () => {
        state.essay.openIds = [];
        document.querySelectorAll(".essay-answer").forEach((el) => el.classList.remove("open"));
        document.querySelectorAll(".essay-toggle-btn").forEach((b) => (b.textContent = "解答例・キーワードを見る"));
      });
    }

    const clearSearch = document.getElementById("clearSearchBtn");
    if (clearSearch) {
      clearSearch.addEventListener("click", () => navigate("overview"));
    }
  }

  initTheme();
  setupEvents();
  renderSidebarUnits();
  render();
})();
