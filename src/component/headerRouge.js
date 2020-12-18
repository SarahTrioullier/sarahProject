import React from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';


const phantomStyle = {
    position: "fixed",
    display: "block",
    height: "60px",
    width: "100%"
};

const menuStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: "black",
    marginLeft: "10em"
};

const logoStyle = {
    color: "red",
    fontFamily: 'Photograph Signature',
    fontSize: "6em",
    marginRight: "2em"
};

function HeaderRouge() {
    return (
        <Router>
            <div style={phantomStyle}>
                <MDBNavbar className="header" style={{ backgroundColor: "black" }}   dark>
                    <MDBNavbarBrand>
                        <span style={logoStyle}>
                           Sarah Trioullier
                        </span>
                        <Menu   menuButton={<MenuButton style={{marginRight: '6em'}} > ☰</MenuButton>}>
                            <MenuItem href="/headerRouge">Header Rouge</MenuItem>
                            <MenuItem href="/headerImpact">Header Impact</MenuItem>
                            <MenuItem href="/">Header Jaune</MenuItem>
                            <MenuItem href="/headerWithoutBand">Header Sans Bandeau Jaune</MenuItem>
                            <MenuItem href="/headerWithoutRed">Header Sans Bandeau Rouge</MenuItem>
                        </Menu>



                    </MDBNavbarBrand>
                </MDBNavbar>
            </div>
        </Router>
    );
}
export default HeaderRouge;
