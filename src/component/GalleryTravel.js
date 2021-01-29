import  { SRLWrapper } from "simple-react-lightbox";
import React from "react";
import travel_logo from '../images/travel_logo.jpg';
import travelde from '../images/travel_N9A9788.jpg';
import './GalleryMenu.css';
import Maroc009 from '../images/logo1/MAROC vierge.jpg'
import MarocLogo from '../images/logo1/MAROC.jpg'
import MYAJIMA_01 from '../images/Travel/Japon/Tokyo/MYAJIMA_01.jpg'
import Ischia20 from '../images/Travel/ischia/ISCHIA_20.jpg'
import IschiaLogo from '../images/logo/ISCHIA_20.jpg'
import JaponDe from '../images/logo1/JAPON 0.2.jpg'
import JaponDeV from '../images/logo1/JAPON 0.2 vierge.jpg'
import JaponNB from '../images/logo1/JAPON 0.1.jpg'
import JaponNBV from '../images/Travel/Japon/JaponNB/REPRO45904.jpg'
import JaponTr from '../images/Travel/Japon/JaponColor/2019-03-07_REPROS_JAPON_029.jpg'
import JaponTrLogo from '../images/logo1/JAPON 0.3.jpg'
import Layout from "../Layout";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Ischia from '../images/logo1/ISCHIA.jpg'
import IschiaVierge from '../images/logo1/ISCHIA vierge.jpg'



const GalleryTravel = () => {
    return (


        <SRLWrapper>
        <Layout>

              <div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href="/ischia">
                        <img className=" image _ay " src={IschiaVierge} alt="Travel"/>
                        <div className=" normal _b1 ">
                            <div className=" text _2 ">
                            </div>
                        </div>
                        <div className=" hover _b0 ">
                            <img className=" image _ay " src={Ischia}  alt="Travel legend"/>
                            <div className=" text _2 ">ISCHIA
                            </div>
                        </div>
                    </a></div>

                    <div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href="/japonNb">
                        <img className=" image _ay " src={JaponNBV}  alt="MYAJIMA_01"/>
                        <div className=" normal _b1 ">
                            <div className=" text _2 ">
                            </div>
                        </div>
                        <div className=" hover _b0 ">
                            <img className=" image _ay " src={JaponNB}  alt="MYAJIMA_01"/>
                            <div className=" text _2 ">JAPON 0.1
                            </div>
                        </div>
                    </a></div>


                    <div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href="/japon">
                        <img className=" image _ay " src={JaponDeV} alt="MYAJIMA_01"/>
                        <div className=" normal _b1 ">
                            <div className=" text _2 ">
                            </div>
                        </div>
                        <div className=" hover _b0 ">
                            <img className=" image _ay " src={JaponDe} alt="MYAJIMA_01"/>
                            <div className=" text _2 ">JAPON 0.2
                            </div>
                        </div>
                    </a></div>

                    <div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href="/japonAutre">
                        <img className=" image _ay " src={JaponTr} alt="MYAJIMA_01"/>
                        <div className=" normal _b1 ">
                            <div className=" text _2 ">
                            </div>
                        </div>
                        <div className=" hover _b0 ">
                            <img className=" image _ay " src={JaponTrLogo} alt="MYAJIMA_01"/>
                            <div className=" text _2 ">JAPON 0.3
                            </div>
                        </div>
                    </a></div>

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

        </Layout>
            </SRLWrapper>

    );
}

export default GalleryTravel;
