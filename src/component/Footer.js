import React from "react";
import {MDBContainer, MDBFooter, MDBNavbarBrand} from "mdbreact";
import instagram from '../images/instagram.png';


const footerStyle = {
    backgroundColor: "transparent",
    fontFamily: 'HelveticaNeueUltraLight',
    fontSize: "15px",
    color: "black",
    textAlign: "center",
    padding: "5px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "30px",
    width: "100%"
};

const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "30px",
    width: "100%"
};


function Footer() {
    return (
<MDBFooter>
    <div>
        <div style={phantomStyle} />
        <div style={footerStyle}>
        <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright SarahTrioullier

                    <a data-v-39e892d4="" href="https://www.instagram.com/sarah_trioullier/" style={{marginLeft: "0.8em" }} className="navbar-brand">
                        <img data-v-d6b74ff0="" data-v-39e892d4="" src={instagram} height="20" alt=""/>
                    </a>

            </MDBContainer>

        </div>

        </div>
    </div>
</MDBFooter>
    );
}

export default Footer;
