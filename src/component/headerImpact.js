import React from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";
import './headerImpact.css';
import './header.css';

const phantomStyle = {
    position: "fixed",
    display: "block",
    height: "140px",
    width: "100%",
    backgroundColor: "black"
};

const innerDiv = {
    display: "inline-block",
    fontFamily: 'impact',
    textAlign: "center"
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


                                        <div  className="hamburger hooverOk" type="button">
                                            <span  className="hamburger-box"><span  className="hamburger-inner hamburger-inner::before hamburger-inner::after"> </span>
                                            </span>

                                        </div>

<div className="hideBlock">
                                        <a className="dropContent" href="/headerRouge" >
                                            Still life
                                        </a>
    <br/>
    <a  href="/headerRouge" >
       Portrait
    </a>

</div>






                    </MDBNavbarBrand>
                </MDBNavbar>
            </div>
        </Router>
    );
}
export default HeaderImpact;
