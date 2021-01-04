import { SRLWrapper } from "simple-react-lightbox";
import React from "react";
import personn from '../images/personn.jpg';
import travel from '../images/travel.jpg';
import travelde from '../images/travel_N9A9788.jpg';
import portrait from '../images/Portrait.jpg';
import portraitlogo from '../images/Portrait_logo.jpg';
import accueil from '../images/accueil.jpg';
import stilllife from '../images/stilllife.jpg';
import Layout from "../Layout";
import './GalleryMenu.css';

const options = {

    caption: {
        captionColor: "#a6cfa5",
        marginLeft: '3em',
        marginTop: '300px',
        cursor: "pointer"
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
                    <div className="legendPortrait">
                        Portrait
                    </div>
                </div>

                {/* Test  overlay */}
                <div className=" overlay-image _ax "><a href="URL_LIEN">
                    <img className=" image _ay " src={portrait} alt="Alt text"/>
                    <div className=" normal _b1 ">
                        <div className=" text _2 ">
                        </div>
                    </div>
                    <div className=" hover _b0 ">
                        <img className=" image _ay " src={portraitlogo} alt="Alt text hover"/>
                        <div className=" text _2 ">Portrait
                        </div>
                    </div>
                </a></div>

                {/* Test  overlay */}



                <div className="stilllife">

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
