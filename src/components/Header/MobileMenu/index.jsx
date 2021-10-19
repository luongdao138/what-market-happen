import React from 'react';
import { Link } from 'react-router-dom';
import { MobileMenuWrapper } from './MobileMenu.styles';
import { MdClose } from 'react-icons/md';
const MobileMenu = ({ openMenu, onClose }) => {
  return (
    <MobileMenuWrapper open={openMenu}>
      <MdClose className='close' onClick={onClose} />
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
        <li>
          <Link to='/'>Apply for free use</Link>
        </li>
      </ul>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
