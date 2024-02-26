class Chat {
  constructor(chat) {
    this.chat = chat;
    this.listMessages = this.getListMessage();
    this.chatMessage = document.createElement('div');
    this.otherMessage = document.createElement('div');
    this.message = document.createElement('span');
    this.sendMessage = document.createElement('div');
    this.inputMessage = document.createElement('input');
    this.btnMessage = document.createElement('button');
    this.btnClick = () => {
      const input = this.inputMessage;
      if (!input.value) return;
      this.createMessage('my-message', input.value);
      this.listMessages[Date.now()] = { key: 'my-message', value: input.value };
      localStorage.removeItem('chat_3.5.2');
      localStorage.setItem('chat_3.5.2', JSON.stringify(this.listMessages));
      input.value = '';
    };
    this.init();
  }
  init() {
    this.loadMessage(this.listMessages);
    this.chatMessage.classList.add('chat-message');
    this.chat.append(this.chatMessage);
    this.sendMessage.classList.add('send-message');
    this.inputMessage.classList.add('input-message');
    this.sendMessage.appendChild(this.inputMessage);
    this.btnMessage.classList.add('btn-message');
    this.btnMessage.textContent = 'Отправить';
    this.sendMessage.appendChild(this.btnMessage);
    this.chat.append(this.sendMessage);
    this.btnMessage.addEventListener('click', this.btnClick);
  }
  getListMessage() {
    localStorage.removeItem('chat_3.5.2');
    localStorage.setItem(
      'chat_3.5.2',
      JSON.stringify({
        1: { key: 'my-message', value: 'Привет' },
        2: { key: 'other-message', value: 'Здарова' },
        3: { key: 'my-message', value: 'как дела?' },
        4: { key: 'other-message', value: 'Отлично' },
        5: { key: 'other-message', value: 'как твои?' },
        6: { key: 'my-message', value: 'Великолепно' },
      })
    );
    const messages = JSON.parse(localStorage.getItem('chat_3.5.2'));
    return messages;
  }
  loadMessage(messages) {
    for (const id in messages) {
      this.createMessage(messages[id].key, messages[id].value);
    }
  }
  createMessage(classList, text) {
    const div = document.createElement('div');
    div.classList.add(classList);
    const span = document.createElement('span');
    span.classList.add('message');
    span.textContent = text;
    div.appendChild(span);
    this.chatMessage.appendChild(div);
  }
}
