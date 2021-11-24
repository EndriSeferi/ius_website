import React from 'react'
import "./home.css";
import { HashLink } from 'react-router-hash-link';
function Component(props) {
    return (
        <div className="component">
            <div className="component-title">
            {props.title}
            <br/> 
            {props.sectitle}
            </div>
            <div className="component-text">
                {props.text}
                <div className="wrap-links center-it">
              <HashLink to={props.url} className="primary">
                Learn More
              </HashLink>
            </div>
            </div>
            
        </div>
    )
}

export default Component;
