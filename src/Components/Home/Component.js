import React from 'react'
import "./home.css";

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
            </div>
        </div>
    )
}

export default Component;
