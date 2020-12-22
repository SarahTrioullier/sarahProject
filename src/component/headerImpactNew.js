import React from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
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
<div>
                            <Accordion allowZeroExpanded style={innerDiv}>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton style={{ alignItems: 'center'}}>

                                            <button  className="hamburger" type="button">
                                            <span  className="hamburger-box"><span  className="hamburger-inner hamburger-inner::before hamburger-inner::after"> </span>
                                            </span>
                                            </button>

                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel >
                                        <a href="/headerImpact" style={menuStyle}>
                                            Portrait
                                        </a>
                                    </AccordionItemPanel>
                                    <AccordionItemPanel >
                                        <a href="/headerRouge" style={menuStyle}>
                                            Still life
                                        </a>
                                    </AccordionItemPanel>
                                    <AccordionItemPanel >
                                        <a href="/" style={menuStyle}>
                                            Contact
                                        </a>
                                    </AccordionItemPanel>

                                    <AccordionItemPanel >
                                        <a href="/" style={menuStyle}>
                                            Travel
                                        </a>
                                    </AccordionItemPanel>


                                </AccordionItem>

                            </Accordion>
</div>
                        </div>
                    </MDBNavbarBrand>
                </MDBNavbar>
            </div>

        </Router>
    );
}
export default HeaderImpactNew;
