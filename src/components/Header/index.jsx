import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper } from './Header.styles';
import Menu from './Menu';
const Header = () => {
  return (
    <HeaderWrapper>
      <div className='content'>
        <Link to='/'>
          <img className='logo' src='/assets/logo/logo.png' alt='' />
        </Link>
        <Menu />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
