import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyle.css';
import HunFlag from '../img/hun.png';
import SrbFlag from '../img/srb.png';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const { i18n, t } = useTranslation();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const MenuItems = [
    {
      titleKey: 'navbar.home',
      url: "/",
      cName: "nav-links",
      icon: "fa-solid fa-house-user"
    },
    {
      titleKey: 'navbar.about',
      url: "/about",
      cName: "nav-links",
      icon: "fa-solid fa-circle-info"
    },
    {
      titleKey: 'navbar.pricing',
      url: "/pricing",
      cName: "nav-links",
      icon: "fa-solid fa-dollar-sign"
    },
    {
      titleKey: 'navbar.contact',
      url: "/contact",
      cName: "nav-links",
      icon: "fa-solid fa-phone"
    },
    {
      titleKey: 'navbar.admin',
      url: "/admin",
      cName: "nav-links hidden",
      icon: "fa-solid fa-phone"
    },
    {
      titleKey: 'navbar.login',
      url: "/login",
      cName: "nav-links hidden",
      icon: "fa-solid fa-phone"
    }
  ];

  return (
    <nav className="navbar-items">
      <h1 className="navbar-logo">BazenBajsa</h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
              <i className={item.icon}></i>
              {t(item.titleKey)}
            </Link>
          </li>
        ))}
        <li>
          <button className='flag' onClick={() => changeLanguage('hu')}>
            <img src={HunFlag} alt="Magyar" />
          </button>
          <button className='flag' onClick={() => changeLanguage('sr')}>
            <img src={SrbFlag} alt="Szerb" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
