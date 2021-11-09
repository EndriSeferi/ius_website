import React from 'react'

function Subsections(props) {
    return (
        <div className="w-wrapper">
            <img data-aos="flip-right"
              src={props.image}
              alt="test"
            />
            <div className="text-wra">
              <h4>{props.title}</h4>
              <p data-aos="fade-right">
                {props.text}
              </p>
            </div>
          </div>
    )
}

export default Subsections
