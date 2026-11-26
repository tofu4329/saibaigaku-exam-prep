/* ==========================================================================
   (G5560) 栽培学 試験対策データ (講義ノート10/23〜11/20 & 図版統合版)
   ========================================================================== */

const SAIBAI_DATA = {
  meta: {
    course: "(G5560) 栽培学",
    subtitle: "第1回(10/23)〜第5回(11/20)の講義資料・図版・NotebookLM試験対策ノートの全要点を網羅。論述式試験に対応したキーワード演習・赤シート暗記・一問一答・4択テストを搭載。"
  },

  notebookHighlights: [
    "<strong>論述式の基本戦略：</strong> 生理メカニズム（ホルモン・組織・養分）と栽培管理の「なぜ」をセットで説明できるようにする。",
    "<strong>栽培の教育効果7要素：</strong> <span class='cloze'>計画性</span>・<span class='cloze'>科学性</span>・<span class='cloze'>技術性</span>・<span class='cloze'>やさしさ(情操性)</span>・<span class='cloze'>自主性/責任感/集団性</span>・<span class='cloze'>社会性</span>・<span class='cloze'>ありがたさ/伝統</span>。",
    "<strong>維管束の配置逆転と極性：</strong> 茎は内側が<span class='cloze'>木部(道管)</span>・外側が<span class='cloze'>師部(師管)</span>。根は側根が<span class='cloze'>内鞘</span>から表皮を破って発生。茎頂由来の<span class='cloze'>オーキシン</span>が極性移動により切り口に蓄積して発根を促す。",
    "<strong>日長とフィトクロム：</strong> 短日植物の光中断では<span class='cloze'>最後にあたった光</span>で開花が決まる（<span class='cloze'>R=栄養成長</span> / <span class='cloze'>FR=開花</span>）。",
    "<strong>種子の発芽：</strong> 重複受精で胚と胚乳を形成。吸水した胚の<span class='cloze'>ジベレリン</span> → 糊粉層で<span class='cloze'>アミラーゼ</span>合成 → デンプンを<span class='cloze'>グルコース</span>へ分解。光発芽(レタス・シソ・ゴボウ) vs 暗発芽(ダイコン・スイカ・キュウリ)を区別。",
    "<strong>栄養繁殖（挿し木・接ぎ木・組織培養）：</strong> 挿し床が無肥料なのは<span class='cloze'>不定根</span>を出させるため。接ぎ木（割り接ぎ等）は<span class='cloze'>形成層</span>を密着させて維管束を再接続する。組織培養は<span class='cloze'>分化全能性</span>を利用し、<span class='cloze'>オーキシン多＝不定根</span> / <span class='cloze'>サイトカイニン多＝不定芽</span>。",
    "<strong>土と肥料の計算＆欠乏症：</strong> 施肥量＝<span class='cloze'>(①必要量 − ②天然養分) ÷ (利用率/100)</span>（有機物併用時はその供給量を差し引く）。Ca欠乏は<span class='cloze'>尻腐れ症</span>(トマト)・<span class='cloze'>芯腐れ病</span>(タマネギ)、P過剰で鉄欠乏、K過剰でCa・Mg欠乏。",
    "<strong>栽培管理：</strong> 粘土質は<span class='cloze'>高うね</span>、イモ類は<span class='cloze'>かまぼこ/峯型</span>。かん水は地際部へ（夏は朝・冬は日中）。誘引は<span class='cloze'>8の字結び</span>ですき間をあける。摘心は<span class='cloze'>頂芽優勢</span>を崩す。"
  ],

  comparisons: [
    {
      title: "1. 花芽分化と日長（長日・短日・中性植物）",
      note: "短日植物は夏至から日が短くなるのを感じ取って開花します。",
      headers: ["分類", "開花の条件", "代表的な植物（必暗記）"],
      rows: [
        ["<strong>長日植物</strong>", "日長が長くなると花芽分化・開花", "<span class='cloze'>レタス、ダイコン、ホウレンソウ、ムギ</span>"],
        ["<strong>短日植物</strong>", "日長が短くなると花芽分化・開花", "<span class='cloze'>キク、コスモス、アサガオ</span>、オナモミ"],
        ["<strong>中性植物</strong>", "日長に鈍感で高温下で開花", "<span class='cloze'>エンドウ、エダマメ</span>"]
      ]
    },
    {
      title: "2. 光発芽種子（好光性）と暗発芽種子（嫌光性）",
      note: "「〇〇は発芽に光が必要か？」とセットで問われやすい単元です。",
      headers: ["分類", "発芽の条件", "代表的な作物（表1.1・講義ノート）"],
      rows: [
        ["<strong>光発芽種子（好光性）</strong>", "発芽に<strong>光が必要</strong>", "<span class='cloze'>レタス、シソ、ゴボウ、ミツバ、タバコ</span>、ハクサイ、キャベツ、ハナヤサイ、シュンギク、セルリー、カブ、ニンジン"],
        ["<strong>暗発芽種子（嫌光性）</strong>", "<strong>暗黒中</strong>で発芽しやすい", "<span class='cloze'>ダイコン、スイカ、キュウリ、ケイトウ</span>、カボチャ、メロン、トマト、ナス、ピーマン、タマネギ、ネギ"]
      ]
    },
    {
      title: "3. 植物成長調節物質（植物ホルモン5種）",
      headers: ["ホルモン名", "主な働き・試験ポイント"],
      rows: [
        ["<strong>オーキシン</strong>", "<span class='cloze'>不定根形成</span>、細胞伸長（茎頂から分泌、重力方向の制御）"],
        ["<strong>サイトカイニン</strong>", "<span class='cloze'>不定芽形成</span>、細胞分裂"],
        ["<strong>ジベレリン</strong>", "細胞伸長、種子発芽（<span class='cloze'>糊粉層でアミラーゼ誘導</span>）、<span class='cloze'>ブドウの無核化</span>"],
        ["<strong>エチレン</strong>", "<span class='cloze'>後熟</span>、老化、細胞肥大（収穫後の追熟処理に利用）"],
        ["<strong>アブシジン酸 (ABA)</strong>", "<span class='cloze'>休眠</span>、離層形成、気孔閉鎖、発芽阻害物質"]
      ]
    },
    {
      title: "4. 必須元素の欠乏症・過剰症まとめ",
      headers: ["元素", "主な役割", "欠乏症", "過剰症"],
      rows: [
        ["<strong>N (窒素)</strong><br>＜葉＞", "アミノ酸・タンパク質・酵素", "生育遅れ小型化、葉が淡緑〜黄化、古い葉から枯れる", "葉が暗緑色、<span class='cloze'>過繁茂</span>"],
        ["<strong>P (リン酸)</strong><br>＜花＞", "<span class='cloze'>ATP</span>（エネルギー）の成分", "葉が暗緑色・艶なし、黒斑点、古い葉の葉脈が<span class='cloze'>赤紫色</span>、稔実・根不良", "<span class='cloze'>鉄(Fe)欠乏</span>"],
        ["<strong>K (カリウム)</strong><br>＜根＞", "pH・浸透圧調節（イオン）", "古い葉の周辺が黄変・白斑点・枯れ上がり、幼葉は青緑色", "<span class='cloze'>Ca・Mg欠乏</span>"],
        ["<strong>Ca (カルシウム)</strong>", "細胞壁・細胞膜の形成", "若い葉がスプーン状、<span class='cloze'>尻腐れ症</span>(トマト・ナス)、<span class='cloze'>芯腐れ病</span>(タマネギ)", "問題なし"],
        ["<strong>Mg (マグネシウム)</strong>", "<span class='cloze'>葉緑素</span>の成分", "収穫期に古い葉の<span class='cloze'>葉脈間が黄化</span>（葉脈沿いは緑）", "<span class='cloze'>Ca・K欠乏</span>"],
        ["<strong>S (硫黄)</strong>", "酵素の働き", "窒素欠乏に似た淡緑〜黄色", "稀に根腐れ（硫化水素）"]
      ]
    }
  ],

  units: [
    {
      id: "u1",
      date: "10/23",
      shortTitle: "1. 教育効果と植物構造",
      title: "第1回：栽培の教育効果・植物の構造と成長",
      summary: "授業準備・教育効果7項目、根・茎・葉・花の構造、日長反応とフィトクロム、細胞の成長型を学びます。",
      sections: [
        {
          title: "1-1. 授業の準備と栽培の教育効果",
          body: `
            <p>学校教育における栽培計画では、<strong>①いつ</strong>（春4月・秋9月・年中）、<strong>②どこで</strong>（田・畑・花壇・鉢・プランター・バケツ）、<strong>③何を</strong>（作物・野菜・草花・工芸作物[ワタ]）、<strong>④方法</strong>（授業・クラブ・体験学習）、<strong>⑤収穫</strong>（生食・調理・繊維をとる[ワタ]）を設計します。植物については<strong>原産地・性質(花芽分化など)・土と肥料(pH・連作)・病害虫</strong>を事前把握します。</p>
            <ul>
              <li><span class="cloze">計画性</span>：種まきから収穫までの栽培計画を立て、目標に向かって計画的に行動する能力</li>
              <li><span class="cloze">科学性</span>：植物の成長を観察することで、科学的認識の目を養う</li>
              <li><span class="cloze">技術性</span>：道具を使って自然に働きかけ、自然を変えたり適応したりする技術を身につける</li>
              <li><span class="cloze">やさしさ・情操性</span>：一貫して育てることで植物に愛着を持ち、生物へのやさしさを身につける</li>
              <li><span class="cloze">自主性・責任感・集団性</span>：当番や班活動から自ら作業し、助け合い、互いの責任を認め合う態度</li>
              <li><span class="cloze">社会性</span>：食物としての価値や農業体験から、農業の価値と社会との関係を理解する</li>
              <li><span class="cloze">ありがたさ・伝統</span>：農業などの地域文化への理解</li>
            </ul>
          `
        },
        {
          title: "1-2. 根と茎の構造（維管束の配置と変形）",
          body: `
            <p><strong>根</strong>は植物体を支持し水と無機栄養を吸収する器官です。茎や葉など根以外から生じた根を<span class="cloze">不定根</span>と呼びます。</p>
            <ul>
              <li><strong>根の基本構造（先端→基部）：</strong> <span class="cloze">根冠</span>（平衡細胞を含む）→ <span class="cloze">根端分裂組織（分裂域）</span> → <span class="cloze">伸長域</span> → <span class="cloze">成熟域</span>（<span class="cloze">根毛</span>＝吸水帯）。分裂組織は最先端ではなく少し上にある点に注意！</li>
              <li><strong>根毛と側根の違い：</strong> 根毛は<span class="cloze">表皮</span>から出て水分を吸収し、側根は内側の<span class="cloze">内鞘</span>からできて表皮を破って伸びます（師管などに接続するため）。</li>
              <li><strong>ダイコンの多様性（図5-2）：</strong> 普通種（練馬ダイコン約40cm）、世界一大きい<span class="cloze">桜島ダイコン</span>、長い<span class="cloze">守口ダイコン</span>（約1.5m）。</li>
              <li><strong>茎の維管束（図6-4）：</strong> 根で吸収した水・無機栄養を<span class="cloze">木部（道管）</span>で芽と葉へ、葉からの同化産物を<span class="cloze">師部（師管）</span>で根や芽へ輸送します。茎の維管束では<strong>内側が木部（道管）、外側が師部（師管）</strong>であり、根とは配置が異なります。表皮から分かれる維管束を<span class="cloze">葉跡</span>（皮層維管束）と呼びます。</li>
            </ul>
          `,
          diagramSvg: `
            <svg viewBox="0 0 640 210" width="600" aria-label="根の先端構造と茎の維管束配置">
              <rect x="10" y="10" width="300" height="190" rx="12" fill="var(--bg-surface)" stroke="var(--border)"/>
              <text x="160" y="34" text-anchor="middle" font-size="13" font-weight="700" fill="var(--primary)">根の基本構造（図5-3）</text>
              <path d="M100 50 L100 155 Q115 185 130 155 L130 50" fill="#e8f5e9" stroke="#2d6a4f" stroke-width="2"/>
              <path d="M100 155 Q115 185 130 155 Z" fill="#d8b892" stroke="#8d6e63"/>
              <line x1="85" y1="68" x2="100" y2="68" stroke="#2d6a4f" stroke-width="1.5"/>
              <line x1="85" y1="80" x2="100" y2="80" stroke="#2d6a4f" stroke-width="1.5"/>
              <line x1="130" y1="68" x2="145" y2="68" stroke="#2d6a4f" stroke-width="1.5"/>
              <line x1="130" y1="80" x2="145" y2="80" stroke="#2d6a4f" stroke-width="1.5"/>
              <text x="162" y="75" font-size="11" fill="var(--text-main)">成熟域（根毛＝吸水帯）</text>
              <text x="162" y="112" font-size="11" fill="var(--text-main)">伸長域</text>
              <text x="162" y="143" font-size="11" fill="var(--accent)" font-weight="700">分裂域（最先端より少し上）</text>
              <text x="162" y="170" font-size="11" fill="var(--text-main)">根冠（平衡細胞）</text>

              <rect x="330" y="10" width="300" height="190" rx="12" fill="var(--bg-surface)" stroke="var(--border)"/>
              <text x="480" y="34" text-anchor="middle" font-size="13" font-weight="700" fill="var(--primary)">茎の横断面（図6-4 エンドウ）</text>
              <rect x="415" y="50" width="130" height="130" rx="22" fill="#edf7ed" stroke="#2d6a4f" stroke-width="2"/>
              <circle cx="480" cy="115" r="42" fill="none" stroke="#52796f" stroke-dasharray="4 3"/>
              <circle cx="480" cy="76" r="10" fill="#2d6a4f"/>
              <circle cx="480" cy="87" r="8" fill="#c96f16"/>
              <text x="480" y="120" text-anchor="middle" font-size="11" fill="var(--text-muted)">髄</text>
              <text x="556" y="78" font-size="11" fill="#2d6a4f" font-weight="700">外側：師部(師管)</text>
              <text x="556" y="96" font-size="11" fill="#c96f16" font-weight="700">内側：木部(道管)</text>
              <text x="342" y="64" font-size="10" fill="var(--text-main)">葉跡(皮層維管束)</text>
              <line x1="428" y1="62" x2="442" y2="70" stroke="var(--text-muted)"/>
            </svg>
          `,
          table: {
            headers: ["区分", "茎の種類", "特徴と代表例（表6-1）"],
            rows: [
              ["地上茎", "直立茎", "ふつうにみられる直立する茎"],
              ["地上茎", "<span class='cloze'>匍匐茎</span>", "地表・浅い地下を横に伸びる（ツユクサ、<span class='cloze'>イチゴのランナー</span>）"],
              ["地上茎", "巻きつき茎", "自立できず他の物に巻きつく（アサガオなど）"],
              ["地上茎", "よじ登り茎", "巻きひげ・付着根・とげで上へ伸びる（<span class='cloze'>キズタ</span>など）"],
              ["地下茎", "<span class='cloze'>根茎</span>", "棒状で地下を水平に伸びる（タケの仲間、アヤメ）"],
              ["地下茎", "<span class='cloze'>塊茎</span>", "肥大して塊状、栄養貯蔵と栄養繁殖（<span class='cloze'>ジャガイモ</span>、キクイモ）"],
              ["地下茎", "<span class='cloze'>球茎</span>", "直立する茎が球形に肥大（グラジオラスなど）"],
              ["地下茎", "<span class='cloze'>鱗茎</span>", "極端に短い円盤状の茎に肉質の葉が密生（ヤマユリ、<span class='cloze'>タマネギ</span>※可食部は葉）"]
            ]
          }
        },
        {
          title: "1-3. 葉・花・フィトクロムと細胞の成長",
          body: `
            <ul>
              <li><strong>葉の構造（図7-9, 7-10）：</strong> 表面の硬いコーティングは<span class="cloze">クチクラ（角皮）</span>（水の蒸発を防ぐ）。その下に多層表皮・<span class="cloze">柵状柔組織</span>（葉緑体がびっしり）・<span class="cloze">海綿状柔組織</span>（細胞間隙）・<span class="cloze">気孔</span>（蒸散や呼吸）・葉脈（道管と師管の両方）があります。クロマツは有腕柵状組織や樹脂道を持ちます。</li>
              <li><strong>光合成の式：</strong> 二酸化炭素 ＋ 水 →（光＋葉緑体）→ デンプン ＋ 酸素（※細胞は常に呼吸も行っています）。</li>
              <li><strong>フィトクロムによる光中断（図8-1 短日植物オナモミ）：</strong> 暗期の途中に光を当てると開花が制御されます。ポイントは<span class="cloze">最後にあたった光</span>の種類です。<strong>赤色光(R)が最後＝栄養成長（開花しない）</strong>、<strong>近赤外光(FR)が最後＝開花</strong>（R-FR → 開花、R-FR-R → 栄養成長、FR-R → 栄養成長）。</li>
              <li><strong>花と果実の対応（表8-1）：</strong> 雄ずいは葯と花糸、雌ずいは柱頭・花柱・子房からなる。<span class="cloze">胚珠</span> → 種子（胚・胚乳・種皮）、<span class="cloze">子房壁</span> → 果皮（外・中・内果皮）、花梗 → 果梗。</li>
              <li><strong>細胞の成長型（図11-1）とオーキシン：</strong> <span class="cloze">細胞伸長</span>＝根や茎、<span class="cloze">平面的細胞拡大</span>＝葉、<span class="cloze">立体的細胞拡大</span>＝貯蔵器官。根が重力方向、茎が反重力方向へ伸びる制御は<span class="cloze">オーキシン</span>が行っています。</li>
            </ul>
          `,
          diagramSvg: `
            <svg viewBox="0 0 640 165" width="600" aria-label="フィトクロム光中断実験">
              <rect x="10" y="10" width="620" height="145" rx="12" fill="var(--bg-surface)" stroke="var(--border)"/>
              <text x="320" y="34" text-anchor="middle" font-size="13" font-weight="700" fill="var(--primary)">短日植物（オナモミ）の光中断とフィトクロム（図8-1）</text>
              <rect x="40" y="52" width="120" height="24" fill="#fff8dc" stroke="#999"/>
              <text x="100" y="68" text-anchor="middle" font-size="11" fill="#333">明期 (8h)</text>
              <rect x="160" y="52" width="250" height="24" fill="#6b7280" stroke="#4b5563"/>
              <rect x="275" y="52" width="16" height="24" fill="#ef4444"/>
              <text x="283" y="47" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="700">光中断</text>
              <text x="220" y="68" text-anchor="middle" font-size="11" fill="#fff">暗期</text>
              <text x="350" y="68" text-anchor="middle" font-size="11" fill="#fff">暗期</text>

              <text x="435" y="64" font-size="12" fill="var(--text-main)"><strong>R</strong>：栄養成長</text>
              <text x="435" y="84" font-size="12" fill="var(--success)" font-weight="700">FR：開 花</text>
              <text x="435" y="104" font-size="12" fill="var(--success)" font-weight="700">R → FR：開 花</text>
              <text x="435" y="124" font-size="12" fill="var(--text-main)"><strong>R → FR → R</strong>：栄養成長</text>
              <text x="435" y="144" font-size="12" fill="var(--text-main)"><strong>FR → R</strong>：栄養成長</text>

              <text x="40" y="112" font-size="12" fill="var(--accent)" font-weight="700">★ 最後にあたった光が</text>
              <text x="40" y="132" font-size="12" fill="var(--accent)" font-weight="700">FRなら開花、Rなら栄養成長！</text>
            </svg>
          `
        }
      ]
    },

    {
      id: "u2",
      date: "10/30",
      shortTitle: "2. 種子繁殖と発芽",
      title: "第2回：種子繁殖（構造・発芽・播種・定植）",
      summary: "無胚乳種子と有胚乳種子、発芽のジベレリン機構、光/暗発芽種子、播種法とセル成形苗を学びます。",
      sections: [
        {
          title: "2-1. 種子の構造と重複受精",
          body: `
            <p>種子は低温や乾燥など周囲の厳しい環境への耐性を持ちます。被子植物では<span class="cloze">重複受精</span>によって<strong>胚</strong>と<strong>胚乳</strong>が形成されます。有性生殖のため親の形質と子の形質は変わります。</p>
            <ul>
              <li><span class="cloze">無胚乳種子</span>：胚の発達途中で胚乳が吸収され、胚乳がない種子（例：<strong>インゲンマメなどのマメ科</strong>）。養分は<strong>子葉</strong>に蓄えられます。</li>
              <li><span class="cloze">有胚乳種子</span>：胚乳が存在する種子（例：<strong>コムギ・イネなどのイネ科</strong>）。種子の大部分が胚乳で、私たちが食べているお米の白い部分は<span class="cloze">胚乳</span>です。</li>
              <li><strong>もやし・かいわれ：</strong> もやしの茎のように見える部分は<span class="cloze">胚軸</span>。かいわれ大根は暗所で伸ばしてから光に当て光合成させて緑化させます。</li>
            </ul>
          `
        },
        {
          title: "2-2. 発芽の条件とジベレリンによるデンプン分解",
          body: `
            <ul>
              <li><strong>発芽の内的条件：</strong> ①胚の発達、②水分・気体の透過（種皮の傷つけ処理など）、③阻害物質の除去（<span class="cloze">アブシジン酸</span>、<span class="cloze">フェノール化合物</span>）。</li>
              <li><strong>発芽の外的条件：</strong> <strong>水分・酸素・温度・光</strong>。多くの野菜は20〜25℃付近が適温（表1.1の最高温度はあくまで限界値で、発芽しない個体も多い）。</li>
              <li><strong>ジベレリンの働き（図9-5）：</strong> 吸水した<span class="cloze">胚</span>から<span class="cloze">ジベレリン</span>が分泌され、種子の外周にある<span class="cloze">糊粉層</span>（こふんそう）に働いて消化酵素<span class="cloze">アミラーゼ</span>を合成させます。アミラーゼが胚乳のデンプンを<span class="cloze">グルコース</span>に分解し、胚の成長に使われます。</li>
            </ul>
          `,
          diagramSvg: `
            <svg viewBox="0 0 640 130" width="600" aria-label="種子発芽のジベレリン機構">
              <rect x="10" y="10" width="620" height="110" rx="12" fill="var(--bg-surface)" stroke="var(--border)"/>
              <text x="320" y="34" text-anchor="middle" font-size="13" font-weight="700" fill="var(--primary)">種子発芽時のデンプン分解の流れ（図9-5）</text>
              <rect x="25" y="54" width="76" height="40" rx="8" fill="#dcfce7" stroke="#15803d"/>
              <text x="63" y="79" text-anchor="middle" font-size="12" font-weight="700" fill="#15803d">胚 (吸水)</text>
              <path d="M104 74 L132 74" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arrow)"/>
              <rect x="136" y="54" width="102" height="40" rx="8" fill="#fef3e2" stroke="#c96f16"/>
              <text x="187" y="79" text-anchor="middle" font-size="12" font-weight="700" fill="#c96f16">ジベレリン</text>
              <path d="M242 74 L270 74" stroke="var(--text-main)" stroke-width="2"/>
              <rect x="274" y="50" width="122" height="48" rx="8" fill="#dbeafe" stroke="#1d4ed8"/>
              <text x="335" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="#1d4ed8">糊粉層</text>
              <text x="335" y="88" text-anchor="middle" font-size="11" fill="#1d4ed8">アミラーゼ合成</text>
              <path d="M400 74 L428 74" stroke="var(--text-main)" stroke-width="2"/>
              <rect x="432" y="50" width="182" height="48" rx="8" fill="#f3f4f6" stroke="#4b5563"/>
              <text x="523" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="#111">デンプン → グルコース</text>
              <text x="523" y="88" text-anchor="middle" font-size="11" fill="#555">（胚乳の養分を胚へ供給）</text>
            </svg>
          `
        },
        {
          title: "2-3. 播種方法・鉢上げ・セル成形苗",
          body: `
            <ul>
              <li><strong>畑への直まき：</strong>
                <span class="cloze">条まき</span>＝株間が狭くてよい作物（ホウレンソウ、シュンギク、コマツナ）。
                <span class="cloze">点まき</span>＝株間を広くとる作物（ハクサイ、ダイコン、ダイズ、トウモロコシ／1カ所に5〜6粒）。
              </li>
              <li><strong>苗床と鉢上げの注意：</strong> 育苗箱には5〜8cm間隔で溝を切って播種。鉢に植え替える際は、水はけのため底に鹿沼土・じゃり土を2〜3cm入れ、水がたまるよう上部を<strong>1〜2cm</strong>空けます。<strong>肥料は植え替え数日後に新しい用土の上に与えます</strong>（根が傷んでいる直後は避ける）。鉢ごと植え付けできるジフィーポットも有効。</li>
              <li><strong>セル成形苗：</strong> 小さな穴を並べた薄型トレーに播種・育苗した苗。<span class="cloze">根鉢の形成</span>により培養土が崩れず抜き出しと移植が簡単で、苗生産・流通・貯蔵が容易になります。</li>
            </ul>
          `,
          callout: {
            title: "講義の問い：畑（直播）栽培と鉢栽培の利点",
            body: "<strong>畑栽培：</strong> 大量生産ができ、管理作業が容易。<br><strong>鉢栽培：</strong> 植物を個々に管理でき、植物の生育や品質が良い。"
          }
        }
      ]
    },

    {
      id: "u3",
      date: "11/06",
      shortTitle: "3. 栄養繁殖と組織培養",
      title: "第3回：栄養繁殖（株分け・挿し木・接ぎ木・組織培養）",
      summary: "クローン増殖の仕組み、無肥料の挿し床・天挿しの理由、接ぎ木の種類と組み合わせ、組織培養のホルモン比を学びます。",
      sections: [
        {
          title: "3-1. 栄養繁殖の特徴と株分け",
          body: `
            <p><strong>種子繁殖との決定的違い：</strong> 種子繁殖は交配・遺伝により異なる形質を示しますが、栄養繁殖は<span class="cloze">同一の遺伝子</span>となるため<span class="cloze">同一の形質</span>を示します（クローン）。</p>
            <p><strong>1. 株分け：</strong> 生きた根をつけたまま植物体ごとに分ける方法で安全・簡便。<strong>乾燥と過湿</strong>に注意。適応植物：<span class="cloze">タケ、シャクヤク、ハナショウブ</span>。</p>
          `
        },
        {
          title: "3-2. 挿し木とミスト繁殖（重要「なぜ？」ポイント）",
          body: `
            <p>茎・葉・根の一部を切り離して挿し床に挿し、<span class="cloze">不定根</span>または<span class="cloze">不定芽</span>を形成させて独立した植物体を得ます（緑枝挿し：6〜7月、観葉植物：4〜8月）。</p>
            <ul>
              <li><strong>なぜ挿し床に肥料を入れないのか？</strong> → 肥料を含まない砂・バーミキュライト・鹿沼土・赤土・パーライトを使います。肥料があるとそこから吸収してしまい、<span class="cloze">不定根を作らなくなるため</span>です。</li>
              <li><strong>なぜ管挿しより天挿しの方が発根しやすいのか？</strong> → 天挿しには<span class="cloze">茎頂</span>があり、そこで作られた<span class="cloze">オーキシン</span>が<span class="cloze">極性移動</span>によって切り口に蓄積し、不定根形成を促進するためです。</li>
              <li><strong>なぜ葉を切除・半切りにし、ミストを使うのか？</strong> → 光合成・呼吸とともに<span class="cloze">蒸散</span>が起こるため、葉を減らして蒸散による水分損失を防ぎ水を多く吸わせます。ミストは空気中湿度を高めて蒸散を防ぎます（図1.13：採取→調整前水揚げ→調整→束ねて水揚げ1〜2h[オーキシン処理]→棒で挿し穴→密着→ミスト管理）。</li>
            </ul>
          `,
          table: {
            headers: ["挿し木の種類", "適応植物（表1.4）"],
            rows: [
              ["<strong>茎挿し</strong>（休眠枝・管・天）", "木本：アジサイ、イチジク、ウメ、スギ、ツツジ、ツバキ、ブドウ 等<br>草本：カーネーション、キク、ゼラニウム、ポインセチア、マーガレット 等"],
              ["<strong>葉芽挿し</strong>", "<span class='cloze'>ペペロミア、インドゴムノキ、ツバキ</span>"],
              ["<strong>葉挿し</strong>", "<span class='cloze'>セントポーリア、サンスベリア、カランコエ、レックスベゴニア</span>、グロキシニア、ペペロミア 等"],
              ["<strong>根挿し</strong>", "<span class='cloze'>カキ、ナシ、フジ、ボケ、トケイソウ</span>、エリスリナ、ライラック 等"]
            ]
          }
        },
        {
          title: "3-3. 接ぎ木の種類・台木と穂木の組み合わせ",
          body: `
            <p>異なる属・種・品種の<strong>穂木</strong>と<strong>台木</strong>を接合します（割り接ぎ等では<span class="cloze">形成層</span>を密着させて<span class="cloze">維管束</span>を再接続させます）。効果：土壌伝染性病害虫対策、不良環境耐性、樹勢コントロール（<span class="cloze">わい化</span>＝草丈を低くする）、品質向上（<span class="cloze">ブルームレス化</span>＝キュウリ表面の白い粉をなくす）、花芽分化促進。</p>
            <p><strong>接ぎ木手法と用途（図1.14＋メモ）：</strong> 芽接ぎ・接ぎ挿し（<span class="cloze">バラ苗生産</span>）、切り接ぎ（木本性植物）、割り接ぎ・斜め合わせ接ぎ（果樹・花き・野菜）、寄せ接ぎ（<span class="cloze">つる性植物：ウリ科・ブドウ</span>）、挿し接ぎ（<span class="cloze">スイカ</span>）。接合後は養生・順化用トンネル（図1.16）で管理します。</p>
          `,
          table: {
            headers: ["区分", "穂木", "主な台木", "目的とする特性（表1.5）"],
            rows: [
              ["果樹", "カンキツ", "<span class='cloze'>カラタチ</span>、ナツミカン、ユズ等", "耐寒性、すそ腐れ病・ミカンネセンチュウ抵抗性、わい化"],
              ["果樹", "リンゴ", "マルバカイドウ、ミツバカイドウ等", "リンゴワタムシ・根頭がんしゅ病抵抗性、わい化"],
              ["果樹", "ブドウ", "各種フィロキセラ抵抗性台", "<span class='cloze'>フィロキセラ抵抗性</span>、耐寒性、耐乾性"],
              ["花き", "バラ", "<span class='cloze'>ノイバラ</span>", "切り花数増加"],
              ["花き", "ボタン", "<span class='cloze'>シャクヤク</span>", "自根が出るまでの代用根"],
              ["野菜", "スイカ", "ユウガオ、トウガン、カボチャ、共台", "蔓割病抵抗性、耐乾性、低温伸長性、草勢維持"],
              ["野菜", "キュウリ", "<span class='cloze'>カボチャ</span>", "蔓割病抵抗性、低温伸長性、<span class='cloze'>ブルームレス化</span>"],
              ["野菜", "トマト", "共台", "青枯病・萎凋病・褐色根腐病抵抗性、低温伸長性"],
              ["野菜", "ナス", "<span class='cloze'>トルバム、ヒラナス</span>、共台", "青枯病・半枯病・ネコブセンチュウ抵抗性"]
            ]
          }
        },
        {
          title: "3-4. 組織培養と分化の方向（オーキシン vs サイトカイニン）",
          body: `
            <p>無菌条件で組織切片（成長点・茎・葉・花・根）を培養して再生する技術です。植物細胞の<span class="cloze">分化全能性</span>を利用し、優良形質を大量増殖できます（遺伝的変異を生じることもあり、<strong>遺伝子組換えはカルスを増やしている間</strong>に行います）。</p>
          `,
          diagramSvg: `
            <svg viewBox="0 0 640 165" width="600" aria-label="組織培養における分化の方向">
              <rect x="10" y="10" width="620" height="145" rx="12" fill="var(--bg-surface)" stroke="var(--border)"/>
              <text x="320" y="34" text-anchor="middle" font-size="13" font-weight="700" fill="var(--primary)">ホルモン濃度バランスと再分化の方向</text>
              <polygon points="80,138 115,138 97,55" fill="#3b82f6" opacity="0.8"/>
              <text x="97" y="150" text-anchor="middle" font-size="11" font-weight="700" fill="#1d4ed8">オーキシン</text>
              <polygon points="155,55 190,55 172,138" fill="#22c55e" opacity="0.8"/>
              <text x="172" y="150" text-anchor="middle" font-size="11" font-weight="700" fill="#15803d">サイトカイニン</text>

              <line x1="205" y1="62" x2="310" y2="62" stroke="#15803d" stroke-width="2"/>
              <rect x="315" y="48" width="290" height="28" rx="6" fill="#dcfce7" stroke="#15803d"/>
              <text x="460" y="67" text-anchor="middle" font-size="12" font-weight="700" fill="#15803d">サイトカイニン多・オーキシン少 → 不定芽</text>

              <line x1="205" y1="96" x2="310" y2="96" stroke="#2563eb" stroke-width="2"/>
              <rect x="315" y="82" width="290" height="28" rx="6" fill="#dbeafe" stroke="#2563eb"/>
              <text x="460" y="101" text-anchor="middle" font-size="12" font-weight="700" fill="#1d4ed8">中 間（バランス均衡）→ カルス（未分化塊）</text>

              <line x1="205" y1="130" x2="310" y2="130" stroke="#c96f16" stroke-width="2"/>
              <rect x="315" y="116" width="290" height="28" rx="6" fill="#fef3e2" stroke="#c96f16"/>
              <text x="460" y="135" text-anchor="middle" font-size="12" font-weight="700" fill="#c96f16">オーキシン多・サイトカイニン少 → 不定根</text>
            </svg>
          `
        }
      ]
    },

    {
      id: "u4",
      date: "11/13",
      shortTitle: "4. 土と肥料",
      title: "第4回：土と肥料（必須元素・化学肥料・土壌改良・施肥法）",
      summary: "必須元素の欠乏・過剰症、肥料表示の見方、堆肥と化学肥料の長所短所、施肥方法と利用率・施肥量計算を学びます。",
      sections: [
        {
          title: "4-1. 必須元素と肥料の三要素",
          body: `
            <p>肥料は「必須養分・時期・位置・量」の4点が重要です。<strong>肥料の三要素</strong>は<span class="cloze">窒素(N)＜葉＞</span>、<span class="cloze">リン酸(P)＜花＞</span>、<span class="cloze">カリウム(K)＜根＞</span>。</p>
            <ul>
              <li><strong>多量要素（9種）：</strong> C, H, O, N, P, K, Ca, Mg, S</li>
              <li><strong>微量要素：</strong> Cl(塩素), Fe(鉄), Mn(マンガン), B(ホウ素), Zn(亜鉛), Cu(銅), Mo(モリブデン)</li>
              <li><strong>特徴的な微量要素欠乏：</strong> Fe・Mn＝若い葉の葉脈間が黄化／B(ホウ素)＝茎・根の先端枯死、貯蔵器官や柔組織が黒変／Mo＝葉が白色化し縮れて枯れる。</li>
            </ul>
          `
        },
        {
          title: "4-2. 化学肥料・有機質肥料と袋の見方",
          body: `
            <p>肥料袋に <code>化成肥料 5-10-7</code> と書かれていれば、<strong>Nが5%、Pが10%、Kが7%</strong>含有を意味します。</p>
            <ul>
              <li><strong>単肥の例：</strong> 窒素肥料（硫酸アンモニウム、塩化アンモニウム、尿素、硝酸ナトリウム、硝酸アンモニウム）、リン酸肥料（過リン酸石灰、溶性リン肥）、カリウム肥料（塩化カリウム、硫酸カリウム）。</li>
              <li><strong>化成肥料 vs 有機質肥料：</strong> 普通化成(8-8-8)、高度化成(16-10-14 ※使いすぎると<span class="cloze">肥料負け</span>する)。有機質は堆肥(0.5-0.3-0.5)、油かす(5.0-2.5-1.5)、鶏糞(3.0-3.0-1.2)のように成分割合が低め。</li>
            </ul>
          `,
          table: {
            headers: ["資材区分", "長所", "短所・注意点"],
            rows: [
              ["<strong>化学肥料</strong>", "1. 即効性で肥効が高い<br>2. 施肥量を調節しやすい<br>3. 施肥コストが安い", "1. 過剰施用で<span class='cloze'>濃度障害</span><br>2. 土壌を<span class='cloze'>酸性化</span>しやすい<br>3. 土壌の<span class='cloze'>団粒ができにくい</span>"],
              ["<strong>堆肥（有機物施用）</strong>", "1. 未分解粗大有機物が孔隙を作り<span class='cloze'>通気性</span>向上<br>2. 腐植物質により団粒が強固・耐水性になり<span class='cloze'>膨軟化・保水性向上</span>", "成分含有率が低く、遅効性（作土増加には<strong>客土</strong>や約50cmの<strong>深耕</strong>も行う）"]
            ]
          }
        },
        {
          title: "4-3. 施肥方法・利用率と施肥量の算出",
          body: `
            <ul>
              <li><strong>時期別：</strong> <span class="cloze">元肥</span>（播種・移植前に圃場へ）、<span class="cloze">追肥</span>（栽培中に与える）、<span class="cloze">葉面施肥</span>（茎葉、特に葉の裏・若い葉・上位葉へ散布）。</li>
              <li><strong>位置別（図2.12）：</strong> 全層施肥、作条施肥、表面施肥、側条施肥、マルチ栽培での追肥。<strong>なぜ表面施肥は植物から離れた位置に行うのか？</strong> → <span class="cloze">根の先端にある分裂・吸収する部分に栄養を効かせるため</span>。</li>
              <li><strong>利用率（吸収される割合）：</strong> 窒素（水田20〜50%、畑40〜60%）、リン酸（水田・畑 <span class="cloze">5〜15%</span> ← 非常に低い！）、カリウム（水田・畑 40〜70%）。</li>
            </ul>
          `,
          customWidget: "fertilizer-calc"
        }
      ]
    },

    {
      id: "u5",
      date: "11/20",
      shortTitle: "5. 栽培管理",
      title: "第5回：栽培管理（畝立て・かん水・マルチ・支柱・整枝）",
      summary: "畝の種類と使い分け、かん水の時間帯と部位、マルチングの色別効果と展張手順、支柱誘引と摘芽・摘心を学びます。",
      sections: [
        {
          title: "5-1. うね（畝）の種類と使い分け",
          body: `
            <p><strong>うねの目的：</strong> 土壌の<span class="cloze">通気性</span>と<span class="cloze">排水性</span>を良好にし、作業用の通路を確保すること。</p>
          `,
          table: {
            headers: ["うねの種類", "高さ・形状", "適した土壌・作物・注意点（図4.1）"],
            rows: [
              ["<span class='cloze'>平うね</span>", "高さ15cmまで", "水もちが良く乾燥しない砂地、火山灰土、苗床"],
              ["<span class='cloze'>高うね</span>（台形）", "高さ15〜30cm", "水はけが悪い畑、<strong>粘土分が多い土壌</strong>（本学の栽培園など）、根菜類（ダイコン、ニンジン）。課題：深耕労力、作付面積減、肥料流失"],
              ["<span class='cloze'>かまぼこ型・峯型</span>", "丸み・山形", "土壌酸素が多く必要な<span class='cloze'>イモ類（サツマイモ、ジャガイモ）</span>"]
            ]
          }
        },
        {
          title: "5-2. かん水（水やり）とマルチング",
          body: `
            <ul>
              <li><strong>かん水の部位：</strong> 植物に直接かけると軟弱な苗が流水圧で傷つき、土が飛散して伝染病を広げるため、<span class="cloze">地際部</span>に与えます。</li>
              <li><strong>かん水の時間帯：</strong> 朝または夕方。特に<strong>夏季は<span class="cloze">朝</span></strong>（高温対策）、<strong>冬季は<span class="cloze">日中</span></strong>（低温・凍結防止）。表面が濡れていても内部が乾いていることがあるため土を掘って確認します。鉢は底から水がゆっくり流れるまで。</li>
              <li><strong>マルチングの効果：</strong>
                ①地温制御（透明＝地温高く保つが雑草対策要／夏季は敷きわら・銀色＝地温低く保つ）、
                ②雑草抑制（透明以外のフィルム、除草剤入り）、
                ③土壌水分維持（乾燥と塩類集積防止）、
                ④肥料の流亡抑制（※追肥も困難になる）、
                ⑤泥はね抑制（病害抑制）、
                ⑥害虫忌避（太陽光の反射）、
                ⑦光合成促進（反射光を葉裏に当てる）。
              </li>
            </ul>
          `,
          callout: {
            title: "フィルムマルチングの手順・注意事項（図4.28）",
            warn: true,
            body: "<strong>手順：</strong> (1)うね中央部をやや高くならす → (2)側面を垂直に削り土を通路中央へ → (3)<strong>風上端</strong>のフィルムを土で埋める → (4)芯に棒を挿し2人で運ぶ → (5)ピンと張り床端に土を置き切断 → (6)片足で張りながら通路中央の土を側端へのせる → (7)強風畑は床上の所々に土を置く。<br><strong>注意：</strong> 降雨・かん水後2〜4日後が作業しやすい／風の弱い日（午後は風が出やすい）／風下から展張すると作業が大変。"
          }
        },
        {
          title: "5-3. 支柱・誘引と整枝（摘芽 vs 摘心）",
          body: `
            <ul>
              <li><strong>支柱と誘引：</strong> マメ科やウリ科などのつる性植物に竹や硬質塩化ビニル被覆鉄パイプ（キュウリはネット）を使用。効果：作業性向上、受光態勢改善（光合成有効化）、通気性改善（病害虫抑制）。結び方は<span class="cloze">8の字に結び、すき間をあける</span>（茎の肥大を妨げないため）。</li>
              <li><strong>整枝 — <span class="cloze">摘芽</span>（わき芽かき）：</strong> 無駄な側枝を伸ばさないために側枝や側芽を摘み取り、主枝や果実に栄養を集中させる。</li>
              <li><strong>整枝 — <span class="cloze">摘心</span>（摘芯）：</strong> 頂芽（茎頂）を除去することで<span class="cloze">頂芽優勢</span>を崩し、上への栄養成長を抑えて側枝の伸長を促す。</li>
            </ul>
          `,
          diagramSvg: `
            <svg viewBox="0 0 640 160" width="600" aria-label="支柱の8の字結び・摘芽・摘心の模式図">
              <rect x="10" y="10" width="195" height="140" rx="10" fill="var(--bg-surface)" stroke="var(--border)"/>
              <text x="107" y="32" text-anchor="middle" font-size="12" font-weight="700" fill="var(--primary)">誘引：8の字結び</text>
              <line x1="72" y1="48" x2="72" y2="135" stroke="#6b7280" stroke-width="8" stroke-linecap="round"/>
              <line x1="138" y1="48" x2="138" y2="135" stroke="#15803d" stroke-width="6" stroke-linecap="round"/>
              <path d="M65 86 C95 72, 115 102, 145 88 C115 74, 95 104, 65 86" fill="none" stroke="#c96f16" stroke-width="3"/>
              <text x="107" y="128" text-anchor="middle" font-size="11" fill="var(--text-muted)">すき間をあけて結ぶ</text>

              <rect x="220" y="10" width="195" height="140" rx="10" fill="var(--bg-surface)" stroke="var(--border)"/>
              <text x="317" y="32" text-anchor="middle" font-size="12" font-weight="700" fill="var(--primary)">摘芽（側芽を摘む）</text>
              <line x1="317" y1="45" x2="317" y2="135" stroke="#15803d" stroke-width="6"/>
              <line x1="317" y1="95" x2="365" y2="68" stroke="#15803d" stroke-width="3"/>
              <line x1="317" y1="95" x2="345" y2="60" stroke="#dc2626" stroke-width="3" stroke-dasharray="3 2"/>
              <text x="358" y="55" font-size="11" fill="#dc2626" font-weight="700">× 側芽除去</text>
              <text x="317" y="138" text-anchor="middle" font-size="11" fill="var(--text-muted)">他の部位へ栄養集中</text>

              <rect x="430" y="10" width="200" height="140" rx="10" fill="var(--bg-surface)" stroke="var(--border)"/>
              <text x="530" y="32" text-anchor="middle" font-size="12" font-weight="700" fill="var(--primary)">摘心（頂芽を除去）</text>
              <line x1="530" y1="68" x2="530" y2="135" stroke="#15803d" stroke-width="6"/>
              <line x1="520" y1="60" x2="540" y2="60" stroke="#dc2626" stroke-width="3"/>
              <text x="530" y="52" text-anchor="middle" font-size="11" fill="#dc2626" font-weight="700">✂ 頂芽を摘む</text>
              <line x1="530" y1="95" x2="480" y2="75" stroke="#15803d" stroke-width="3"/>
              <line x1="530" y1="105" x2="580" y2="85" stroke="#15803d" stroke-width="3"/>
              <text x="530" y="138" text-anchor="middle" font-size="11" fill="var(--text-muted)">頂芽優勢を崩し側枝伸長</text>
            </svg>
          `
        }
      ]
    }
  ],

  flashcards: [
    { id: "fc1", unitId: "u1", q: "茎や葉など、根以外の器官から生じた根を何というか？", a: "不定根", note: "挿し木などで茎や葉から発生する根も不定根。" },
    { id: "fc2", unitId: "u1", q: "根の基本構造を先端から順に4つ答えよ。", a: "根冠 → 根端分裂組織（分裂域） → 伸長域 → 成熟域", note: "分裂域は最先端ではなく根冠の少し上に位置する。" },
    { id: "fc3", unitId: "u1", q: "根毛と側根はそれぞれ根のどの組織から発生するか？", a: "根毛：表皮 ／ 側根：内鞘（内側から表皮を破る）", note: "側根が内側からできるのは師管・木部などに接続するため。" },
    { id: "fc4", unitId: "u1", q: "茎の維管束では木部（道管）と師部（師管）は内側・外側のどちらにあるか？", a: "内側：木部（道管）、外側：師部（師管）", note: "水・無機栄養は木部(道管)、同化産物は師部(師管)が運ぶ。" },
    { id: "fc5", unitId: "u1", q: "イチゴのランナー、キズタ、ジャガイモ、タマネギはそれぞれ何茎か？", a: "ランナー：匍匐茎 / キズタ：よじ登り茎 / ジャガイモ：塊茎 / タマネギ：鱗茎", note: "タマネギの食べている部分は肉質の鱗状の葉、ヒゲの付け根が茎。" },
    { id: "fc6", unitId: "u1", q: "葉の表面を覆い水の蒸発を防ぐ硬いコーティング層は何か？", a: "クチクラ（角皮）", note: "その下に多層表皮・柵状柔組織・海綿状柔組織がある。" },
    { id: "fc7", unitId: "u1", q: "長日植物・短日植物・中性植物の代表例をそれぞれ挙げよ。", a: "長日：レタス,ダイコン,ホウレンソウ,ムギ ／ 短日：キク,コスモス,アサガオ ／ 中性：エンドウ,エダマメ", note: "短日植物は夏至から日が短くなるのを感じ取って開花する。" },
    { id: "fc8", unitId: "u1", q: "短日植物の光中断で、R→FR と R→FR→R を照射するとそれぞれどうなるか？", a: "R→FR：開花 ／ R→FR→R：栄養成長（開花しない）", note: "フィトクロムは「最後にあたった光」によって決まる（FR=開花、R=栄養成長）。" },
    { id: "fc9", unitId: "u1", q: "細胞の成長の3つの型（伸長・平面的拡大・立体的拡大）はどの器官でみられるか？", a: "細胞伸長：根・茎 ／ 平面的拡大：葉 ／ 立体的拡大：貯蔵器官", note: "図11-1より。" },
    { id: "fc10", unitId: "u2", q: "無胚乳種子と有胚乳種子の違いと代表例を挙げよ。", a: "無胚乳（マメ科・インゲンマメ）：発芽前に胚乳が吸収 ／ 有胚乳（イネ科・コムギ・イネ）：胚乳が残る", note: "私たちが食べているお米は「胚乳」の部分。" },
    { id: "fc11", unitId: "u2", q: "種子の発芽を阻害する物質（内的条件）を2つ挙げよ。", a: "アブシジン酸、フェノール化合物", note: "良い環境になってから発芽するための仕組み。" },
    { id: "fc12", unitId: "u2", q: "発芽時に胚から分泌され、糊粉層にアミラーゼを合成させる植物ホルモンは？", a: "ジベレリン", note: "アミラーゼがデンプンをグルコースに分解して胚へ送る。" },
    { id: "fc13", unitId: "u2", q: "光発芽種子（好光性）と暗発芽種子（嫌光性）の代表例は？", a: "光発芽：レタス、シソ、ゴボウ、ミツバ、タバコ ／ 暗発芽：ダイコン、スイカ、キュウリ、ケイトウ", note: "表1.1・講義ノートでセット暗記必須。" },
    { id: "fc14", unitId: "u2", q: "セル成形苗の最大の利点（キーワード）は何か？", a: "根鉢の形成", note: "培養土が崩れず抜き出し・移植が簡単で、生産・流通・貯蔵が容易。" },
    { id: "fc15", unitId: "u3", q: "栄養繁殖と種子繁殖の遺伝的・形質的な違いは？", a: "種子繁殖は交配し異なる形質を示すが、栄養繁殖は同一の遺伝子のため同一の形質を示す。", note: "親と全く同じクローンを得られるのが栄養繁殖。" },
    { id: "fc16", unitId: "u3", q: "挿し床に肥料を入れない理由は何か？", a: "肥料があるとそこから吸収してしまい、不定根を作らなくなるため。", note: "挿し床には砂、バーミキュライト、鹿沼土、赤土、パーライトなど無肥料の用土を使う。" },
    { id: "fc17", unitId: "u3", q: "天挿しが管挿しより不定根ができやすい理由は？", a: "茎頂があり、不定根形成を促すオーキシンが出るため。", note: "葉を半分に切る・ミストを使うのは「蒸散を防ぐ」ため。" },
    { id: "fc18", unitId: "u3", q: "キュウリの台木にカボチャを使う目的の1つで、果実表面の白い粉をなくすことを何というか？", a: "ブルームレス化", note: "バラの台木はノイバラ、ボタンはシャクヤク、ブドウはフィロキセラ抵抗性台。" },
    { id: "fc19", unitId: "u3", q: "組織培養で「オーキシン多・サイトカイニン少」と逆の条件ではそれぞれ何が分化する？", a: "オーキシン多：不定根 ／ サイトカイニン多：不定芽", note: "中間バランスで未分化の細胞塊「カルス」になる。遺伝子組換えはカルス増殖中に行う。" },
    { id: "fc20", unitId: "u3", q: "5大植物ホルモンのうち、収穫後の追熟に使われるものと、ブドウの種なし化に使われるものは？", a: "追熟（後熟）：エチレン ／ ブドウの種なし化：ジベレリン", note: "アブシジン酸は休眠・離層形成・気孔閉鎖。" },
    { id: "fc21", unitId: "u4", q: "肥料の三要素とその俗称（部位）を答えよ。", a: "窒素(N)＜葉＞、リン酸(P)＜花＞、カリウム(K)＜根＞", note: "PはATPの成分、Mgは葉緑素の成分、Caは細胞壁・膜の形成。" },
    { id: "fc22", unitId: "u4", q: "トマトの尻腐れ症、タマネギの芯腐れ病は何の欠乏によるものか？", a: "カルシウム（Ca）欠乏", note: "Caの過剰による障害は「問題なし」。" },
    { id: "fc23", unitId: "u4", q: "リン酸(P)過剰、カリウム(K)過剰でそれぞれどの元素が欠乏するか？", a: "P過剰：鉄(Fe)欠乏 ／ K過剰：カルシウム(Ca)・マグネシウム(Mg)欠乏", note: "Mg過剰ではCa・K欠乏が生じる。" },
    { id: "fc24", unitId: "u4", q: "化学肥料の長所3つと短所3つは？", a: "長所：即効性・調節しやすい・安価 ／ 短所：濃度障害・土壌酸性化・団粒ができにくい", note: "高度化成(16-10-14)の使いすぎは「肥料負け」を起こす。" },
    { id: "fc25", unitId: "u4", q: "肥料3成分のうち、水田・畑ともに利用率が5〜15%と最も低いものは？", a: "リン酸（P）", note: "Nは水田20〜50%・畑40〜60%、Kは40〜70%。" },
    { id: "fc26", unitId: "u5", q: "粘土分の多い畑や水はけの悪い畑、イモ類にそれぞれ適したうねは？", a: "粘土質・排水不良：高うね ／ イモ類：かまぼこ型・峯型", note: "平うねは排水の良い砂地・火山灰土・苗床に適する。" },
    { id: "fc27", unitId: "u5", q: "夏と冬でかん水（水やり）を行うべき時間帯は？", a: "夏季：朝（夕方） ／ 冬季：日中", note: "高温や凍結を防ぎ、根を傷めないよう「地際部」に与える。" },
    { id: "fc28", unitId: "u5", q: "支柱への誘引で紐を結ぶときの基本は？", a: "8の字に結び、すき間をあける", note: "茎の生長・肥大で紐が食い込むのを防ぐ。" },
    { id: "fc29", unitId: "u5", q: "摘芽と摘心の目的の違いを簡潔に答えよ。", a: "摘芽：無駄な側枝を摘み他の部位へ栄養集中 ／ 摘心：頂芽を除去し頂芽優勢を崩して側枝の伸長を促す", note: "摘心は茎頂を取る操作。" }
  ],

  quizzes: [
    {
      id: "q1",
      unitId: "u1",
      question: "根の構造に関する記述として正しいものはどれか？",
      options: [
        "根の分裂組織は根の最先端（根冠の外側）に位置する。",
        "根毛は内鞘から表皮を破って発生する。",
        "側根は内側から形成され、表皮を破って伸びる。",
        "茎の維管束では外側が木部（道管）、内側が師部（師管）である。"
      ],
      answer: 2,
      explanation: "側根は内鞘など内側から発生して表皮を破ります（師管などに接続するため）。根毛は表皮から出ます。分裂組織は根冠の少し上にあり、茎の維管束は内側が木部・外側が師部です。"
    },
    {
      id: "q2",
      unitId: "u1",
      question: "地下茎の分類と植物の組み合わせとして誤っているものはどれか？",
      options: [
        "根茎：タケの仲間、アヤメ",
        "塊茎：ジャガイモ、キクイモ",
        "球茎：グラジオラス",
        "鱗茎：イチゴのランナー"
      ],
      answer: 3,
      explanation: "イチゴのランナーは地上茎の「匍匐茎」です。鱗茎の代表例はタマネギやヤマユリです。"
    },
    {
      id: "q3",
      unitId: "u1",
      question: "短日植物（オナモミ）の暗期途中に光中断を行ったとき、「開花」する照射パターンはどれか？",
      options: [
        "R（赤色光）のみ",
        "R → FR（近赤外光）",
        "R → FR → R",
        "FR → R"
      ],
      answer: 1,
      explanation: "フィトクロムは最後にあたった光の種類で反応が決まります。最後がFR（近赤外光）であれば開花、R（赤色光）であれば栄養成長（開花しない）となります。"
    },
    {
      id: "q4",
      unitId: "u1",
      question: "長日植物の組み合わせとして正しいものはどれか？",
      options: [
        "レタス、ダイコン、ホウレンソウ、ムギ",
        "キク、コスモス、アサガオ",
        "エンドウ、エダマメ",
        "キク、ホウレンソウ、エンドウ"
      ],
      answer: 0,
      explanation: "長日植物はレタス、ダイコン、ホウレンソウ、ムギ。短日植物はキク、コスモス、アサガオ。中性植物はエンドウ、エダマメです。"
    },
    {
      id: "q5",
      unitId: "u2",
      question: "種子の構造と発芽に関する記述として正しいものはどれか？",
      options: [
        "マメ科の種子は有胚乳種子であり、私たちが食べるお米も無胚乳種子である。",
        "胚から分泌されたアブシジン酸が糊粉層に働き、アミラーゼを合成させる。",
        "もやしの茎のように伸びる部分は「胚軸」である。",
        "被子植物は単受精によって胚と胚乳を形成する。"
      ],
      answer: 2,
      explanation: "もやしの茎に見える部分は胚軸です。マメ科は無胚乳種子、イネ科は有胚乳種子（お米は胚乳）。糊粉層にアミラーゼを合成させるのはジベレリンで、被子植物は重複受精を行います。"
    },
    {
      id: "q6",
      unitId: "u2",
      question: "次のうち「光発芽種子（好光性種子）」のみで構成されている組はどれか？",
      options: [
        "ダイコン、スイカ、キュウリ",
        "レタス、シソ、ゴボウ、ミツバ",
        "トマト、ナス、ピーマン",
        "レタス、ダイコン、タマネギ"
      ],
      answer: 1,
      explanation: "レタス、シソ、ゴボウ、ミツバ、タバコなどは光発芽種子です。ダイコン、スイカ、キュウリ、トマト、ナス、ピーマン、タマネギは暗発芽種子です。"
    },
    {
      id: "q7",
      unitId: "u2",
      question: "畑への直まき方法と作物の組み合わせとして適切なものはどれか？",
      options: [
        "条まき：株間を広くとるダイコン・トウモロコシ",
        "点まき：株間が狭くてよいホウレンソウ・コマツナ",
        "点まき：株間を広くとるハクサイ・ダイズ（1カ所に5〜6粒）",
        "セル成形苗：根鉢を形成させないため移植が難しい"
      ],
      answer: 2,
      explanation: "点まきは株間を広くとる作物（ハクサイ、ダイコン、ダイズ、トウモロコシ）に使い1カ所に5〜6粒まきます。条まきはホウレンソウ・シュンギク・コマツナなどです。"
    },
    {
      id: "q8",
      unitId: "u3",
      question: "挿し木に関する記述として誤っているものはどれか？",
      options: [
        "挿し床には不定根を出させるため、肥料を含まない砂や鹿沼土などを用いる。",
        "管挿しより天挿しの方が、茎頂からオーキシンが出るため不定根ができやすい。",
        "挿し穂の葉を切り詰めたりミストをかけたりするのは、蒸散を防ぐためである。",
        "カキやナシ、フジなどは主に「葉挿し」によって繁殖させる。"
      ],
      answer: 3,
      explanation: "カキ、ナシ、フジ、ボケなどは「根挿し」の適応植物です。葉挿しはセントポーリア、ペペロミア、サンスベリア、レックスベゴニアなどです。"
    },
    {
      id: "q9",
      unitId: "u3",
      question: "接ぎ木の穂木・台木・目的の組み合わせとして誤っているものはどれか？",
      options: [
        "バラ × ノイバラ：切り花数増加",
        "ボタン × シャクヤク：自根が出るまでの代用根",
        "キュウリ × カボチャ：ブルームレス化・蔓割病抵抗性",
        "スイカ × カラタチ：フィロキセラ抵抗性"
      ],
      answer: 3,
      explanation: "カラタチはカンキツの台木（耐寒性・わい化など）、フィロキセラ抵抗性台はブドウの台木です。スイカの台木はユウガオ、トウガン、カボチャなどです。"
    },
    {
      id: "q10",
      unitId: "u3",
      question: "組織培養および植物成長調節物質に関する記述として正しいものはどれか？",
      options: [
        "オーキシン濃度が高くサイトカイニン濃度が低いと不定芽が分化する。",
        "遺伝子組換え操作は、植物体が完全に再生した後に葉に対して行う。",
        "エチレンは収穫後の追熟（後熟）や老化・細胞肥大に関与する。",
        "ジベレリンは気孔の閉鎖や休眠誘導に使われる。"
      ],
      answer: 2,
      explanation: "オーキシン高・サイトカイニン低では「不定根」、逆で「不定芽」になります。遺伝子組換えはカルス増殖中に行い、気孔閉鎖や休眠はアブシジン酸の働きです。"
    },
    {
      id: "q11",
      unitId: "u4",
      question: "必須元素の欠乏症・過剰症の組み合わせとして正しいものはどれか？",
      options: [
        "カルシウム欠乏：トマトの尻腐れ症、タマネギの芯腐れ病",
        "窒素欠乏：葉が暗緑色になり過繁茂になる",
        "リン酸過剰：カルシウム・マグネシウム欠乏を引き起こす",
        "マグネシウム欠乏：若い葉が白色になり縮れてしぼむ"
      ],
      answer: 0,
      explanation: "Ca欠乏は尻腐れ症・芯腐れ病を起こします。過繁茂はN過剰、P過剰は鉄欠乏、Ca・Mg欠乏を引き起こすのはK過剰、葉が白く縮れるのはモリブデン(Mo)欠乏です。"
    },
    {
      id: "q12",
      unitId: "u4",
      question: "肥料袋に「5-10-7」と表記された化成肥料および化成肥料の特徴について正しいものはどれか？",
      options: [
        "カリウム10%、リン酸7%、窒素5%が含まれている。",
        "化学肥料は土壌の団粒構造を形成しやすく、土壌をアルカリ性にする。",
        "表面施肥を植物から離して施すのは、根の先端の分裂・吸収部位に効かせるためである。",
        "リン酸の肥料利用率は水田・畑とも約50〜70%と高い。"
      ],
      answer: 2,
      explanation: "「5-10-7」は左からN-P-Kの順です。化学肥料は団粒ができにくく土壌を酸性化しやすいのが短所。リン酸の利用率は5〜15%と非常に低いです。"
    },
    {
      id: "q13",
      unitId: "u4",
      question: "目標吸収量①が22 kg/10a、土壌からの天然養分②が10 kg/10a、肥料の利用率が40%のとき、必要な施肥量（有機物混用なし）はいくらか？",
      options: [
        "4.8 kg/10a",
        "12.0 kg/10a",
        "30.0 kg/10a",
        "55.0 kg/10a"
      ],
      answer: 2,
      explanation: "施肥量 = (① − ②) ÷ (利用率 / 100) = (22 − 10) ÷ 0.4 = 12 ÷ 0.4 = 30.0 kg/10a となります。"
    },
    {
      id: "q14",
      unitId: "u5",
      question: "うね（畝）の種類と適応条件の組み合わせとして正しいものはどれか？",
      options: [
        "平うね：水はけが悪い畑や粘土分が多い土壌",
        "高うね：排水の良い砂地や苗床（高さ15cmまで）",
        "かまぼこ型・峯型：土壌酸素が多く必要なサツマイモ・ジャガイモ",
        "高うねには肥料の流失が全くないという利点がある"
      ],
      answer: 2,
      explanation: "サツマイモやジャガイモなど土壌酸素を多く必要とするイモ類には「かまぼこ型」「峯型」を用います。粘土質や排水不良は高うね（15〜30cm）、砂地・苗床は平うね（15cmまで）です。"
    },
    {
      id: "q15",
      unitId: "u5",
      question: "栽培管理（かん水・マルチング・支柱・整枝）について誤っているものはどれか？",
      options: [
        "冬季のかん水は低温や凍結を避けるため日中に行う。",
        "フィルムマルチを張るときは最初に「風下端」を土で埋めてから風上へ運ぶ。",
        "支柱に茎を結ぶときは「8の字結び」にし、すき間をあける。",
        "摘心は頂芽を除去して頂芽優勢を崩し、側枝の伸長を促す作業である。"
      ],
      answer: 1,
      explanation: "フィルムマルチングの手順では、最初に床の「風上端」でフィルムの端を土で埋めます。風下から展張すると風を受けて作業が大変になります。"
    }
  ],

  essays: [
    {
      id: "e1",
      unitId: "u1",
      question: "【栽培の教育効果】児童生徒に対して栽培活動はどのような教育効果をもたらすか？（7つの観点から説明せよ）",
      keywords: ["計画性", "科学性", "技術性", "やさしさ・情操性", "自主性・責任感・集団性", "社会性", "ありがたさ・伝統"],
      answer: "①<strong>計画性</strong>（栽培計画を立て目標に向かって行動する能力）、②<strong>科学性</strong>（成長観察により科学的認識の目を養う）、③<strong>技術性</strong>（道具を使い自然に働きかけ適応する技術）、④<strong>やさしさ・情操性</strong>（一貫して育て愛着と生命へのやさしさを養う）、⑤<strong>自主性・責任感・集団性</strong>（当番・班活動で助け合い責任を認め合う）、⑥<strong>社会性</strong>（食物の価値や農業と社会の関係を理解）、⑦<strong>ありがたさ・伝統</strong>（地域文化としての農業理解）。",
      tip: "単語だけでなく「計画を立てる→計画性」「観察する→科学性」のように活動内容と結びつけて記述する。"
    },
    {
      id: "e2",
      unitId: "u1",
      question: "【根の構造】根毛と側根の発生部位の違いと、側根が表皮ではなく内側から発生する理由を説明せよ。",
      keywords: ["根毛＝表皮", "側根＝内鞘（内側）", "木部・道管", "師部・師管", "維管束への接続"],
      answer: "<strong>根毛</strong>は最外層の<strong>表皮</strong>細胞が伸びてでき水分吸収を担うのに対し、<strong>側根</strong>は内側の<strong>内鞘</strong>から発生して表皮を破って伸びる。その理由は、側根が吸収した水や無機栄養を輸送し、また同化産物を受け取るために中心柱の<strong>道管（木部）や師管（師部）と接続する必要があるため</strong>である。",
      tip: "「茎の維管束は内側が木部・外側が師部である」ことと混同しないよう注意。"
    },
    {
      id: "e3",
      unitId: "u1",
      question: "【花芽分化と光中断】短日植物（オナモミ）の暗期に赤色光(R)や近赤外光(FR)を照射する光中断実験において、開花・栄養成長が決まる仕組みをフィトクロムに触れて説明せよ。",
      keywords: ["フィトクロム", "最後にあたった光", "赤色光(R)＝栄養成長", "近赤外光(FR)＝開花", "可逆的変化"],
      answer: "短日植物は連続した暗期によって花芽分化し開花するが、暗期の途中に光を当てる（光中断）と光受容体である<strong>フィトクロム</strong>の状態が切り替わり、<strong>最後にあたった光</strong>の種類によって反応が決まる。最後が<strong>赤色光(R)であれば栄養成長</strong>（開花抑制）となり、<strong>近赤外光(FR)であれば開花</strong>する（例：R→FRは開花、R→FR→Rは栄養成長）。",
      tip: "「最後にあたった光」がRなら栄養成長、FRなら開花、と具体例を添えると説得力が増す。"
    },
    {
      id: "e4",
      unitId: "u2",
      question: "【種子の構造と発芽機構】有胚乳種子と無胚乳種子の違いを述べ、吸水後の種子発芽におけるデンプン分解の生理的プロセスを説明せよ。",
      keywords: ["重複受精", "有胚乳種子(イネ科)", "無胚乳種子(マメ科・子葉)", "ジベレリン", "糊粉層", "アミラーゼ", "グルコース"],
      answer: "被子植物は重複受精により胚と胚乳を形成し、胚乳が発達途中で吸収され子葉に栄養を蓄える<strong>無胚乳種子（マメ科など）</strong>と、胚乳が残る<strong>有胚乳種子（イネ科など）</strong>に分かれる。吸水により休眠阻害物質（アブシジン酸等）が除かれると、<strong>胚がジベレリンを合成</strong>して<strong>糊粉層</strong>に作用し、消化酵素<strong>アミラーゼ</strong>が合成される。これが胚乳の<strong>デンプンをグルコースに分解</strong>し、胚の成長エネルギーとして供給される。",
      tip: "「胚 → ジベレリン → 糊粉層 → アミラーゼ → デンプン → グルコース」の順序を正確に書く。"
    },
    {
      id: "e5",
      unitId: "u2",
      question: "【播種・育苗】畑への直播（じかまき）栽培と鉢栽培のそれぞれの利点、およびセル成形苗を用いる利点を説明せよ。",
      keywords: ["畑＝大量生産・管理容易", "鉢＝個別管理・品質向上", "セル成形苗", "根鉢の形成", "流通・移植が容易"],
      answer: "<strong>畑栽培</strong>は大量生産が可能で管理作業をまとめて行いやすい利点がある一方、<strong>鉢栽培</strong>は個々に管理でき植物の生育や品質を高められる利点がある。また、トレーで育苗する<strong>セル成形苗</strong>は培養土が根でまとまる<strong>根鉢の形成</strong>により土が崩れず抜き出しと移植が簡単であり、苗生産・流通・貯蔵が容易になる。",
      tip: "セル成形苗では必ず「根鉢の形成」というキーワードを入れる。"
    },
    {
      id: "e6",
      unitId: "u3",
      question: "【栄養繁殖と種子繁殖】栄養繁殖（株分け・挿し木など）によって得られる植物体の遺伝的・形質的特徴を、種子繁殖と比較して説明せよ。",
      keywords: ["交配・遺伝", "異なる形質", "同一の遺伝子（クローン）", "同一の形質"],
      answer: "<strong>種子繁殖</strong>は交配を経て受精・遺伝するため親とは<strong>異なる形質</strong>を示す個体が現れるのに対し、<strong>栄養繁殖</strong>は母株の栄養器官から再生するため<strong>同一の遺伝子</strong>を持ち、親と<strong>同一の形質</strong>（クローン）を安定して維持・増殖できる。",
      tip: "「優良形質を変えずに増やせる」という栽培上の意義を添える。"
    },
    {
      id: "e7",
      unitId: "u3",
      question: "【挿し木①】挿し木用の「挿し床」に肥料を含まない用土（砂・鹿沼土・バーミキュライト等）を使う理由はなぜか？",
      keywords: ["不定根", "養分吸収", "発根促進"],
      answer: "挿し木ではまず独立した個体となるために<strong>不定根を形成させること</strong>が必須であるが、挿し床に肥料が含まれていると切り口から直接養分を吸収してしまい、<strong>不定根を作らなくなるため</strong>、あえて無肥料の用土を用いる。",
      tip: "砂・バーミキュライト・鹿沼土・赤土・パーライトなどの具体例を挙げても良い。"
    },
    {
      id: "e8",
      unitId: "u3",
      question: "【挿し木②】同じ茎挿しでも「管挿し」より「天挿し」の方が不定根ができやすい理由は何か？また、葉を半分に切ったりミスト下で管理したりする理由も併せて説明せよ。",
      keywords: ["茎頂", "オーキシン", "極性移動", "不定根形成", "蒸散抑制"],
      answer: "<strong>天挿しが発根しやすい理由：</strong> 天挿しには<strong>茎頂</strong>があり、ここで生成された植物ホルモンである<strong>オーキシン</strong>が極性移動によって切り口付近へ運ばれ、<strong>不定根の形成を促進するため</strong>である。<br><strong>葉を切り詰める・ミスト管理する理由：</strong> 発根前の挿し穂は吸水力が弱いため、基部の葉を除去したり葉身を半分切ったりし、さらにミストで空中湿度を高めることで<strong>蒸散による水分損失を防ぎ枯死を避けるため</strong>である。",
      tip: "「オーキシン」「極性移動」「蒸散抑制」の3語を軸に2段構成で書く。"
    },
    {
      id: "e9",
      unitId: "u3",
      question: "【接ぎ木】接ぎ木（割り接ぎ等）を行う栽培上の主な目的と、接合部が活着する仕組み（構造上のポイント）を説明せよ。",
      keywords: ["土壌伝染性病害虫対策", "不良環境耐性", "わい化", "ブルームレス化", "形成層・維管束の再接続"],
      answer: "<strong>目的：</strong> 異なる穂木と台木を接合することで、①土壌伝染性病害虫の回避（例：ウリ科の蔓割病・ナス科の青枯病）、②低温伸長性や耐寒性などの不良環境耐性の付与、③樹勢コントロール（<strong>わい化</strong>）、④品質向上（キュウリの<strong>ブルームレス化</strong>）などを図る。<br><strong>活着の仕組み：</strong> 割り接ぎなどでは穂木と台木の<strong>形成層を密着させて維管束（道管・師管）を再接続</strong>させることで水・養分の通導を回復させ、養生・順化トンネルで高湿度・適温を保ち活着させる。",
      tip: "目的の具体例（例：キュウリ×カボチャでブルームレス化など）を1〜2個入れると盤石。"
    },
    {
      id: "e10",
      unitId: "u3",
      question: "【組織培養と植物ホルモン】植物の組織培養が成立する生物学的根拠と、培地中の植物ホルモン濃度比によって再分化の方向がどう制御されるか説明せよ。",
      keywords: ["分化全能性", "カルス", "オーキシン", "サイトカイニン", "不定根・不定芽"],
      answer: "組織培養は、植物細胞が1つから個体全体を形成するあらゆる細胞へ再生できる<strong>分化全能性</strong>を基盤としている。無菌培地上で生じた未分化の細胞塊（<strong>カルス</strong>）は、培地中のホルモンバランスによって再分化の方向が決まり、<strong>オーキシン濃度が高くサイトカイニン濃度が低いと「不定根」</strong>が、逆に<strong>サイトカイニン濃度が高くオーキシン濃度が低いと「不定芽」</strong>が分化する（両者が均衡するとカルスが増殖し、遺伝子組換えはこの段階で行う）。",
      tip: "比率の逆転ミスに注意！オーキシン多＝根、サイトカイニン多＝芽。"
    },
    {
      id: "e11",
      unitId: "u4",
      question: "【必須元素の過不足】主要な必須元素（N, P, K, Ca, Mg）について、植物体内の主な役割と代表的な欠乏症・過剰による拮抗作用を説明せよ。",
      keywords: ["N(アミノ酸・過繁茂)", "P(ATP・赤紫・鉄欠乏)", "K(浸透圧・Ca/Mg欠乏)", "Ca(細胞壁・尻腐れ)", "Mg(葉緑素・葉脈間黄化)"],
      answer: "<strong>窒素(N)</strong>はアミノ酸・タンパク質成分で欠乏すると黄化・小型化し、過剰で暗緑色・過繁茂になる。<strong>リン酸(P)</strong>はATP成分で欠乏すると古い葉の葉脈が赤紫色を帯び、過剰で鉄欠乏を招く。<strong>カリウム(K)</strong>はpH・浸透圧に関与し過剰でCa・Mg欠乏を起こす。<strong>カルシウム(Ca)</strong>は細胞壁・膜形成に関わり、欠乏するとトマトの<strong>尻腐れ症</strong>やタマネギの<strong>芯腐れ病</strong>が生じる。<strong>マグネシウム(Mg)</strong>は葉緑素の成分で欠乏すると古い葉の葉脈間が黄化する。",
      tip: "特に「Ca欠乏＝尻腐れ症・芯腐れ病」「P過剰＝鉄欠乏」「K過剰＝Ca・Mg欠乏」は頻出。"
    },
    {
      id: "e12",
      unitId: "u4",
      question: "【土壌改良と化学肥料】化学肥料の長所・短所を述べ、有機物（堆肥など）を施用することによる肥料効果以外の土壌改良効果を説明せよ。",
      keywords: ["即効性・調節・低コスト", "濃度障害・酸性化・団粒不形成", "孔隙・通気性", "腐植物質・耐水性団粒", "膨軟化・保水性"],
      answer: "<strong>化学肥料</strong>は即効性で肥効が高く、施肥量調節が容易でコストが安い一方、過剰施用による<strong>濃度障害</strong>、<strong>土壌の酸性化</strong>、<strong>団粒ができにくい</strong>という短所がある。これに対し<strong>堆肥などの有機物施用</strong>は、①未分解の粗大有機物が土壌に孔隙を作り<strong>通気性を向上</strong>させ、②微生物の分解で生じる<strong>腐植物質が団粒を強固で耐水性にする</strong>ため、結果として<strong>土壌の膨軟化と保水性の向上</strong>をもたらす。",
      tip: "「肥料効果以外」の2段階（粗大有機物→通気性、腐植物質→団粒耐水性→膨軟化・保水）を明記。"
    },
    {
      id: "e13",
      unitId: "u4",
      question: "【施肥位置と施肥量算出】表面施肥で植物の株元から離れた位置に肥料を施す理由と、適正な施肥量を求める算出式・考え方を説明せよ。",
      keywords: ["根の先端・分裂組織", "天然養分(無肥料時吸収量)", "肥料の利用率", "有機物供給量の差し引き"],
      answer: "<strong>表面施肥の位置の理由：</strong> 養分を主に吸収するのは根の根元ではなく<strong>根の先端にある分裂・吸収部位</strong>であるため、根が伸びている少し離れた場所に施肥して効率よく効かせるためである。<br><strong>施肥量の算出：</strong> 作物が①吸収しなければならない必要養分量から、②無肥料で栽培したときに得られる土壌からの天然養分を差し引き、これを肥料ごとの<strong>利用率（N:畑40〜60%、P:5〜15%、K:40〜70%）</strong>で割って求める（<code>(①−②)÷(利用率/100)</code>）。有機物を混用する場合は算出値から有機物分の供給量を差し引く。",
      tip: "リン酸(P)の利用率が5〜15%と極めて低い点も補足できると完璧。"
    },
    {
      id: "e14",
      unitId: "u5",
      question: "【うね立て】栽培において「うね」を作る目的と、平うね・高うね・かまぼこ型（峯型）うねの使い分けおよび高うねの課題を説明せよ。",
      keywords: ["通気性・排水性・通路確保", "平うね(砂地・苗床)", "高うね(粘土質・排水不良・根菜)", "かまぼこ/峯型(イモ類・土壌酸素)", "深耕労力・肥料流失"],
      answer: "うねは土壌の<strong>通気性と排水性を良好にし、作業用の通路を確保する</strong>ために作る。乾燥しにくい砂地や火山灰土・苗床には<strong>平うね</strong>（15cmまで）、水はけの悪い畑や粘土分が多い土壌・根菜類には<strong>高うね</strong>（15〜30cm）、土壌酸素を多く必要とするイモ類（サツマイモ・ジャガイモ）には<strong>かまぼこ型・峯型</strong>を用いる。ただし高うねには深耕の労力、作付面積の減少、肥料の流失といった課題がある。",
      tip: "粘土分の多い栽培園では高うねを行う点も記憶しておこう。"
    },
    {
      id: "e15",
      unitId: "u5",
      question: "【かん水】かん水を行う際に「地際部」へ与える理由、および夏季と冬季で適切なかん水時間帯が異なる理由を説明せよ。",
      keywords: ["流水圧による損傷", "土の飛散・伝染病拡大", "地際部", "夏季＝朝（高温障害防止）", "冬季＝日中（凍結・低温障害防止）"],
      answer: "植物の上から直接水をかけると軟弱な苗などが流水圧で傷つき、さらに土が跳ねて<strong>土壌伝染性の病害を広げてしまうため、地際部に静かにかん水する</strong>。時間帯については、<strong>夏季は日中の高温による障害を避けるため涼しい朝（または夕方）</strong>に行い、<strong>冬季は朝夕の低温や凍結を防ぐため暖かい日中</strong>に行う。また表面が濡れていても内部まで達していないことがあるため土を掘って確認する。",
      tip: "植木鉢では底から水がゆっくり流れるまで与え、上部にウォータースペース(1〜2cm)を設ける。"
    },
    {
      id: "e16",
      unitId: "u5",
      question: "【マルチング】プラスチックフィルムや敷きわらによるマルチングの多様な効果（メリット・注意点）を挙げ、透明・銀色など資材ごとの違いを説明せよ。",
      keywords: ["地温制御", "透明(昇温・雑草生える)", "銀色・敷きわら(降温・害虫忌避・光合成)", "土壌水分維持", "肥料流亡抑制・追肥困難", "泥はね抑制"],
      answer: "マルチングには①<strong>地温制御</strong>（透明フィルムは地温を上げるが雑草も生えやすいため対策が必要、夏季の敷きわらや銀色フィルムは地温を下げる）、②<strong>雑草抑制</strong>（透明以外のフィルムや除草剤入り）、③<strong>土壌水分の維持</strong>（乾燥と塩類集積の防止）、④<strong>肥料流亡抑制</strong>（反面、追肥が困難になる）、⑤<strong>泥はね抑制</strong>による病害防止、⑥太陽光の反射による<strong>害虫忌避</strong>と葉裏への光照射による<strong>光合成促進</strong>などの効果がある。",
      tip: "展張手順では「風上端を先に埋める」「風の弱い日を選ぶ」ことも重要。"
    },
    {
      id: "e17",
      unitId: "u5",
      question: "【支柱と整枝】支柱に植物を誘引する効果と結び方の基本、さらに整枝における「摘芽」と「摘心」の生理的効果の違いを説明せよ。",
      keywords: ["受光態勢・光合成", "通気性・病害虫抑制", "8の字結び・すき間", "摘芽＝栄養集中", "摘心＝頂芽優勢の解除・側枝伸長"],
      answer: "<strong>支柱・誘引：</strong> 整枝・収穫・薬剤散布などの作業性を高め、<strong>受光態勢を改善して光合成を促進</strong>し、<strong>通気性を良くして病害虫を抑制</strong>する効果がある（資材・労力コストはかかる）。茎の肥大を妨げないよう紐は<strong>8の字に結び、すき間をあける</strong>。<br><strong>整枝：</strong> <strong>摘芽</strong>は無駄な側枝・側芽を取り除いて主枝や果実など他の部位へ栄養を集中させる作業である。一方、<strong>摘心</strong>は頂芽（茎頂）を除去して<strong>頂芽優勢を崩す</strong>ことで、上への栄養集中を止めて側枝の伸長を促す作業である。",
      tip: "摘芽（側芽をとる→栄養集中）と摘心（頂芽をとる→頂芽優勢を崩し側枝を伸ばす）を対比して書く。"
    }
  ]
};
