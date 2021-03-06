import React from "react";
import HelveticaBrand from "./HelveticaBrand";
import Footer from "./Footer";

function LayoutHeader({ children }) {
    return (
        <React.Fragment>
            <HelveticaBrand />
            <main >
                <div style={{marginTop: '200px'}} >
                    <div >{children}</div>
                </div>
            </main>

        </React.Fragment>
    );
}

export default LayoutHeader;
