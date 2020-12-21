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
    height: "140px",
    width: "100%",
    backgroundColor: "black"
};

const menuStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: "black",
    marginLeft: "3em"
};

const logoStyle = {
    fontcolor: "red",
    fontFamily: 'Impact Label',
    fontSize: "4em",
    backgroundColor: "red",
    marginRight: "1em"
};

function HeaderImpact() {
    return (
        <Router>
            <div style={phantomStyle}>
                <MDBNavbar className="header" dark>
                    <MDBNavbarBrand>
                        <span style={logoStyle}>
                           Sarah Trioullier
                        </span>
                        <Menu style={{marginLeft: "3em"}}  menuButton={<MenuButton style={{marginLeft: "6em"}} > ☰</MenuButton>}>
                            <MenuItem href="/headerRouge">Header Rouge</MenuItem>
                            <MenuItem href="/headerImpact">Header Impact</MenuItem>
                            <MenuItem href="/headerJaune">Header Jaune</MenuItem>
                            <MenuItem href="/headerWithoutBand">Header Sans Bandeau Jaune</MenuItem>
                            <MenuItem href="/headerWithoutRed">Header Sans Bandeau Rouge</MenuItem>
                        </Menu>
                    </MDBNavbarBrand>
                </MDBNavbar>
            </div>
        </Router>
    );
}
export default HeaderImpact;
