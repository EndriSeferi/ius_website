import React ,{ useState } from "react";
import { HashLink } from "react-router-hash-link";

import "./navbar.css"
import FirstDropDown from "../Dropdowns/firstdropdown";
import SecDropDown from "../Dropdowns/secdropdown";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdowns, setDropdowns] = useState(false);
  const [change, setChange] = useState(false);

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

  return (
    <div className="nav">
      <nav className="navbar">
        <HashLink
          smooth
          to="/"
          className="navbar-logo"
          onClick={() => {
            closeMobileMenu();
            setChange(false);
          }}
        >
          <img src="./IUS.png" alt=" IUS Logo" />
          IUS Center Albania
        </HashLink>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item "
          onMouseEnter={onMouseEnterF}
          onMouseLeave={onMouseLeaveF}
          >
            <HashLink
              to="HowWeWork"
              className="nav-links"
              onClick={() => {
                closeMobileMenu();
                setChange(true);
              }}
            >
              How We Work  <i className="fas fa-caret-down" />
            </HashLink>
            {dropdown && <FirstDropDown />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnterS}
            onMouseLeave={onMouseLeaveS}
          >
            <HashLink
              to="/whatwedo"
              className="nav-links"
              onClick={() => {
                closeMobileMenu();
                setChange(true);
              }}
            >
              What We Do <i className="fas fa-caret-down" />
            </HashLink>
            {dropdowns && <SecDropDown />}
          </li>
          <li className="nav-item">
            <HashLink
              to="/whoweare"
              className="nav-links"
              onClick={() => {
                closeMobileMenu();
                setChange(true);
              }}
            >
              Who we are
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink
              to="/contact-us"
              className="nav-links"
              onClick={() => {
                closeMobileMenu();
                setChange(true);
              }}
            >
              Contact Us
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/donate"
              className="nav-links-mobile"
              onClick={() => {
                closeMobileMenu();
                setChange(true);
              }}
            >
              Donate
            </HashLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
