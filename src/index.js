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
import Japon from "./component/s_component/Japon";
import Japon_NB from "./component/s_component/Japon_NB";
import Fahrenheit from "./component/s_component/Fahrenheit";
import Alison from "./component/s_component/Alison";
import Adelaide from "./component/s_component/Adelaide";
import Yamee from "./component/s_component/Yamee";
import Portrait_Untitled from "./component/s_component/Portrait_Untitled";
import Ischia from "./component/s_component/Ischia";
import Japon_AutreCouleur from "./component/s_component/Japon_AutreCouleur";
import Filles from "./component/s_component/Filles";
import AdelaideInTheAir from "./component/s_component/AdelaideInTheAIr";
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
    <BrowserRouter path="/japon">
        <Japon />
    </BrowserRouter>
    <BrowserRouter path="/japonNb">
        <Japon_NB />
    </BrowserRouter>
<BrowserRouter path="/japonAutre">
    <Japon_AutreCouleur/>
</BrowserRouter>
    <BrowserRouter path="/fareinheit">
        <Fahrenheit />
    </BrowserRouter>
    <BrowserRouter path="/alison">
        <Alison />
    </BrowserRouter>
    <BrowserRouter path="/adelaide">
        <Adelaide />
    </BrowserRouter>
    <BrowserRouter path="/adelintheaire">
        <AdelaideInTheAir />
    </BrowserRouter>
    <BrowserRouter path="/yamee">
        <Yamee />
    </BrowserRouter>
    <BrowserRouter path="/portraitUntitled">
        <Portrait_Untitled />
    </BrowserRouter>
    <BrowserRouter path="/ischia">
        <Ischia />
    </BrowserRouter>
    <BrowserRouter path="/lesfilles">
        <Filles />
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
