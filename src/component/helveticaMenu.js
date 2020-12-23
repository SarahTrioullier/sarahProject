import React from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import '@szhsin/react-menu/dist/index.css';
import './helveticaMenu.css';

const phantomStyle = {
    position: "fixed",
    display: "block",
    height: "60px",
    width: "100%",
    textAlign: "center"

};

const menuStyle = {
    alignItems: 'center',
    marginLeft: "37.8em",
    color: 'yellow'
};

const logoStyle = {
    color: "black",
    fontFamily: 'HelveticaNeueUltraLight',
    fontSize: "6em",
    textAlign: "center"
};

function HelveticaMenu() {

    return (
        <Router>
            <div style={phantomStyle}>
                <MDBNavbar className="header" style={{ backgroundColor: "transparent" }}   dark>
                    <MDBNavbarBrand>
                        <div>
                        <span style={logoStyle}>
SARAHTRIOULLIER
                        </span>
                        </div>
                        <div className="dropdown" >


                            <button style={{ alignItems: 'center'}} className="hamburger dropbtn" type="button">
                                            <span  className="hamburger-box"><span  className="hamburger-inner hamburger-inner::before hamburger-inner::after"> </span>
                                            </span>
                            </button>


                            <div className="dropdown-content">

                                <a className="dropContent " href="/headerImpact" >
                                    Portrait
                                </a>

                                <a className="dropContent "  href="/" >
                                    Still life
                                </a>




                                <a className="dropContent "  href="/" >
                                    Travel
                                </a>

                                <a className="dropContent "  href="/" >
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
