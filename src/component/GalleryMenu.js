import { SRLWrapper } from "simple-react-lightbox";
import React from "react";
import personn from '../images/personn.jpg';
import travel_logo from '../images/travel_logo.jpg';
import travelde from '../images/travel_N9A9788.jpg';
import portrait from '../images/Portrait.jpg';
import portraitlogo from '../images/Portrait_logo.jpg';
import accueil from '../images/accueil.jpg';
import accueil_logo from '../images/contact.jpg';
import stilllife from '../images/stilllife.jpg';
import still_life_logo from '../images/Still_life_logo.jpg';
import Layout from "../Layout";
import './GalleryMenu.css';

const options = {

    caption: {
        captionColor: "#a6cfa5",
        marginLeft: '3em',
        marginTop: '300px',
        cursor: "pointer",
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

                {/* Test  overlay */}
                <div className=" overlay-image _ax "><a href={portrait}>
                    <img className=" image _ay " src={portrait} alt="Portrait"/>
                    <div className=" normal _b1 ">
                        <div className=" text _2 ">
                        </div>
                    </div>
                    <div className=" hover _b0 ">
                        <img className=" image _ay " src={portraitlogo} alt="Portrait legend"/>
                        <div className=" text _2 ">Portrait
                        </div>
                    </div>
                </a></div>

                {/* Test  overlay */}



                <div className=" overlay-image _ax "><a href={portrait}>
                    <img className=" image _ay " src={stilllife} alt="StillLife"/>
                    <div className=" normal _b1 ">
                        <div className=" text _2 ">
                        </div>
                    </div>
                    <div className=" hover _b0 ">
                        <img className=" image _ay " src={still_life_logo} alt="Portrait legend"/>
                        <div className=" text _2 ">Still Life
                        </div>
                    </div>
                </a></div>

                <div className=" overlay-image _ax "><a href={travelde}>
                    <img className=" image _ay " src={travelde} alt="Travel"/>
                    <div className=" normal _b1 ">
                        <div className=" text _2 ">
                        </div>
                    </div>
                    <div className=" hover _b0 ">
                        <img className=" image _ay " src={travel_logo} alt="Travel legend"/>
                        <div className=" text _2 ">Travel
                        </div>
                    </div>
                </a></div>

                <div className=" overlay-image _ax "><a href={accueil}>
                    <img className=" image _ay " src={accueil} alt="Contact"/>
                    <div className=" normal _b1 ">
                        <div className=" text _2 ">
                        </div>
                    </div>
                    <div className=" hover _b0 ">
                        <img className=" image _ay " src={accueil_logo} alt="Contact legend"/>
                        <div className=" text _2 ">Sarah Triouillier
                        </div>
                    </div>
                </a></div>

            </SRLWrapper>
        </Layout>
    );
}

export default GalleryMenu;
