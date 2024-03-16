import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import './NavbarStyle.css';
import HunFlag from '../img/hun.png';
import SrbFlag from '../img/srb.png';

import { useTranslation } from 'react-i18next';


const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const { i18n } = useTranslation();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar-items">
      <h1 className="navbar-logo">BazenBajsa</h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</Link>
            </li>
          );
        })}
              <li>
          <button className='flag' onClick={() => changeLanguage('hu')}><img src={HunFlag} alt="Magyar" /></button>
          <button className='flag' onClick={() => changeLanguage('sr')}><img src={SrbFlag} alt="Szerb" /> </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;