import React from 'react'

function Avatar(props) {
    return (
        <div className="card" data-aos="zoom-in">
            <img
              src={props.image}
              alt="aldi avatar"
            />
            <h4>{props.name}</h4>
            <p>
              {props.bio}
            </p>
          </div>
    )
}

export default Avatar
