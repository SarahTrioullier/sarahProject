import { SRLWrapper } from "simple-react-lightbox";
import React from "react";
import personn from '../images/personn.jpg';
import travel from '../images/travel.jpg';
import portrait from '../images/portrait.jpg';
import accueil from '../images/accueil.jpg';
import stilllife from '../images/stilllife.jpg';
import Layout from "../Layout";
import './GalleryMenu.css';

const options = {

    caption: {
        captionColor: "#a6cfa5",
        marginLeft: '3em',
        marginTop: '300px'
    }
}
const imageStyle = {

    height: '100%',
    width: '100%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
}



const GalleryMenu = () => {
    return (
        <Layout>
            <SRLWrapper  style={options} >

                <div className="container-img">
                <a href='../images/portrait.jpg'>
                    <img onContextMenu={(e)=> e.preventDefault()} style={imageStyle} src={portrait}  />
                </a>
                </div>

                <br/>
                <div onContextMenu={(e)=> e.preventDefault()}  className="container-img">
                <a href={stilllife}>
                    <img style={imageStyle} src={stilllife} onContextMenu={false}/>
                </a>
                </div>
                <br/>

                    <div onContextMenu ={(e)=> e.preventDefault()}  className="container-img">
                <a href={travel} >
                    <img style={imageStyle} src={travel} onContextMenu={false} />
                </a>
                    </div>
                <br/>


                <div  onContextMenu={(e)=> e.preventDefault()} className="container-img">
                <a href={accueil}>
                    <img  style={imageStyle} src={accueil} onContextMenu={false}/>
                </a>
                </div>
            </SRLWrapper>
        </Layout>
    );
}

export default GalleryMenu;
