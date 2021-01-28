import React from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
import {BrowserRouter as Router, Link, NavLink, Route} from 'react-router-dom';
import '@szhsin/react-menu/dist/index.css';
import './helveticaMenu.css';
import GalleryMenu from "./GalleryMenu";
import PortraitGallery from "./s_component/Portrait_Gallery";

const phantomStyle = {
    position: "fixed",
    display: "block",
    height: "260px",
    width: "100%",
    textAlign: "center",
marginTop: "auto",
    cursor: "pointer",
    zIndex: 3
};


const logoStyle = {

    color: "black",
    fontFamily: 'HelveticaNeueUltraLight',
    fontSize: "6em",
    textAlign: "center",
    zIndex: 3

};

const header = {
    zIndex: 1
}

function HelveticaMenu() {

    return (

            <div style={phantomStyle}>
                <MDBNavbar className="header" style={{ backgroundColor: "transparent" }}   dark>
                    <MDBNavbarBrand>
                        <div className="dropdown">
                    <span className="dropbtn" style={logoStyle}>
SARAHTRIOULLIER
                        </span>

                            <div className="dropdown-content">

                                <a href="https://charlene19.github.io/sarahProject/#/"   className="dropContent">
                                    Home
                                </a>

                                <a href="https://charlene19.github.io/sarahProject/#/roster" className="dropContent ">
                                    Portrait
                                </a>

                                <a href="https://charlene19.github.io/sarahProject/#/schedule" className="dropContent "  >
                                    Still life
                                </a>

                                <a href="https://charlene19.github.io/sarahProject/#/galleryTravel" className="dropContent ">
                                    Travel
                                </a>

                                <a href="/gallery#contact" className="dropContent " >
                                    Contact
                                </a>

                            </div>
                        </div>

                    </MDBNavbarBrand>
                </MDBNavbar>
            </div>

    );
}
export default HelveticaMenu;
