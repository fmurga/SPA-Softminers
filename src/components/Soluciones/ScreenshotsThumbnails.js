

import React from 'react'

export const ScreenshotsThumbnails = ({id,imagen, thumbnail, nombre}) => {
    return (
        <div className="col-4 col-md-4 col-lg-3 mt-3 mb-3">
            <a href={imagen}>
                <img src={thumbnail} alt={id} />
            </a>
            <p className="text-center color-dark">{nombre}</p>
        </div> 
    )
}
