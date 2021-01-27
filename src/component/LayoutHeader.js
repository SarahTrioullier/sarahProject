import React from "react";
import HelveticaBrand from "./HelveticaBrand";


function LayoutHeader({ children }) {
    return (
        <React.Fragment>
            <div style={{marginBottom: '100px'}}>
            <HelveticaBrand />
            </div>
                <div  >
                    <div style={{marginTop: '100px'}}>{children}</div>
                </div>


        </React.Fragment>
    );
}

export default LayoutHeader;
