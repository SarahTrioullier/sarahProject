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
    height: "60px",
    width: "100%",

};

const outerDiv = {
    padding: "30px",
    backgroundColor: "black"
};

const innerDiv = {
    display: "inline-block",

    textAlign: "center",

    paddingLeft: '140px'
};
const menuStyle = {
    alignItems: 'center',
    margin: 'auto',
    color: 'yellow'
};

const logoStyle = {
    color: "yellow",
    fontFamily: 'Photograph Signature',
    fontSize: "6em"
};


function Header() {

    return (
        <Router>

            <div style={phantomStyle}>
                <MDBNavbar className="header" style={outerDiv}   dark>
                    <MDBNavbarBrand>

                        <div>
                        <span style={logoStyle}>
                           Sarah Trioullier
                        </span>

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
                                        Header Impact
                                    </a>
                                </AccordionItemPanel>
                                <AccordionItemPanel >
                                    <a href="/headerRouge" style={menuStyle}>
                                        Header Rouge
                                    </a>
                                </AccordionItemPanel>
                                <AccordionItemPanel >
                                    <a href="/" style={menuStyle}>
                                        Header Jaune
                                    </a>
                                </AccordionItemPanel>
                                <AccordionItemPanel >
                                    <a href=" /headerWithoutBand" style={menuStyle}>
                                        Header Sans Bandeau Jaune
                                    </a>
                                </AccordionItemPanel>
                                <AccordionItemPanel >
                                    <a href=" /headerWithoutRed" style={menuStyle}>
                                        Header Sans Bandeau Rouge
                                    </a>
                                </AccordionItemPanel>

                            </AccordionItem>

                            </Accordion>
                        </div>
                    </MDBNavbarBrand>
                </MDBNavbar>
            </div>

        </Router>
    );
}
export default Header;
