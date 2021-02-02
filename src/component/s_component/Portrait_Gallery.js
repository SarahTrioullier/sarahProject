import {SRLWrapper} from "simple-react-lightbox";
import { BrowserRouter  } from 'react-router-dom';
import N9A7841 from '../../images/Portrait/Fahrenheit 21/_N9A7841.jpg'
import Alison218 from '../../images/Portrait/NATAL/ALISON-218.jpg'
import mario from '../../images/Portrait/Portrait_Untitled/mario.jpg'
import Adelaide1315 from '../../images/Portrait/Adelaïde/ADELAIDE_KLRP1315.jpg'
import monte03 from '../../images/Portrait/Adelaïde In the Air/ADELAIDE_KLRP_MONTA-01.jpg'
import FS778 from '../../images/Portrait/Yamee pour Franck Sorbier/FRANCK_SORBIER_778.jpg'

import N9A7841Logo from '../../images/logo/_N9A7841.jpg'
import Alison218Logo from '../../images/logo/ALISON-218.jpg'
import Adelaide1315Logo from '../../images/logo/ADELAIDE_KLRP1315.jpg'
import AdelaidMontaLogo from '../../images/logo/ADELAIDE_KLRP_MONTA-03.jpg'
import FS778Logo from '../../images/logo/FRANCK_SORBIER_778.jpg'
import marioLogo from '../../images/logo/mario.jpg'

import Layout from "../../Layout";
import AdMoLo from '../../images/logo1/IN THE AIR.jpg'
import FahrenheitOriginal from '../../images/logo1/FAHRENHEIT 21.jpg'
import FahrenheitVierge from '../../images/logo1/FARENHEIT 21 vierge.jpg'
import Untitle from '../../images/rLogo/UNTITLE .jpg'
import UntitleVierge from '../../images/rLogo/UNTITLE vierge.jpg'
import Yamee from '../../images/logo1/YAMEE.jpg'
import YameeVierge from '../../images/logo1/YAMEE vierge.jpg'
import FillLogo from '../../images/logo/LES FILLES.jpg'
import Filles from '../../images/logo/LES FILLES virege.jpg'
import React from "react";


const PortraitGallery = () => {
    return(

        <BrowserRouter >
        <Layout>
    <SRLWrapper >
              <div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href="/adelintheaire">
                        <img  className=" image _ay " src={monte03} alt="Travel"/>
                        <div className=" normal _b1 ">
                            <div className=" text _2 ">
                            </div>
                        </div>
                        <div className=" hover _b0 ">
                            <img className=" image _ay " src={AdMoLo} alt="AdelaidMontaLogo legend"/>
                            <div style={{fontFamily: 'HelveticaNeueUltraLight'}} className=" text _2 ">IN THE AIR
                            </div>
                        </div>
                    </a></div>

                    <div style={{marginTop: '20px'}}  onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href="/adelaide">
                        <img style={{marginTop: '20px'}} className=" image _ay " src={Adelaide1315} alt="Travel"/>
                        <div className=" normal _b1 ">
                            <div className=" text _2 ">
                            </div>
                        </div>
                        <div className=" hover _b0 ">
                            <img className=" image _ay " src={Adelaide1315Logo} alt="Adelaide1315Logo legend"/>
                            <div className=" text _2 "> ADELAIDE
                            </div>
                        </div>
                    </a></div>

                    <div style={{marginTop: '20px'}}  onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href="/yamee">
                        <img className=" image _ay " src={YameeVierge} alt="Travel"/>
                        <div className=" normal _b1 ">
                            <div className=" text _2 ">
                            </div>
                        </div>
                        <div className=" hover _b0 ">
                            <img className=" image _ay " src={Yamee} alt="FS778Logo legend"/>
                            <div className=" text _2 ">YAMEE
                            </div>
                        </div>
                    </a></div>

                    <div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href="/alison">
                        <img className=" image _ay " src={Alison218} alt="MYAJIMA_01"/>
                        <div className=" normal _b1 ">
                            <div className=" text _2 ">
                            </div>
                        </div>
                        <div className=" hover _b0 ">
                            <img className=" image _ay " src={Alison218Logo} alt="Alison218Logo"/>
                            <div className=" text _2 ">NATAL
                            </div>
                        </div>
                    </a></div>

                    < div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href="/fareinheit">
                        <div>
                            <img className=" image _ay " src={FahrenheitVierge} alt="N9A7841"/></div>
                        <div className=" normal _b1 ">
                            <div className=" text _2 ">
                            </div>
                        </div>
                        <div className=" hover _b0 ">
                            <img className=" image _ay " src={FahrenheitOriginal} alt="N9A7841Logo legend"/>
                            <div className=" text _2 ">FAHRENHEIT 21
                            </div>
                        </div>
                    </a> </div>

                    <div  onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href="/portraitUntitled">
                        <img  className=" image _ay " src={UntitleVierge} alt="MYAJIMA_01"/>
                        <div className=" normal _b1 ">
                            <div className=" text _2 ">
                            </div>
                        </div>
                        <div className=" hover _b0 ">
                            <img   className=" image _ay " src={Untitle} alt="Alison218Logo"/>
                            <div className=" text _2 ">UNTITLED
                            </div>
                        </div>
                    </a></div>

        <div  onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href="/lesfilles">
            <img  className=" image _ay " src={Filles} alt="Filles"/>
            <div className=" normal _b1 ">
                <div className=" text _2 ">
                </div>
            </div>
            <div className=" hover _b0 ">
                <img   className=" image _ay " src={FillLogo} alt="FillLogo"/>
                <div className=" text _2 ">LES FILLES
                </div>
            </div>
        </a></div>




    </SRLWrapper>
        </Layout>
        </BrowserRouter>
    );
}

export default PortraitGallery;
