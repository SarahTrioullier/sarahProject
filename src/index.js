import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter , Switch } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from "./component/Footer";
import './fonts/Photograph Signature.ttf';
import './fonts/Impact Label.ttf';
import PortraitGallery from "./component/s_component/Portrait_Gallery";
import GalleryMenu from "./component/GalleryMenu";
import StillLifeGallery from "./component/s_component/StillLife_Gallery";
import GalleryTravel from "./component/GalleryTravel";
import TravelMaroc from "./component/s_component/Travel_Maroc";
const routing = (
    <BrowserRouter>
<Switch>
    <BrowserRouter path="/galleryTravel" component={GalleryTravel}>
        <GalleryTravel />
    </BrowserRouter>

    <BrowserRouter path="/travelMaroc" component={TravelMaroc}>
        <TravelMaroc />
    </BrowserRouter>

    <BrowserRouter path="/portrait" component={PortraitGallery}>
                <PortraitGallery />
            </BrowserRouter>
    <BrowserRouter path="/stillLife" component={StillLifeGallery}>
        <StillLifeGallery />
        </BrowserRouter>
    <BrowserRouter path="/gallery">
        <GalleryMenu />
    </BrowserRouter>
        <BrowserRouter path="/">
            <App />
        </BrowserRouter>

</Switch>
        <Footer />

    </BrowserRouter>
);


ReactDOM.render(

  routing, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
