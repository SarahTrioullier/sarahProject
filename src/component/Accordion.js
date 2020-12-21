import React, {Component} from "react";
import {AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel} from "react-accessible-accordion";
import { BrowserRouter as Router } from 'react-router-dom';



const innerDiv = {
    display: "inline-block",
    padding: '50px',
    textAlign: "center"
};
const menuStyle = {
    alignItems: 'center',
    margin: 'auto',
    color: 'yellow'
};

class Accordion extends Component {
render() {
    return <Router>
    <Accordion allowZeroExpanded style={innerDiv}>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton style={{ alignItems: 'center'}}>


                    <button  className="hamburger" type="button">

                                            <span  className="hamburger-box"><span className="hamburger-inner"> </span>
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
    </Router>;
}
}

export default Accordion;
