import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/images/logo.png';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuItemClick = (item) => {
    setMenu(item);
    toggleMobileMenu();
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="Logo" />
      </div>
      <ul className={`nav-menu ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <li onClick={() => handleMenuItemClick('home')}>Home {menu === "home" && <hr />} </li>
        <li onClick={() => handleMenuItemClick('about')}>About{menu === "about" && <hr />}</li>
        <li onClick={() => handleMenuItemClick('practice-areas')}>Practice Areas{menu === "practice-areas" && <hr />}</li>
        <li onClick={() => handleMenuItemClick('blogs')}>Blogs{menu === "blogs" && <hr />}</li>
        <li onClick={() => handleMenuItemClick('contact')}>Contact{menu === "contact" && <hr />}</li>
      </ul>

      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        ☰
      </div>
    </div>
  );
};

export default Navbar;
