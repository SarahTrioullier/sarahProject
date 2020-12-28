import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import {Menu, MenuButton, MenuItem} from "@szhsin/react-menu";
import SimpleReactLightbox from "simple-react-lightbox";
import '@szhsin/react-menu/dist/index.css';
import Images from "./component/imageTest";
import GalleryMenu from "./component/GalleryMenu";
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

