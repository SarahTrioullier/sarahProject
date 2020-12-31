import { SRLWrapper } from "simple-react-lightbox";
import React from "react";
import travel from '../images/travel.jpg';
import Portrait from '../images/Portrait.jpg';
import contact from '../images/contact.jpg';
import Still_life from '../images/Still_life.jpg';
import travel_logo from '../images/travel_logo.jpg';
import Portrait_logo from '../images/Portrait_logo.jpg';
import contact_logo from '../images/contact_logo.jpg';
import Still_life_logo from '../images/Still_life_logo.jpg';
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
                <a href={Portrait}>
                    <img onContextMenu={(e)=> e.preventDefault()} style={imageStyle} src={Portrait}  />
                </a>
                </div>

                <br/>
                <div onContextMenu={(e)=> e.preventDefault()}  className="container-img">
                <a href={Still_life}>
                    <img style={imageStyle} src={Still_life} onContextMenu={false}/>
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
                <a href={contact_logo}>
                    <img  style={imageStyle} src={contact_logo} onContextMenu={false}/>
                </a>
                </div>

                <div className="testHoover">

                </div>
            </SRLWrapper>
        </Layout>
    );
}

export default GalleryMenu;
