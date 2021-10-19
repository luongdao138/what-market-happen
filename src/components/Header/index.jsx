import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper } from './Header.styles';
import Menu from './Menu';
import { MdMenu } from 'react-icons/md';
import MobileMenu from './MobileMenu';
import { useState } from 'react';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <HeaderWrapper>
      <MobileMenu openMenu={openMenu} onClose={() => setOpenMenu(false)} />
      <div className='content'>
        <Link to='/'>
          <img className='logo' src='/assets/logo/logo.png' alt='' />
        </Link>
        <Menu />
        <MdMenu
          onClick={() => setOpenMenu((x) => !x)}
          className='mobile-menu'
        />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
