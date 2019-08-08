import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        activeStyle={{
          fontWeight: "bold"
        }}
      >Home</NavLink>
      <NavLink
        to="/actors"
        exact
        activeStyle={{
          fontWeight: "bold"
        }}
      >Actors</NavLink>
      <NavLink
        to="/directors"
        exact
        activeStyle={{
          fontWeight: "bold"
        }}
      >Directors</NavLink>
      <NavLink
        to="/movies"
        exact
        activeStyle={{
          fontWeight: "bold"
        }}
      >Movies</NavLink>
    </div>
  );
};

export default NavBar;
