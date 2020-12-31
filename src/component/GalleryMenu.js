import { SRLWrapper } from "simple-react-lightbox";
import React from "react";
import personn from '../images/personn.jpg';
import travel from '../images/travel.jpg';
import travelde from '../images/travel_N9A9788.jpg';
import portrait from '../images/Portrait.jpg';
import accueil from '../images/accueil.jpg';
import stilllife from '../images/stilllife.jpg';
import Layout from "../Layout";
import './GalleryMenu.css';

const options = {

    caption: {
        captionColor: "#a6cfa5",
        marginLeft: '3em',
        marginTop: '300px'
    }
}

const legend = {

fontFamily: 'HelveticaNeueUltraLight',
fontWeight: 'bold',
fontSize: 'large',

}



const GalleryMenu = () => {
    return (
        <Layout>
            <SRLWrapper  style={options} >
                <div className="portrait">
<div className="legendPortrait" style={legend}> Test </div>
                </div>
                <div className="stilllife">
                    <div className="legendPortrait"></div>
                </div>
                <div className="travel">
                    <div className="legendPortrait"></div>
                </div>
                <div className="contact">
                    <div className="legendPortrait"></div>
                </div>

            </SRLWrapper>
        </Layout>
    );
}

export default GalleryMenu;
