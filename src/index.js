import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from "./component/Footer";
import './fonts/Photograph Signature.ttf';
import './fonts/Impact Label.ttf';
import PortraitGallery from "./component/s_component/Portrait_Gallery";
import GalleryMenu from "./component/GalleryMenu";
import StillLifeGallery from "./component/s_component/StillLife_Gallery";
const routing = (
    <Router>
        <Switch>
            <Route path="/portrait">
                <PortraitGallery />
            </Route>
            <Route path="/stillLife">
                <StillLifeGallery />
            </Route>
            <Route path="/gallery">
                <GalleryMenu />
            </Route>
            <Route path="/">
                <App />
            </Route>

        </Switch>
        <Footer />

    </Router>
);


ReactDOM.render(

    routing, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();