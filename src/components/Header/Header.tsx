import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import Logo from '../../images/logo.svg'

export const Header = () => (
  <header className="header">
    <div className="container">
      <NavLink to={''} className="header__link">
        <img src={Logo} alt="Home" />
      </NavLink>
      <h1 className="header__title">The Rick and Morty API</h1>
    </div>
  </header>
)
