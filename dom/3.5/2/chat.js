class Chat {
  constructor(chat) {
    this.chat = chat;
    this.create();
  }
  init() {
    const chatMessage = document.createElement('div');
    chatMessage.classList.add('chat-message');
    const otherMessage = document.createElement('div');
    otherMessage.classList.add('other-message');
    const message = document.createElement('span');
    message.classList.add('message');
    message.textContent = 'привет';
    otherMessage.appendChild(message);
    chatMessage.appendChild(otherMessage);
    this.chat.append(chatMessage);
    const sendMessage = document.createElement('div');
    sendMessage.classList.add('send-message');
    const inputMessage = document.createElement('input');
    inputMessage.classList.add('input-message');
    sendMessage.appendChild(inputMessage);
    const btnMessage = document.createElement('button');
    btnMessage.classList.add('btn-message');
    btnMessage.textContent = 'Отправить';
    sendMessage.appendChild(btnMessage);
    this.chat.append(sendMessage);
  }
  create() {
    this.init();
    const btnMessage = document.querySelector('.btn-message');
    btnMessage.addEventListener('click', (event) => {
      const input = event.target.parentNode.querySelector('.input-message');
      if (!input.value) return;
      this.addMyMessage(input.value);
      input.value = '';
    });
  }
  addMyMessage(text) {
    const chatMessage = this.chat.querySelector('.chat-message');
    const div = document.createElement('div');
    div.classList.add('my-message');
    const span = document.createElement('span');
    span.classList.add('message');
    span.textContent = text;
    div.appendChild(span);
    chatMessage.appendChild(div);
  }
  addOtherMessage(text) {
    const chatMessage = this.chat.querySelector('.chat-message');
    const div = document.createElement('div');
    div.classList.add('other-message');
    const span = document.createElement('span');
    span.classList.add('message');
    span.textContent = text;
    div.appendChild(span);
    chatMessage.appendChild(div);
  }
}
