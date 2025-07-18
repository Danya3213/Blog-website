import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Header.scss";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import {Container} from "../Container/Container.jsx";

export function Header() {
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

                <li className="headerNavItem">
                  <h5 className="headerNavItemText">
                    Pages <IoIosArrowDown />
                  </h5>
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
              <input
                  type="text"
                  className="form-control headerSearchBarInput"
                  placeholder="Search anything"
                  aria-label="Search anything"
                  aria-describedby="button-addon2"
              ></input>
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
