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

const styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
    },
    elementStyle: {
        position: 'absolute',
        left: '600px',
        top: '0px',
        zIndex: 1,
width: '100%',
height: '100%',
margin: '0px',
padding: '0px',
border: 'none',
fontSize: '0px',
background: 'white',
cursor:'pointer',

    },
    bmBurgerBars: {
        background: '#373a47'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%'
    },
    bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmItem: {
        display: 'inline-block'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
};

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
    color: "yellow",
    fontFamily: 'Photograph Signature',
    fontSize: "6em"
};

function Header() {

    return (
        <Router>
            <div style={phantomStyle}>
                <MDBNavbar className="header" style={{ backgroundColor: "black" }}   dark>
                    <MDBNavbarBrand>
                        <div>
                        <span style={logoStyle}>
                           Sarah Trioullier
                        </span>
                        <div className="bm-burger-button" style={styles.bmBurgerButton}>
                            <button id="react-burger-menu-btn"
                                    style={styles.elementStyle}>☰
                            </button>
                            <span><span className="bm-burger-bars" style={styles.bmBurgerBars}> </span><span
                                className="bm-burger-bars"
                                style={styles.bmBurgerBars}> </span><span
                                className="bm-burger-bars"
                                style={styles.bmBurgerBars}> </span> </span>
                        </div>
                        </div>
                        <Accordion >
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton style={{ fontcolor: "white" }}>


                                        <div className="bm-burger-button" style={styles.bmBurgerButton}>
                                            <button id="react-burger-menu-btn"
                                                    style={styles.elementStyle}>Open
                                                Menu

                                            <span><span className="bm-burger-bars" style={styles.bmBurgerBars}> </span><span
                                                className="bm-burger-bars"
                                               style={styles}> </span><span
                                                className="bm-burger-bars"
                                                style={styles.bmBurgerBars}> </span> </span>  </button>
                                        </div>

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
                    </MDBNavbarBrand>
                </MDBNavbar>
            </div>
        </Router>
    );
}
export default Header;
