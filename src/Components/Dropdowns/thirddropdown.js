import React, { useState } from 'react';
import { ThirdMenuItems } from './Thirdmenuitem';
import './FirstDropDown.css';
import { HashLink } from 'react-router-hash-link';

function ThirdDropDown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {ThirdMenuItems.map((item, index) => {
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

export default ThirdDropDown;
