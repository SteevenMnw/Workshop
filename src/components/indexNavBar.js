import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './navbar';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink exact to='/' activeStyle>
            Accueil
          </NavLink>
          <NavLink to='/phishing' activeStyle>
            Phishing
          </NavLink>
          <NavLink to='/scan' activeStyle>
            Scan Link
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;