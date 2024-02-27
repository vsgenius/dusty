import React from 'react';
import { ListItems } from './components/ListItems/ListItems';
import { Avatar } from './components/Avatar/Avatar';
import Button from './components/Button/Button';
import src from './components/image/avatar.png';
import Key from './components/image/Key.png';
import Chat from './components/image/Chat.png';
import Bell from './components/image/Bell.png';
import Storage from './components/image/Storage.png';
import Help from './components/image/Help.png';
import Invite from './components/image/Invite.png';


import './App.css';

function App() {
  const items = {
    account: Key,
    'chat settings': Chat,
    notifications: Bell,
    storage: Storage,
    help: Help,
    'invite a friend': Invite,
  };
  const name = 'Jane Doe';
  const desc = 'This is a small bio description to let users express themselves';
  return (
    <div className="App">
      <header className="App-header">
      <div className="profile">
        <Avatar src={src} name={name} desc={desc} />
        <ListItems items={items} />
        <Button />
      </div>
      </header>
    </div>
  );
}

export default App;
