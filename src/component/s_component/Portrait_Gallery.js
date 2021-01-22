import {SRLWrapper} from "simple-react-lightbox";
import { BrowserRouter  } from 'react-router-dom';
import './Portrait_Gallery.css';
import '../GalleryMenu.css';

import N9A7841 from '../../images/Portrait/Fahrenheit 21/_N9A7841.jpg'
import Alison218 from '../../images/Portrait/NATAL/ALISON-218.jpg'
import mario from '../../images/Portrait/Portrait_Untitled/mario.jpg'
import Adelaide1315 from '../../images/Portrait/Adelaïde/ADELAIDE_KLRP1315.jpg'
import monte03 from '../../images/Portrait/Adelaïde In the Air/ADELAIDE_KLRP_MONTA-03.jpg'
import FS778 from '../../images/Portrait/Yamee pour Franck Sorbier/FRANCK_SORBIER_778.jpg'

import N9A7841Logo from '../../images/logo/_N9A7841.jpg'
import Alison218Logo from '../../images/logo/ALISON-218.jpg'
import Adelaide1315Logo from '../../images/logo/ADELAIDE_KLRP1315.jpg'
import AdelaidMontaLogo from '../../images/logo/ADELAIDE_KLRP_MONTA-03.jpg'
import FS778Logo from '../../images/logo/FRANCK_SORBIER_778.jpg'
import marioLogo from '../../images/logo/mario.jpg'


import Layout from "../../Layout";

import React from "react";


const PortraitGallery = () => {
    return(

        <BrowserRouter >
        <Layout>
    <SRLWrapper >
        < div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href="/fareinheit">
            <div>
                <img className=" image _ay " src={N9A7841} alt="N9A7841"/></div>
            <div className=" normal _b1 ">
                <div className=" text _2 ">
                </div>
            </div>
            <div className=" hover _b0 ">
                <img className=" image _ay " src={N9A7841Logo} alt="N9A7841Logo legend"/>
                <div className=" text _2 ">Fareinheit 21
                </div>
            </div>
        </a> </div>





        <div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href="/alison">
            <img className=" image _ay " src={Alison218} alt="MYAJIMA_01"/>
            <div className=" normal _b1 ">
                <div className=" text _2 ">
                </div>
            </div>
            <div className=" hover _b0 ">
                <img className=" image _ay " src={Alison218Logo} alt="Alison218Logo"/>
                <div className=" text _2 ">Alison
                </div>
            </div>
        </a></div>

        <div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href="/portraitUntitled">
            <img className=" image _ay " src={mario} alt="MYAJIMA_01"/>
            <div className=" normal _b1 ">
                <div className=" text _2 ">
                </div>
            </div>
            <div className=" hover _b0 ">
                <img className=" image _ay " src={marioLogo} alt="marioLogo"/>
                <div className=" text _2 ">Untitled
                </div>
            </div>
        </a></div>
<div></div>
        <div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href="/adelaide">
            <img className=" image _ay " src={Adelaide1315} alt="Travel"/>
            <div className=" normal _b1 ">
                <div className=" text _2 ">
                </div>
            </div>
            <div className=" hover _b0 ">
                <img className=" image _ay " src={Adelaide1315Logo} alt="Adelaide1315Logo legend"/>
                <div className=" text _2 "> Adelaide
                </div>
            </div>
        </a></div>

        <div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href="/adelintheaire">
            <img className=" image _ay " src={monte03} alt="Travel"/>
            <div className=" normal _b1 ">
                <div className=" text _2 ">
                </div>
            </div>
            <div className=" hover _b0 ">
                <img className=" image _ay " src={AdelaidMontaLogo} alt="AdelaidMontaLogo legend"/>
                <div className=" text _2 ">Adelaide Monta
                </div>
            </div>
        </a></div>

        <div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href="/yamee">
            <img className=" image _ay " src={FS778} alt="Travel"/>
            <div className=" normal _b1 ">
                <div className=" text _2 ">
                </div>
            </div>
            <div className=" hover _b0 ">
                <img className=" image _ay " src={FS778Logo} alt="FS778Logo legend"/>
                <div className=" text _2 ">Yamee pour Franck Sorbier
                </div>
            </div>
        </a></div>


    </SRLWrapper>
        </Layout>
        </BrowserRouter>
    );
}

export default PortraitGallery;