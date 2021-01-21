import  { SRLWrapper } from "simple-react-lightbox";
import React from "react";
import '../GalleryMenu.css';

import MYAJIMA_01 from '../../images/Travel/Japon/Tokyo/MYAJIMA_01.jpg'

import REPRO45900 from '../../images/Travel/Japon/JaponNB/REPRO45904.jpg'
import R45900Logo from '../../images/logo/REPRO45904.jpg'
import Layout from "../../Layout";
import { BrowserRouter as Router } from 'react-router-dom';


const JaponGallery = () => {
    return (

        <Router>
            <SRLWrapper>
                <Layout>

                    < div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href="/japonNb">
                        <div>
                            <img className=" image _ay " src={REPRO45900} alt="REPRO45904"/></div>
                        <div className=" normal _b1 ">
                            <div className=" text _2 ">
                            </div>
                        </div>
                        <div className=" hover _b0 ">
                            <img className=" image _ay " src={R45900Logo} alt="REPRO45900"/>
                            <div className=" text _2 ">Japon en Noir et Blanc
                            </div>
                        </div>
                    </a> </div>





                    <div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href="/japon">
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


                </Layout>
            </SRLWrapper>
        </Router>
    );
}

export default JaponGallery;