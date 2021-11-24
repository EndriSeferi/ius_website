import React from 'react'

function Webinar(props) {
    return (
        <div className="webinar">
        <h2>{props.title}</h2>
        <p data-aos="fade-right">
          {props.text}
        </p>
        
      </div>
    )
}

export default Webinar
