import  { SRLWrapper } from "simple-react-lightbox";
import React from "react";
import travel_logo from '../images/travel_logo.jpg';
import travelde from '../images/travel_N9A9788.jpg';
import './GalleryMenu.css';
import Maroc009 from '../images/Travel/Maroc/MAROC-009.jpg'
import MarocLogo from '../images/logo/MAROC-009.jpg'
import MYAJIMA_01 from '../images/Travel/Japon/Tokyo/MYAJIMA_01.jpg'
import Ischia20 from '../images/Travel/ischia/ISCHIA_20.jpg'
import IschiaLogo from '../images/logo/ISCHIA_20.jpg'

import Layout from "../Layout";
import {BrowserRouter as Router, Link} from 'react-router-dom';




const GalleryTravel = () => {
    return (

                <Layout>

                    < div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><Link to="/travelMaroc">
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
                    </Link> </div>


                    <div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><Link to="/japon">
                        <img className=" image _ay " src={MYAJIMA_01} alt="MYAJIMA_01"/>
                        <div className=" normal _b1 ">
                            <div className=" text _2 ">
                            </div>
                        </div>
                        <div className=" hover _b0 ">
                            <img className=" image _ay " src={MYAJIMA_01} alt="MYAJIMA_01"/>
                            <div className=" text _2 ">Japon 1
                            </div>
                        </div>
                    </Link></div>

                    <div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><Link to="/japonDeux">
                        <img className=" image _ay " src={MYAJIMA_01} alt="MYAJIMA_01"/>
                        <div className=" normal _b1 ">
                            <div className=" text _2 ">
                            </div>
                        </div>
                        <div className=" hover _b0 ">
                            <img className=" image _ay " src={MYAJIMA_01} alt="MYAJIMA_01"/>
                            <div className=" text _2 ">Japon 2
                            </div>
                        </div>
                    </Link></div>

                    <div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><Link to="/japonTrois">
                        <img className=" image _ay " src={MYAJIMA_01} alt="MYAJIMA_01"/>
                        <div className=" normal _b1 ">
                            <div className=" text _2 ">
                            </div>
                        </div>
                        <div className=" hover _b0 ">
                            <img className=" image _ay " src={MYAJIMA_01} alt="MYAJIMA_01"/>
                            <div className=" text _2 ">Japon 3
                            </div>
                        </div>
                    </Link></div>



                    <div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><Link to="/ischia">
                        <img className=" image _ay " src={Ischia20} alt="Travel"/>
                        <div className=" normal _b1 ">
                            <div className=" text _2 ">
                            </div>
                        </div>
                        <div className=" hover _b0 ">
                            <img className=" image _ay " src={IschiaLogo} alt="Travel legend"/>
                            <div className=" text _2 ">Ischia
                            </div>
                        </div>
                    </Link></div>



                </Layout>

    );
}

export default GalleryTravel;