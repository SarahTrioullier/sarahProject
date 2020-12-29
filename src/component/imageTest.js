import { SRLWrapper } from "simple-react-lightbox";
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import personn from '../images/personn.jpg';
import sky from '../images/sky.jpg';
import arch from '../images/arch.jpg';
import './image.css';

const options = {

    caption: {
        captionColor: "#a6cfa5",
        marginLeft: '3em'
    }
}
const imageStyle = {
    marginTop: '220px',
   imageHeight: '1632',
   imageWidth: '1224',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
}
function Images() {
    return (
        <Router>
            <SRLWrapper style={options} >

                <div className="container">
                    <div className="content">
                        <a href={personn} target="_blank">
                            <div className="content-overlay"></div>
                            <img className="content-image"
                                 src={personn}/>
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">This is a title</h3>
                                <p className="content-text">This is a short description</p>
                            </div>
                        </a>
                    </div>
                </div>


                <br/>

                <div>
            <a href={sky}>
            <img  style={imageStyle} src={sky} />
            </a>
                </div>
                <br/>
                <a href={personn} >
                    <img style={imageStyle} src={personn} />
                </a>
                <br/>
                <a href={sky}>
                    <img style={imageStyle} src={sky} />
                </a>
                <br/>
                <a href='https://images.freeimages.com/images/large-previews/68c/delicate-arch-2-1391623.jpg'>
                    <img style={imageStyle} src={arch} />
                </a>

        </SRLWrapper>
        </Router>
    );
}

export default Images;
