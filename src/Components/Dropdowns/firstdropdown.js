import React, { useState } from 'react';
import { FirstMenuItems } from './Firstmenuitem';
import './FirstDropDown.css';
import { HashLink } from 'react-router-hash-link';

function FirstDropDown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {FirstMenuItems.map((item, index) => {
          return (
            <li key={index}>
              <HashLink
                className={item.cName}
                smooth to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </HashLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default FirstDropDown;
