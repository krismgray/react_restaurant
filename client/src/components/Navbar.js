import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  active: {
    textDecoration: 'underline',
    fontWeight: 'bold',
    color: 'black',
  }
}

const Navbar = ({ history }) => (
  <nav>
    {' '}
    <NavLink activeStyle={styles.active} to="/">Home</NavLink>
    { ' ' }
    <NavLink activeStyle={styles.active} to="/about">About</NavLink>
    { ' ' }
  </nav>
)

export default Navbar;
