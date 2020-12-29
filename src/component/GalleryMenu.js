import { SRLWrapper } from "simple-react-lightbox";
import React from "react";
import personn from '../images/personn.jpg';
import sky from '../images/sky.jpg';
import arch from '../images/arch.jpg';
import Layout from "../Layout";
import './GalleryMenu.css';

const options = {

    caption: {
        captionColor: "#a6cfa5",
        marginLeft: '3em'
    }
}
const imageStyle = {
    marginTop: '220px',
    height: '600px',
    width: '1006px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
}
const GalleryMenu = () => {
    return (
        <Layout>
            <SRLWrapper  style={options} >

                <a href='../images/personn.jpg'>
                    <img style={imageStyle} src={personn} />
                </a>
                <br/>
                <a href={sky}>
                    <img  style={imageStyle} src={sky} />
                </a>
                <br/>
                <a href={personn} >
                    <img style={imageStyle} src={personn} />
                </a>
                <br/>
                <a href={sky}>
                    <img style={imageStyle} src={sky} />
                </a>
                <br/>
                <a href='https://images.freeimages.com/images/large-previews/68c/delicate-arch-2-1391623.jpg'>
                    <img style={imageStyle} src={arch} />
                </a>

            </SRLWrapper>
        </Layout>
    );
}

export default GalleryMenu;
