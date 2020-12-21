import React from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import '@szhsin/react-menu/dist/index.css';

const phantomStyle = {
    position: "fixed",
    display: "block",
    height: "60px",
    width: "100%"
};

const menuStyle = {
    alignItems: 'center',
    marginLeft: "37.8em",

    color: 'yellow'
};

const logoStyle = {
    color: "red",
    fontFamily: 'Photograph Signature',
    fontSize: "6em",
    paddingLeft: '0.5em'
};

function HeaderWithoutRed() {

    return (
        <Router>
            <div style={phantomStyle}>
                <MDBNavbar className="header" style={{ backgroundColor: "white" }}   dark>
                    <MDBNavbarBrand>
                        <div>
                        <span style={logoStyle}>
                           Sarah Trioullier
                        </span>
                        </div>
                    </MDBNavbarBrand>
                </MDBNavbar>
            </div>
        </Router>
    );
}
export default HeaderWithoutRed;
