import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './navbar';

const Navbar = () => {

  var styles = {
    text:{
      fontSize: 20
    },
  }

  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink exact to='/' activeStyle style={styles.text}>
            Accueil
          </NavLink>
          <NavLink to='/phishing' activeStyle style={styles.text}>
            Phishing
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;