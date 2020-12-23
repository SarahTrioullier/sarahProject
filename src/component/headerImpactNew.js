import React from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import '@szhsin/react-menu/dist/index.css';
import './header.css';


const phantomStyle = {
    position: "fixed",
    display: "block",
    height: "15px",
    width: "100%",

};

const outerDiv = {
    padding: "15px",
    backgroundColor: "black",
    textAlign: "center"
};

const innerDiv = {
    display: "inline-block",
    fontFamily: 'impact',
    textAlign: "center"
};
const menuStyle = {
    alignItems: 'center',
    margin: 'auto',
    color: 'yellow',
    fontSize: "1.4em",
    marginTop: '1em',
    textDecoration: 'none'
};

const logoStyle = {
    color: "yellow",
    fontFamily: 'impact',
    fontSize: "5em"
};


function HeaderImpactNew() {

    return (
        <Router>

            <div style={phantomStyle}>
                <MDBNavbar className="header" style={outerDiv}   dark>
                    <MDBNavbarBrand>

                        <div>
                        <span style={logoStyle}>
                          SARAH TRIOULLIER
                        </span>
                            <div className="dropdown" >


                                <button style={{ alignItems: 'center'}} className="hamburger dropbtn" type="button">
                                            <span  className="hamburger-box"><span  className="hamburger-inner hamburger-inner::before hamburger-inner::after"> </span>
                                            </span>
                                </button>


                                <div className="dropdown-content">

                                    <a className="dropContent " href="/headerImpact" >
                                        Portrait
                                    </a>

                                    <a className="dropContent "  href="/headerRouge" >
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

                        </div>
                    </MDBNavbarBrand>
                </MDBNavbar>
            </div>

        </Router>
    );
}
export default HeaderImpactNew;
