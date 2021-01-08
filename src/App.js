import React, { Component } from 'react'
import './App.css'
import SimpleReactLightbox from "simple-react-lightbox";
import '@szhsin/react-menu/dist/index.css';
import GalleryMenu from "./component/GalleryMenu";
import Switch from "react-bootstrap/Switch";
import { BrowserRouter as Route } from 'react-router-dom';
import PortraitGallery from "./component/s_component/Portrait_Gallery";
import StillLifeGallery from "./component/s_component/StillLife_Gallery";
class App extends Component {
    render() {
        return (
            <SimpleReactLightbox>
                <div style={{height: '2em'}}></div>
                <GalleryMenu/>
            </SimpleReactLightbox>
        );
    }
}


export default App;
