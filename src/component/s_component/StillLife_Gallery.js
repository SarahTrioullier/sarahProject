import  NINA_RICCI016  from '../../images/Still life/Still life/NINA_RICCI-016.jpg';
import  NINA_RICCI054  from '../../images/Still life/Still life/NINA_RICCI-054.jpg';
import  NINA_RICCI062  from '../../images/Still life/Still life/NINA_RICCI-062.jpg';
import  NINA_RICCI0313  from '../../images/Still life/Still life/NINA_RICCI-313.jpg';
import  NINA_RICCI318  from '../../images/Still life/Still life/NINA_RICCI-318.jpg';
import  NINA_RICCI136  from '../../images/Still life/Still life/NINA_RICCI 136.jpg';
import  NINA_RICCI186  from '../../images/Still life/Still life/NINA_RICCI 186.jpg';
import  NINA_RICCI225  from '../../images/Still life/Still life/NINA_RICCI 225.jpg';

import  Baccara62  from '../../images/Still life/Still life/BACCARAT0062.jpg';
import  Baccara70  from '../../images/Still life/Still life/BACCARAT0070.jpg';
import  Baccara  from '../../images/Still life/Still life/BACCARAT.jpg';

import  MJ108  from '../../images/Still life/Still life/MJ_108.jpg';
import  M10239  from '../../images/Still life/Still life/M10239 .jpg';

import  st311  from '../../images/Still life/Still life/0311.jpg';
import  st344  from '../../images/Still life/Still life/0344.jpg';

import { BrowserRouter as Router } from 'react-router-dom';
import Layout from "../../Layout";
import {SRLWrapper} from "simple-react-lightbox";
import './StillLife_Gallery.css';

const StillLifeGallery = () => {
    return(

        <Router>
            <Layout>
                <SRLWrapper >

                    <div className="imageP">
                        <img  style={{ width: "712px", height: "569.6px"}} src={NINA_RICCI016} alt="NINA_RICCI016"/>
                    </div>

                    <div className="imageP" >
                        <img style={{width: "712px", height: "569.6px"}} src={NINA_RICCI054} alt="Capture"/>
                    </div>

                    <div className="imageP">
                        <img  style={{  width: "712px", height: "901.26px"}} src={NINA_RICCI062} alt="Alison"/>
                    </div>

                    <div className="imageP" >
                        <img style={{width: "712px", height: "569.6px"}} src={NINA_RICCI0313} alt="Capture"/>
                    </div>
                    <div className="imageP">
                        <img  style={{  width: "712px", height: "569.6px"}} src={NINA_RICCI318} alt="Alison"/>
                    </div>

                    <div className="imageP" >
                        <img style={{width: "712px", height: "1078.78px"}} src={NINA_RICCI136} alt="Capture"/>
                    </div>
                    <div className="imageP">
                        <img  style={{width: "712px", height: "1078.78px"}} src={NINA_RICCI186} alt="Alison"/>
                    </div>

                    <div className="imageP" >
                        <img style={{width: "712px", height: "1078.78px"}} src={NINA_RICCI225} alt="Capture"/>
                    </div>
                    <div className="imageP">
                        <img  style={{  width: "912px", height: "412.66px"}} src={Baccara62} alt="Alison"/>
                    </div>

                    <div className="imageP" >
                        <img style={{width: "912px", height: "412.66px"}} src={Baccara70} alt="Capture"/>
                    </div>
                    <div className="imageP">
                        <img  style={{  width: "912px", height: "412.66px"}} src={Baccara} alt="Alison"/>
                    </div>

                    <div className="imageP" >
                        <img style={{width: "712px", height: "569.6px"}} src={MJ108} alt="Capture"/>
                    </div>
                    <div className="imageP">
                        <img  style={{  width: "712px", height: "474.66px"}} src={M10239} alt="Alison"/>
                    </div>

                    <div className="imageP" >
                        <img style={{width: "712px", height: "570px"}} src={st311} alt="Capture"/>
                    </div>
                    <div className="imageP" >
                        <img style={{width: "512px", height: "775.75px"}} src={st344} alt="Capture"/>
                    </div>

                </SRLWrapper>
            </Layout>
        </Router>
    );
}

export default StillLifeGallery;
