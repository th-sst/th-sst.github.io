// ポイント項目データ（通常モード）
const EVENTS = {
    plus: [
        { id: 'par', title: 'パー', description: 'パーを達成する', points: 1 },
        { id: 'birdie', title: 'バーディー', description: 'バーディーを達成する', points: 2 },
        { id: 'eagle', title: 'イーグル', description: 'イーグルを達成する', points: 3 },
        { id: 'albatross', title: 'アルバトロス', description: 'アルバトロスを達成する', points: 10 },
        { id: 'chip_in', title: 'チップイン', description: 'グリーン外からカップインさせる', points: 2 },
        { id: 'near_pin', title: 'ニアピン', description: 'パー3でティーショットを最もピンに寄せる', points: 2 },
        { id: 'dragon', title: 'ドラコン', description: 'パー5でフェアウェイ内の最長飛距離を出す', points: 2 },
        { id: 'par_on', title: 'パーオン', description: '規定打数より2打少なくグリーンに乗せる', points: 1 },
        { id: 'hole_in_one', title: 'Hole in One', description: 'パー3でホールインワンを達成する', points: 10 },
        { id: 'one_putt', title: 'ワンパット', description: 'グリーンに乗せてから1打で沈める', points: 1 },
        { id: 'sand_one', title: '砂一', description: 'バンカーから2打で上がる', points: 1 },
        { id: 'water_skip', title: '水切り', description: '水面を跳ねさせる', points: 2 },
        { id: '777', title: '777', description: '3ホール連続7打を達成する', points: 7 },
        { id: 'good_luck', title: 'Good Luck!', description: '3連続でハザードに入れるなど、散々なホール賞', points: 3 },
        { id: 'direct_driver', title: '直ドラ', description: '芝の上からドライバーで打ち、成功させる', points: 2 },
        { id: 'osaki', title: 'お先に！', description: '1m以上の微妙な距離を、マークせずに先に沈める', points: 1 },
        { id: 'nice_recovery', title: 'ナイス・リカバリー', description: 'トラブルから、奇跡的にグリーンに乗せる', points: 1 },
        { id: 'helper', title: 'お助けマン', description: '同伴者のボール探しを手伝い、最初に見つける', points: 1 },
        { id: 'nice_bogey', title: 'ナイスボギー', description: '大叩きしそうな状況から、ボギーで上がる', points: 1 },
        { id: 'beta_pin', title: 'ベタピン', description: 'アプローチショットがピンから1m以内に寄せる', points: 1 },
        { id: 'kabe_don', title: '壁ドン', description: '強いタッチでパットをねじ込む', points: 1 },
        { id: 'miracle_avoid', title: '神回避', description: '木やカート道から跳ね返ってフェアウェイに戻る', points: 1 },
        { id: 'first_par', title: '初パー', description: 'その日初めてパーを取ったお祝い', points: 1 },
        { id: 'first_birdie', title: '初バーディー', description: 'その日初めてバーディーを取ったお祝い', points: 1 },
        { id: 'long_putt', title: 'ロングパット', description: '10m以上のロングパットを沈めた。', points: 2 },
        { id: 'declaration', title: '予告宣言', description: 'ティーショット前に宣言し、その通りに打つ', points: 2 },
        { id: 'non_penalty', title: 'ノン・ペナルティ', description: 'ハーフを通して一度もOBや池に入れなかった', points: 3 },
        { id: 'guts', title: 'ガッツ！', description: '難しいライから果敢に打って成功させる', points: 1 },
        { id: 'yose_one', title: '寄せワン', description: 'アプローチを寄せ、1パットで沈める', points: 1 },
    ],
    minus: [
        { id: 'choro', title: 'チョロ', description: 'チョロを打った', points: -1 },
        { id: 'whiff', title: '空振り', description: 'フルスイングしてボールに当たらなかった', points: -2 },
        { id: 'pond', title: '池ポチャ', description: '池などの水域にボールを入れた', points: -1 },
        { id: 'four_putt', title: '4パット', description: 'グリーン上で4打以上かかった', points: -2 },
        { id: 'forest', title: 'カキーン', description: '木にボールを当てた', points: -1 },
        { id: 'top', title: 'トップ', description: 'トップした', points: -1 },
        { id: 'bunker', title: 'バンカー', description: 'バンカーに入れた', points: -1 },
        { id: 'tempura', title: 'テンプラ', description: 'ティーショットが真上に上がった', points: -1 },
        { id: 'ob', title: 'OB', description: 'OB（コース外）に打ち込んだ', points: -1 },
        { id: 'cart_path', title: 'カーパス', description: 'カート道や散水機など人工物に当てた', points: -1 },
        { id: 'lost_ball', title: 'ロスボ', description: '5分以内にボールが見つからなかった', points: -1 },
        { id: 'sand_play', title: '砂遊び', description: 'バンカーから出すのに2打以上かかった', points: -1 },
        { id: '666', title: '666', description: '3ホール連続で「6」を叩いた', points: -3 },
        { id: 'shank', title: 'シャンク', description: 'ひどいシャンクを打った', points: -1 },
        { id: 'ten_plus', title: '10+', description: '10打以上叩いた', points: -1 },
        { id: 'btob', title: 'BtoB', description: 'バンカーから別のバンカーへ入れた', points: -1 },
        { id: 'jizo', title: 'お地蔵さん', description: '緊張や考えすぎで、アドレスが30秒以上続いた', points: -1 },
        { id: 'smartphone', title: 'スマホ依存', description: 'プレー中にスマホをいじりすぎて、進行を遅らせた', points: -1 },
    ]
};

// Vegas Golf ポイント項目データ
const VEGAS_EVENTS = {
    plus: [
        { id: 'v_hole_in_one', title: 'Hole in One', description: 'パー3でのホールインワン', points: 5 },
        { id: 'v_lowest_score', title: 'Lowest Score', description: 'そのホールのグループ内最小スコア', points: 3 },
        { id: 'v_chip_in', title: 'Chip In', description: 'グリーン外から直接カップイン', points: 2 },
        { id: 'v_skipper', title: 'Skipper', description: '水切りショットを成功させてフェアウェイへ', points: 2 },
        { id: 'v_birdie', title: 'Birdie', description: 'バーディーを達成', points: 1 },
        { id: 'v_eagle', title: 'Eagle', description: 'イーグルを達成', points: 1 },
        { id: 'v_one_putt', title: 'One Putt', description: '1パットで沈める', points: 1 },
        { id: 'v_sandy', title: 'Sandy', description: 'バンカーから2打でカップイン', points: 1 },
        { id: 'v_closest_pin', title: 'Closest to the Pin', description: 'パー3で最もピンに寄せる', points: 1 },
        { id: 'v_longest_drive', title: 'Longest Drive', description: 'パー5で最も飛距離を出す', points: 1 },
        { id: 'v_3pars', title: '3 Pars in a Row', description: '3連続パーを達成', points: 1 },
        { id: 'v_b2b_birdie', title: 'Back2Back Birdie', description: '2連続バーディーを達成', points: 1 },
        { id: 'v_hulk_gir', title: 'Hulk G.I.R.', description: '規定打数より2打以上少なくグリーンオン', points: 1 },
        { id: 'v_cowboy_up', title: 'Cowboy Up', description: '前半最下位から後半最小スコアで逆転', points: 1 },
        { id: 'v_par_tee', title: 'Par Tee', description: 'グループ内で最後にパーを取る', points: 1 },
        { id: 'v_puttwiser', title: 'Puttwiser', description: 'その日一番のパットを決める（交代制）', points: 1 },
        { id: 'v_best_shot', title: 'Best Shot', description: '全員一致で選ばれた本日最高のショット', points: 1 },
    ],
    minus: [
        { id: 'v_you_suck', title: 'You Suck', description: '3回連続でハザード（池や砂など）に入れる', points: -3 },
        { id: 'v_moose', title: 'Moose', description: '1ホールで「10」以上の大叩き', points: -2 },
        { id: 'v_rake_master', title: 'Rake Master', description: 'バンカーから別のバンカーへ打ち込む', points: -2 },
        { id: 'v_whiff', title: 'Whiff', description: '完全に空振りをする', points: -2 },
        { id: 'v_putt_off', title: 'Putt Off', description: 'パットしたボールがグリーンの外まで出る', points: -2 },
        { id: 'v_water', title: 'Water', description: '池やクリークにボールを入れる', points: -1 },
        { id: 'v_3putt', title: '3 Putt', description: 'グリーン上で3パット以上', points: -1 },
        { id: 'v_sand', title: 'Sand', description: 'バンカーにボールを入れる', points: -1 },
        { id: 'v_trees', title: 'Trees', description: '林や森の中に打ち込む', points: -1 },
        { id: 'v_ob', title: 'Out of Bounds', description: 'OB（境界外）に打ち込む', points: -1 },
        { id: 'v_lost_ball', title: 'Lost Ball', description: 'ボール紛失（5分以内に発見できず）', points: -1 },
        { id: 'v_highest_score', title: 'Highest Score', description: 'そのホールで最も悪いスコア', points: -1 },
        { id: 'v_78ball', title: '7 Chip / 8 Ball', description: '1ホールで「7」や「8」を叩く', points: -1 },
        { id: 'v_grave_digger', title: 'Grave Digger', description: 'バンカー脱出に2打以上かかる', points: -1 },
        { id: 'v_worm_burner', title: 'Worm Burner', description: '地を這うような当たり（チョロ）', points: -1 },
        { id: 'v_skull', title: 'Skull', description: 'ボールの頭を叩く', points: -1 },
        { id: 'v_pink_lady', title: 'Pink Lady', description: 'レディースティーに届かない、または60cm以内を外す', points: -1 },
        { id: 'v_man_made', title: 'Man Made', description: 'カート道などの人工物に当てる', points: -1 },
        { id: 'v_pop_up', title: 'Pop Up', description: 'ティーショットが真上に上がる（テンプラ）', points: -1 },
        { id: 'v_magic_carpet', title: 'Magic Carpet', description: 'ボールより大きな芝（ターフ）を飛ばす', points: -1 },
        { id: 'v_devil', title: 'Devil', description: '3ホール連続で「6」を叩く', points: -1 },
        { id: 'v_beer', title: 'Beer', description: 'パー3で一番悪いショット（おごり確定）', points: -1 },
        { id: 'v_stfu', title: 'STFU', description: 'プレー中にしゃべりすぎるマナー違反', points: -1 },
        { id: 'v_frustration', title: 'Frustration', description: '暴言を吐いたり、クラブを叩く', points: -1 },
        { id: 'v_covid', title: 'COVID', description: '約1.8m以内のパットを外した最後の人', points: -1 },
        { id: 'v_cant_putt', title: "Can't Putt This", description: '1番ホールのパットを最後に外す', points: -1 },
    ]
};

// 現在のゲームモード（'normal' または 'vegas'）
let currentMode = 'normal';

// 現在のイベントセットを取得
function getCurrentEvents() {
    return currentMode === 'vegas' ? VEGAS_EVENTS : EVENTS;
}

// アプリケーション状態
let gameState = {
    players: [],
    items: {},
    scores: {},
    mode: 'normal'
};

// DOM要素
const elements = {
    startScreen: document.getElementById('start-screen'),
    mainScreen: document.getElementById('main-screen'),
    playerInputs: document.getElementById('player-inputs'),
    btnAddPlayer: document.getElementById('btn-add-player'),
    btnStartGame: document.getElementById('btn-start-game'),
    btnStartVegas: document.getElementById('btn-start-vegas'),
    btnResumeGame: document.getElementById('btn-resume-game'),
    resumeSection: document.getElementById('resume-section'),
    resumeModeName: document.getElementById('resume-mode-name'),
    rankingList: document.getElementById('ranking-list'),
    plusEvents: document.getElementById('plus-events'),
    minusEvents: document.getElementById('minus-events'),
    statusList: document.getElementById('status-list'),
    btnExitGame: document.getElementById('btn-exit-game'),
    headerTitle: document.getElementById('header-title'),
    playerModal: document.getElementById('player-modal'),
    modalTitle: document.getElementById('modal-title'),
    modalDescription: document.getElementById('modal-description'),
    modalPlayers: document.getElementById('modal-players'),
    btnCancelModal: document.getElementById('btn-cancel-modal'),
    confirmModal: document.getElementById('confirm-modal'),
    confirmTitle: document.getElementById('confirm-title'),
    confirmMessage: document.getElementById('confirm-message'),
    btnConfirmCancel: document.getElementById('btn-confirm-cancel'),
    btnConfirmOk: document.getElementById('btn-confirm-ok'),
    tabBtns: document.querySelectorAll('.tab-btn'),
    eventPanels: document.querySelectorAll('.event-panel')
};

// 現在選択中のイベント
let selectedEvent = null;

// 初期化
function init() {
    setupEventListeners();
    checkSavedGame();
    renderEventCards();
}

// イベントリスナーの設定
function setupEventListeners() {
    elements.btnAddPlayer.addEventListener('click', addPlayerInput);
    elements.btnStartGame.addEventListener('click', () => startNewGame('normal'));
    elements.btnStartVegas.addEventListener('click', () => startNewGame('vegas'));
    elements.btnResumeGame.addEventListener('click', resumeGame);
    elements.btnExitGame.addEventListener('click', confirmExit);
    elements.btnCancelModal.addEventListener('click', closePlayerModal);
    elements.btnConfirmCancel.addEventListener('click', closeConfirmModal);
    
    // タブ切り替え
    elements.tabBtns.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });
    
    // プレイヤー入力の削除ボタン
    elements.playerInputs.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-remove-player') && !e.target.disabled) {
            e.target.parentElement.remove();
            updateRemoveButtons();
        }
    });
}

// プレイヤー入力フィールドを追加
function addPlayerInput() {
    const count = elements.playerInputs.children.length;
    if (count >= 8) {
        alert('プレイヤーは最大8人までです');
        return;
    }
    
    const row = document.createElement('div');
    row.className = 'player-input-row';
    row.innerHTML = `
        <input type="text" class="player-name-input" placeholder="プレイヤー${count + 1}" maxlength="10">
        <button class="btn-remove-player">×</button>
    `;
    elements.playerInputs.appendChild(row);
    updateRemoveButtons();
}

// 削除ボタンの状態を更新
function updateRemoveButtons() {
    const rows = elements.playerInputs.querySelectorAll('.player-input-row');
    const removeBtns = elements.playerInputs.querySelectorAll('.btn-remove-player');
    
    removeBtns.forEach(btn => {
        btn.disabled = rows.length <= 2;
    });
}

// 保存されたゲームをチェック
function checkSavedGame() {
    const saved = localStorage.getItem('vegasGolfGame');
    if (saved) {
        const data = JSON.parse(saved);
        const modeName = data.mode === 'vegas' ? 'Vegas Golf' : 'Golf Quest';
        elements.resumeModeName.textContent = `モード: ${modeName}`;
        elements.resumeSection.classList.remove('hidden');
    } else {
        elements.resumeSection.classList.add('hidden');
    }
}

// 新規ゲーム開始
function startNewGame(mode) {
    const inputs = elements.playerInputs.querySelectorAll('.player-name-input');
    const players = [];
    
    inputs.forEach((input, index) => {
        const name = input.value.trim() || `プレイヤー${index + 1}`;
        players.push(name);
    });
    
    if (players.length < 2) {
        alert('2人以上のプレイヤーが必要です');
        return;
    }
    
    // 重複チェック
    const uniquePlayers = [...new Set(players)];
    if (uniquePlayers.length !== players.length) {
        alert('プレイヤー名が重複しています');
        return;
    }
    
    // モードを設定
    currentMode = mode;
    const events = getCurrentEvents();
    
    // ゲーム状態を初期化
    gameState = {
        players: players,
        items: {},
        scores: {},
        mode: mode
    };
    
    // 全イベントを初期化
    [...events.plus, ...events.minus].forEach(event => {
        gameState.items[event.id] = { owner: null, points: event.points };
    });
    
    // スコアを初期化
    players.forEach(player => {
        gameState.scores[player] = 0;
    });
    
    saveGame();
    renderEventCards();
    showMainScreen();
}

// ゲームを再開
function resumeGame() {
    const saved = localStorage.getItem('vegasGolfGame');
    if (saved) {
        gameState = JSON.parse(saved);
        currentMode = gameState.mode || 'normal';
        renderEventCards();
        showMainScreen();
    }
}

// メイン画面を表示
function showMainScreen() {
    elements.startScreen.classList.remove('active');
    elements.mainScreen.classList.add('active');
    
    // ヘッダータイトルを更新
    const title = currentMode === 'vegas' ? 'Vegas Golf' : 'Golf Quest';
    elements.headerTitle.textContent = title;
    
    updateRanking();
    updateEventCards();
    updateStatusList();
}

// スタート画面を表示
function showStartScreen() {
    elements.mainScreen.classList.remove('active');
    elements.startScreen.classList.add('active');
    checkSavedGame();
}

// 終了確認
function confirmExit() {
    elements.confirmTitle.textContent = 'ゲームを終了';
    elements.confirmMessage.textContent = 'スタート画面に戻りますか？データは保存されています。';
    elements.btnConfirmOk.onclick = exitGame;
    elements.confirmModal.classList.add('active');
}

// ゲーム終了（スタート画面に戻る）
function exitGame() {
    closeConfirmModal();
    showStartScreen();
}

// リセット確認
// 確認モーダルを閉じる
function closeConfirmModal() {
    elements.confirmModal.classList.remove('active');
}

// タブ切り替え
function switchTab(tabName) {
    elements.tabBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    
    elements.eventPanels.forEach(panel => {
        panel.classList.toggle('active', panel.id === `${tabName}-panel`);
    });
}

// イベントカードを描画
function renderEventCards() {
    const events = getCurrentEvents();
    elements.plusEvents.innerHTML = events.plus.map(event => createEventCard(event, 'plus')).join('');
    elements.minusEvents.innerHTML = events.minus.map(event => createEventCard(event, 'minus')).join('');
    
    // イベントリスナーを追加
    document.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', () => onEventCardClick(card.dataset.id));
    });
}

// イベントカードを作成
function createEventCard(event, type) {
    return `
        <div class="event-card ${type}" data-id="${event.id}">
            <div class="event-info">
                <div class="event-title">${event.title}</div>
                <div class="event-description">${event.description}</div>
            </div>
            <div class="event-right">
                <div class="event-points">${event.points > 0 ? '+' : ''}${event.points}</div>
                <div class="event-owner" data-owner-id="${event.id}"></div>
            </div>
        </div>
    `;
}

// イベントカードの状態を更新
function updateEventCards() {
    Object.keys(gameState.items).forEach(eventId => {
        const item = gameState.items[eventId];
        const card = document.querySelector(`.event-card[data-id="${eventId}"]`);
        const ownerEl = document.querySelector(`[data-owner-id="${eventId}"]`);
        
        if (card && ownerEl) {
            if (item.owner) {
                card.classList.add('owned');
                ownerEl.textContent = `所持: ${item.owner}`;
            } else {
                card.classList.remove('owned');
                ownerEl.textContent = '';
            }
        }
    });
}

// イベントカードがクリックされた時
function onEventCardClick(eventId) {
    const events = getCurrentEvents();
    const allEvents = [...events.plus, ...events.minus];
    const event = allEvents.find(e => e.id === eventId);
    
    if (!event) return;
    
    selectedEvent = event;
    showPlayerModal(event);
}

// プレイヤー選択モーダルを表示
function showPlayerModal(event) {
    elements.modalTitle.textContent = event.title;
    elements.modalDescription.textContent = `${event.description}\n（${event.points > 0 ? '+' : ''}${event.points}ポイント）`;
    
    const currentOwner = gameState.items[event.id]?.owner;
    
    elements.modalPlayers.innerHTML = gameState.players.map(player => `
        <button class="modal-player-btn ${player === currentOwner ? 'current-owner' : ''}" data-player="${player}">
            ${player}${player === currentOwner ? ' (現在所持)' : ''}
        </button>
    `).join('');
    
    // プレイヤーボタンにイベントリスナーを追加
    elements.modalPlayers.querySelectorAll('.modal-player-btn').forEach(btn => {
        btn.addEventListener('click', () => onPlayerSelected(btn.dataset.player));
    });
    
    elements.playerModal.classList.add('active');
}

// プレイヤーが選択された時
function onPlayerSelected(playerName) {
    if (!selectedEvent) return;
    
    const eventId = selectedEvent.id;
    const item = gameState.items[eventId];
    const previousOwner = item.owner;
    
    // 同じプレイヤーが選択された場合は所持を解除
    if (previousOwner === playerName) {
        gameState.scores[playerName] -= item.points;
        item.owner = null;
    } else {
        // 前の所持者からポイントを削除
        if (previousOwner) {
            gameState.scores[previousOwner] -= item.points;
        }
        
        // 新しい所持者にポイントを追加
        gameState.scores[playerName] += item.points;
        item.owner = playerName;
    }
    
    saveGame();
    closePlayerModal();
    updateRanking();
    updateEventCards();
    updateStatusList();
}

// プレイヤー選択モーダルを閉じる
function closePlayerModal() {
    elements.playerModal.classList.remove('active');
    selectedEvent = null;
}

// ランキングを更新
function updateRanking() {
    elements.rankingList.innerHTML = gameState.players.map(player => {
        const score = gameState.scores[player];
        return `
            <div class="ranking-item">
                <div class="ranking-name">${player}</div>
                <div class="ranking-score ${score > 0 ? 'positive' : score < 0 ? 'negative' : ''}">
                    ${score > 0 ? '+' : ''}${score}
                </div>
            </div>
        `;
    }).join('');
}

// 所持状況リストを更新
function updateStatusList() {
    const events = getCurrentEvents();
    const allEvents = [...events.plus, ...events.minus];
    
    elements.statusList.innerHTML = gameState.players.map(player => {
        const ownedItems = allEvents.filter(event => 
            gameState.items[event.id]?.owner === player
        );
        
        const score = gameState.scores[player];
        
        return `
            <div class="status-player">
                <div class="status-player-header">
                    <div class="status-player-name">${player}</div>
                    <div class="status-player-score ${score > 0 ? 'positive' : score < 0 ? 'negative' : ''}">
                        ${score > 0 ? '+' : ''}${score}
                    </div>
                </div>
                <div class="status-items">
                    ${ownedItems.length > 0 ? ownedItems.map(item => `
                        <span class="status-item ${item.points > 0 ? 'plus' : 'minus'}">
                            ${item.title} (${item.points > 0 ? '+' : ''}${item.points})
                        </span>
                    `).join('') : '<span class="status-empty">まだ項目がありません</span>'}
                </div>
            </div>
        `;
    }).join('');
}

// ゲームを保存
function saveGame() {
    localStorage.setItem('vegasGolfGame', JSON.stringify(gameState));
}

// 初期化を実行
document.addEventListener('DOMContentLoaded', init);
