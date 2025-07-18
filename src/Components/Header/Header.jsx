import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Header.scss";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { Container } from "../Container/Container";


export function Header() {
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const pagesRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (pagesRef.current && !pagesRef.current.contains(event.target)) {
        setPagesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <Container>
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

                <li className="headerNavItem" ref={pagesRef}>
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
      </Container>
    </header>
  );
}
