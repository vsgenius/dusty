import React from 'react';
import { cnProfile } from '../Profile.classname';

import './Button.css';

export default function Button() {
  return <button className={cnProfile('btn-logout')}>Logout</button>;
}
