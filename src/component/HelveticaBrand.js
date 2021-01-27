import React from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import '@szhsin/react-menu/dist/index.css';

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



function HelveticaBrand() {

    return (

        <Router>
            <div style={phantomStyle}>
                <MDBNavbar className="header" style={{ backgroundColor: "transparent" }}   dark>
                    <MDBNavbarBrand>
                        <div className="dropdown">
                    <span className="dropbtn" style={logoStyle}>
SARAHTRIOULLIER
                        </span>


                        </div>




                    </MDBNavbarBrand>
                </MDBNavbar>
            </div>
        </Router>

    );
}
export default HelveticaBrand;
