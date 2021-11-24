import React from 'react'

function CorneredImage(props) {
    return (
        <div className="corners2">
            <div className="center">
              <img data-aos="flip-right" src={props.imageUrl} alt="Logo" />
            </div>
          </div>
    )
}

export default CorneredImage
