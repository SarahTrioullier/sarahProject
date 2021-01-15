import React from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import '@szhsin/react-menu/dist/index.css';
import './helveticaMenu.css';

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



function HelveticaMenu() {

    return (
        <Router>
            <div style={phantomStyle}>
                <MDBNavbar className="header" style={{ backgroundColor: "transparent" }}   dark>
                    <MDBNavbarBrand>
                        <div className="dropdown">
                    <span className="dropbtn" style={logoStyle}>
SARAHTRIOULLIER
                        </span>

                            <div className="dropdown-content">

                                <a className="dropContent " href="/" >
                                    Home
                                </a>

                                <a className="dropContent " href="/portrait" >
                                    Portrait
                                </a>

                                <a className="dropContent "  href="/stillLife" >
                                    Still life
                                </a>

                                <a className="dropContent "  href="/galleryTravel" >
                                    Travel
                                </a>

                                <a className="dropContent "  href="/gallery#contact" >
                                    Contact
                                </a>



                            </div>
                        </div>




                    </MDBNavbarBrand>
                </MDBNavbar>
            </div>
        </Router>
    );
}
export default HelveticaMenu;
