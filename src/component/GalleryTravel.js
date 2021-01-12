import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import React from "react";
import travel_logo from '../images/travel_logo.jpg';
import travelde from '../images/travel_N9A9788.jpg';
import './GalleryMenu.css';
import Maroc0211 from '../images/Travel/MAROC-021 1.jpg'
import Maroc022 from '../images/Travel/MAROC-022.jpg'
import Maroc025 from '../images/Travel/MAROC-025.jpg'
import Maroc0251 from '../images/Travel/MAROC-025 1.jpg'
import Layout from "../Layout";
import { BrowserRouter as Router } from 'react-router-dom';
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



const GalleryTravel = () => {
    return (

        <Router>
            <SRLWrapper>
                <Layout>

                    < div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href="https://charlene19.github.io/sarahProject/#/travelMaroc">
                        <div>
                            <img className=" image _ay " src={Maroc0211} alt="Maroc0211"/></div>
                        <div className=" normal _b1 ">
                            <div className=" text _2 ">
                            </div>
                        </div>
                        <div className=" hover _b0 ">
                            <img className=" image _ay " src={Maroc0211} alt="Portrait legend"/>
                            <div className=" text _2 ">Maroc
                            </div>
                        </div>
                    </a> </div>





                    <div onContextMenu={(e)=> e.preventDefault()} className=" overlay-image _ax "><a href="/stillLife">
                        <img className=" image _ay " src={Maroc022} alt="Maroc022"/>
                        <div className=" normal _b1 ">
                            <div className=" text _2 ">
                            </div>
                        </div>
                        <div className=" hover _b0 ">
                            <img className=" image _ay " src={Maroc022} alt="Portrait legend"/>
                            <div className=" text _2 ">Travel 2
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



                </Layout>
            </SRLWrapper>
        </Router>
    );
}

export default GalleryTravel;
