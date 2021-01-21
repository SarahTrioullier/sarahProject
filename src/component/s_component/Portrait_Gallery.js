import {SRLWrapper} from "simple-react-lightbox";
import { BrowserRouter  } from 'react-router-dom';
import './Portrait_Gallery.css';

import N9A7841 from '../../images/Portrait/Fahrenheit 21/_N9A7841.jpg'
import Alison218 from '../../images/Portrait/NATAL/ALISON-218.jpg'
import mario from '../../images/Portrait/Portrait_Untitled/mario.jpg'
import Adelaide1315 from '../../images/Portrait/Adelaïde/ADELAIDE_KLRP1315.jpg'
import monte03 from '../../images/Portrait/Adelaïde In the Air/ADELAIDE_KLRP_MONTA-03.jpg'

import Layout from "../../Layout";
import Maroc009 from "../../images/Travel/Maroc/MAROC-009.jpg";
import MarocLogo from "../../images/logo/MAROC-009.jpg";
import MYAJIMA_01 from "../../images/Travel/Japon/Tokyo/MYAJIMA_01.jpg";
import travelde from "../../images/travel_N9A9788.jpg";
import travel_logo from "../../images/travel_logo.jpg";
import React from "react";


const PortraitGallery = () => {
    return(

        <BrowserRouter >
        <Layout>
    <SRLWrapper >
        < div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href="/travelMaroc">
            <div>
                <img className=" image _ay " src={Maroc009} alt="Maroc0211"/></div>
            <div className=" normal _b1 ">
                <div className=" text _2 ">
                </div>
            </div>
            <div className=" hover _b0 ">
                <img className=" image _ay " src={MarocLogo} alt="Portrait legend"/>
                <div className=" text _2 ">Maroc
                </div>
            </div>
        </a> </div>





        <div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href="/japonGallery">
            <img className=" image _ay " src={MYAJIMA_01} alt="MYAJIMA_01"/>
            <div className=" normal _b1 ">
                <div className=" text _2 ">
                </div>
            </div>
            <div className=" hover _b0 ">
                <img className=" image _ay " src={MYAJIMA_01} alt="MYAJIMA_01"/>
                <div className=" text _2 ">Japon
                </div>
            </div>
        </a></div>

        <div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href={travelde}>
            <img className=" image _ay " src={travelde} alt="Travel"/>
            <div className=" normal _b1 ">
                <div className=" text _2 ">
                </div>
            </div>
            <div className=" hover _b0 ">
                <img className=" image _ay " src={travel_logo} alt="Travel legend"/>
                <div className=" text _2 ">Travel 3
                </div>
            </div>
        </a></div>


    </SRLWrapper>
        </Layout>
        </BrowserRouter>
    );
}

export default PortraitGallery;