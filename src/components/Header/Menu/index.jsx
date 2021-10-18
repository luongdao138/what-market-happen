import React from 'react';
import { Link } from 'react-router-dom';
import { MenuWrapper } from './Menu.styles';
const Menu = () => {
  return (
    <MenuWrapper>
      <ul>
        <li>
          <Link to='/'>Introduction</Link>
        </li>
        <li>
          <Link to='/'>Solution</Link>
        </li>
        <li>
          <Link to='/'>Rate plan</Link>
        </li>
        <li>
          <Link to='/'>Login</Link>
        </li>
        <span className='divider'></span>
        <li>
          <Link to='/'>Apply for free use</Link>
        </li>
      </ul>
    </MenuWrapper>
  );
};

export default Menu;
