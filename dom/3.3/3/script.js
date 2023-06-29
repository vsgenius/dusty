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
  const { bottom, right, left } = container.getBoundingClientRect();
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
function fillEmoji() {
  for (let i = 0; i < 10; i++) {
    createEmoji(i, 2);
  }
}
const container = document.querySelector('.container');
fillEmoji();
let lastEmoji = undefined;
let countRemove = 0;
container.addEventListener('mouseover', (event) => {
  console.log(event);
  const target = event.target;
  if (target.className !== 'emoji') {
    return;
  }
  if (countRemove == 20) {
    fillEmoji();
    countRemove = 0;
  }
  if (
    lastEmoji !== undefined &&
    target.textContent === lastEmoji.textContent &&
    target !== lastEmoji
  ) {
    container.removeChild(target);
    container.removeChild(lastEmoji);
    lastEmoji = '';
    countRemove += 2;
  }
  lastEmoji = target;
});
