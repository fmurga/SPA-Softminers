

import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";
import { ScreenshotsThumbnails } from './ScreenshotsThumbnails';
import {imagenes} from '../data/ScreenshotsImages'
export const Screenshots = () => {
const options = {
  buttons: {
    backgroundColor: "rgba(140, 94, 88, 0.8)",
    iconColor: "rgba(241, 191, 152, 0.7)"
  },
  settings: {
    overlayColor: "rgba(238, 247, 255, 1)",
    transitionSpeed: 1000,
    transitionTimingFunction: "linear"
  },
  thumbnails: {
    thumbnailsSize: ["120px", "100px"],
    thumbnailsOpacity: 0.4
  },
  caption: {
    captionColor: "rgba(0, 0, 0, 1)"
  },
  progressBar: {
    size: "4px",
    backgroundColor: "rgba(238, 247, 255, 1)",
    fillColor: "#AF9AB2"
  }
};


    return (
    <SRLWrapper options={options}>
        <section id="servicesLayout2" className="services services-layout2" style={{backgroundColor: '#eef7ff'}}>
            <div className="container">
                <h2 className="text-center">Screenshots</h2>
                <div className="row">
                { 
                    imagenes.map(imagen => (
                        <ScreenshotsThumbnails key={imagen.id} 
                        {...imagen}/>
                    ) )
                }
                

                </div>
            </div>
        </section>
    </SRLWrapper>
    )
}




