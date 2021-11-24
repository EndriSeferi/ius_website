import React, { useState } from 'react';
import './FirstDropDown.css';
import { HashLink } from 'react-router-hash-link';
import { SecMenuItems } from './Secmenuitem';

function SecDropDown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {SecMenuItems.map((item, index) => {
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

export default SecDropDown;
