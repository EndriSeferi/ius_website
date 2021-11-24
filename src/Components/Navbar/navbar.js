import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

import "./navbar.css";
import FirstDropDown from "../Dropdowns/firstdropdown";
import SecDropDown from "../Dropdowns/secdropdown";
import ThirdDropDown from "../Dropdowns/thirddropdown";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdowns, setDropdowns] = useState(false);
  const [dropdownn, setDropdownn] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnterF = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeaveF = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseEnterS = () => {
    if (window.innerWidth < 960) {
      setDropdowns(false);
    } else {
      setDropdowns(true);
    }
  };

  const onMouseLeaveS = () => {
    if (window.innerWidth < 960) {
      setDropdowns(false);
    } else {
      setDropdowns(false);
    }
  };
  const onMouseEnterT = () => {
    if (window.innerWidth < 960) {
      setDropdownn(false);
    } else {
      setDropdownn(true);
    }
  };

  const onMouseLeaveT = () => {
    if (window.innerWidth < 960) {
      setDropdownn(false);
    } else {
      setDropdownn(false);
    }
  };

  return (
    <div className="nav">
      <nav className="navbar">
        <HashLink
          smooth
          to="/#top"
          className="navbar-logo"
          onClick={() => {
            closeMobileMenu();
          }}
        >
          <img src="./IUS.png" alt=" IUS Logo" />
          IUS Center Albania
        </HashLink>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item "
            onMouseEnter={onMouseEnterF}
            onMouseLeave={onMouseLeaveF}
          >
            <HashLink
              to="/howwework#top"
              className="nav-links"
              onClick={() => {
                closeMobileMenu();
              }}
            >
              How We Work <i className="fas fa-caret-down" />
            </HashLink>
            {dropdown && <FirstDropDown />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnterS}
            onMouseLeave={onMouseLeaveS}
          >
            <HashLink
              to="/whatwedo#top"
              className="nav-links"
              onClick={() => {
                closeMobileMenu();
              }}
            >
              What We Do <i className="fas fa-caret-down" />
            </HashLink>
            {dropdowns && <SecDropDown />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnterT}
            onMouseLeave={onMouseLeaveT}
          >
            <HashLink
              to="/whoweare#top"
              className="nav-links"
              onClick={() => {
                closeMobileMenu();
              }}
            >
              Who we are <i className="fas fa-caret-down" />
            </HashLink>
            {dropdownn && <ThirdDropDown />}
          </li>
          
         
        </ul>
      </nav>
    </div>
  );
}
