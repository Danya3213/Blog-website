import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Header.scss";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Container } from "../Container/Container";


export function Header() {
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePagesDropdown, setMobilePagesDropdown] = useState(false);

  useEffect(() => {
    if (!pagesDropdownOpen) return;
    function handleClickOutside(event) {
      const dropdown = document.querySelector('.headerNavItemText.headerNavDropdownToggle');
      const dropdownMenu = document.querySelector('.headerNavDropdown');
      if (
        dropdown &&
        !dropdown.contains(event.target) &&
        dropdownMenu &&
        !dropdownMenu.contains(event.target)
      ) {
        setPagesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pagesDropdownOpen]);

  // Блокировка скролла при открытом мобильном меню
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.overflowX = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.overflowX = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.overflowX = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header>
      <Container>
        <div className="headerMobileBar">
          <p className="headerLogoText">Bhart 24/7</p>
          <button className="burgerButton" onClick={() => setMobileMenuOpen(true)}>
            <FaBars />
          </button>
        </div>
        <ul className="headerList">
          <li className="headerListItem">
            <p className="headerLogoText">Bhart 24/7</p>
          </li>
          <li className="headerListItem">
            <nav className="headerNav">
              <ul className="headerNavList">
                <li className="headerNavItem">
                  <h5 className="headerNavItemText">
                    Categories <IoIosArrowDown />
                  </h5>
                </li>
                <li className="headerNavItem">
                  <div className="headerNavItemText headerNavDropdownToggle" onClick={() => setPagesDropdownOpen((v) => !v)}>
                    Pages <IoIosArrowDown />
                  </div>
                  {pagesDropdownOpen && (
                    <ul className="headerNavDropdown">
                      <li className="headerNavDropdownItem">404</li>
                      <li className="headerNavDropdownItem">page 1</li>
                      <li className="headerNavDropdownItem">page 2</li>
                    </ul>
                  )}
                </li>
                <li className="headerNavItem">
                  <h5 className="headerNavItemText">Contact us</h5>
                </li>
                <li className="headerNavItem">
                  <h5 className="headerNavItemText">About us</h5>
                </li>
              </ul>
            </nav>
          </li>
          <li className="headerListItem headerSearchBar">
            <div className="headerSearchBarInputDiv">
              <input type="text"
                className="form-control headerSearchBarInput"
                placeholder="Search anything"
                aria-label="Search anything"
                aria-describedby="button-addon2"></input>
              <button
                className="btn btn-outline-secondary headerSearchButton"
                type="button"
                id="button-addon2"
              >
                <FaSearch />
              </button>
            </div>
          </li>
          <li className="headerListItem headerAccountShit">
            <button className="btn headerGrayButton">
              Log in
            </button>
            <button className="btn headerGrayButton headerRegButton">
              Reg
            </button>
          </li>
        </ul>
        {/* Мобильное меню */}
        {mobileMenuOpen && (
          <div className="mobileMenuOverlay" onClick={() => setMobileMenuOpen(false)}>
            <nav className="mobileMenu" onClick={e => e.stopPropagation()}>
              <button className="closeMobileMenu" onClick={() => setMobileMenuOpen(false)}><FaTimes /></button>
              <ul className="mobileNavList">
                <li className="mobileNavItem">Categories</li>
                <li className="mobileNavItem" onClick={() => setMobilePagesDropdown(v => !v)} style={{position: 'relative'}}>
                  Pages
                  <span style={{marginLeft: 8}}>{mobilePagesDropdown ? <IoIosArrowDown style={{transform: 'rotate(180deg)'}} /> : <IoIosArrowDown />}</span>
                  {mobilePagesDropdown && (
                    <ul className="mobileDropdown">
                      <li className="mobileDropdownItem">404</li>
                      <li className="mobileDropdownItem">page 1</li>
                      <li className="mobileDropdownItem">page 2</li>
                    </ul>
                  )}
                </li>
                <li className="mobileNavItem">Contact us</li>
                <li className="mobileNavItem">About us</li>
              </ul>
              <div className="mobileSearch">
                <input type="text" className="form-control" placeholder="Search anything" />
                <button className="btn"><FaSearch /></button>
              </div>
              <div className="mobileAuth">
                <button className="btn headerGrayButton">Log in</button>
                <button className="btn headerGrayButton headerRegButton">Reg</button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
