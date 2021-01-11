import React, { Component } from 'react'
import './App.css'
import SimpleReactLightbox from "simple-react-lightbox";
import '@szhsin/react-menu/dist/index.css';
import GalleryMenu from "./component/GalleryMenu";
import Switch from "react-bootstrap/Switch";
import {BrowserRouter, BrowserRouter as Router, BrowserRouter as Route} from 'react-router-dom';
import PortraitGallery from "./component/s_component/Portrait_Gallery";
import StillLifeGallery from "./component/s_component/StillLife_Gallery";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Header from "./component/Header";
import HelveticaMenu from "./component/helveticaMenu";
import Home from "./component/Home";

const App = () => (
    <div>
        <Header/>
        <HelveticaMenu />
        <Home />
    </div>
)

export default App


