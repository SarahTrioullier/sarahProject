import { SRLWrapper } from "simple-react-lightbox";
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import personn from '../images/personn.jpg';
import sky from '../images/sky.jpg';
import arch from '../images/arch.jpg';

const options = {

    caption: {
        captionColor: "#a6cfa5",
        marginLeft: '3em'
    }
}
const imageStyle = {
    marginTop: '220px',
    marginLeft: '20em'

}
function Images() {
    return (
        <Router>
            <SRLWrapper style={options} >

            <a href='../images/personn.jpg'>
        <img style={imageStyle} src={personn} />
            </a>
        <br/>
            <a href={sky}>
            <img  style={imageStyle} src={sky} />
            </a>
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
