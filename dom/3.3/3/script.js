const emoji = [
  '😀',
  '😁',
  '😂',
  '🤣',
  '😃',
  '😄',
  '😅',
  '😆',
  '😉',
  '😊',
  '😋',
  '😎',
  '😍',
  '😘',
  '😗',
  '😙',
  '😚',
  '☺',
  '🙂',
  '🤗',
  '🤔',
  '😐',
  '😑',
  '😶',
  '🙄',
  '😏',
  '😣',
  '😥',
  '😮',
  '🤐',
  '😯',
  '😪',
  '😫',
  '😴',
  '😌',
  '🤓',
  '😛',
  '😜',
  '😝',
  '🤤',
  '😒',
  '😓',
  '😔',
  '😕',
  '🙃',
  '🤑',
  '😲',
  '☹',
  '🙁',
  '😖',
  '😞',
  '😟',
  '😤',
  '😢',
  '😭',
  '😦',
  '😧',
  '😨',
  '😩',
  '😬',
  '😰',
  '😱',
  '😳',
  '😵',
  '😡',
  '😠',
  '😇',
  '🤠',
  '🤡',
  '🤥',
  '😷',
  '🤒',
  '🤕',
  '🤢',
  '🤧',
  '😈',
  '👿',
  '👹',
  '👺',
  '💀',
  '☠',
  '👻',
  '👽',
  '👾',
  '🤖',
  '💩',
  '😺',
  '😸',
  '😹',
  '😻',
  '😼',
  '😽',
  '🙀',
  '😿',
  '😾',
  '🙈',
  '🙉',
  '🙊',
  '👦',
  '👦🏻',
  '👦🏼',
  '👦🏽',
  '👦🏾',
  '👦🏿',
  '👧',
  '👧🏻',
  '👧🏼',
  '👧🏽',
  '👧🏾',
  '👧🏿',
  '👨',
  '👨🏻',
  '👨🏼',
  '👨🏽',
  '👨🏾',
  '👨🏿',
  '👩',
  '👩🏻',
  '👩🏼',
  '👩🏽',
  '👩🏾',
  '👩🏿',
  '👴',
  '👴🏻',
  '👴🏼',
  '👴🏽',
  '👴🏾',
  '👴🏿',
  '👵',
  '👵🏻',
  '👵🏼',
  '👵🏽',
  '👵🏾',
  '👵🏿',
  '👶',
  '👶🏻',
  '👶🏼',
  '👶🏽',
  '👶🏾',
  '👶🏿',
  '👼',
  '👼🏻',
  '👼🏼',
  '👼🏽',
];
function createEmoji(i, n) {
  for (let j = 0; j < n; j++) {
    const div = document.createElement('div');
    div.textContent = emoji[i];
    div.style.position = 'absolute';
    div.style.left = right - Math.floor(Math.random() * left) - 30 + 'px';
    div.style.top = Math.floor(Math.random() * bottom) + 10 + 'px';
    div.classList.add('emoji');
    container.appendChild(div);
  }
}
const container = document.querySelector('.container');
const { x, y, bottom, right, topCon, left } = container.getBoundingClientRect();
for (let i = 0; i < 10; i++) {
  createEmoji(i, 2);
}
let lastEmoji = undefined;
let countRemove = 0;
container.addEventListener('mouseover', (event) => {
  const target = event.target;
  if (countRemove == 20) {
    for (let i = 0; i < 10; i++) {
      createEmoji(i);
      createEmoji(i);
    }
    countRemove = 0;
  }
  if (target.className === 'emoji') {
    if (
      lastEmoji !== undefined &&
      target.textContent === lastEmoji.textContent &&
      target !== lastEmoji
    ) {
      container.removeChild(target);
      container.removeChild(lastEmoji);
      lastEmoji = '';
      countRemove += 2;
      return;
    }
    lastEmoji = target;
  }
});
