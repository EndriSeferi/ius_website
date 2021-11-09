import React from 'react'

function Sections(props) {
    return (
        <div className="resources">
        <div className="heading" data-aos="zoom-in">{props.title}</div>
        <p   data-aos="fade-right">
         {props.text}
        </p>
      </div>
    )
}

export default Sections
