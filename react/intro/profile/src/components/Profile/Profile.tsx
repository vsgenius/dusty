import React from 'react';
import { ListItems } from './ListItems/ListItems';
import { Avatar } from './Avatar/Avatar';
import Button from './Button/Button';
import src from '../../image/profile/avatar.png';
import Key from '../../image/profile/Key.png';
import Chat from '../../image/profile/Chat.png';
import Bell from '../../image/profile/Bell.png';
import Storage from '../../image/profile/Storage.png';
import Help from '../../image/profile/Help.png';
import Invite from '../../image/profile/Invite.png';

import { cnProfile } from './Profile.classname';

function Profile() {
  const items = {
    account: Key,
    'chat settings': Chat,
    notifications: Bell,
    storage: Storage,
    help: Help,
    'invite a friend': Invite,
  };
  const name = 'Jane Doe';
  const desc =
    'This is a small bio description to let users express themselves';
  return (
    <div className={cnProfile()}>
      <Avatar src={src} name={name} desc={desc} />
      <ListItems items={items} />
      <Button />
    </div>
  );
}

export { Profile };
