import React from "react";
import HelveticaMenu from "./component/helveticaMenu";

function Layout({ children }) {
    return (
        <React.Fragment>
            <HelveticaMenu />
            <main >
                <div  style={{marginTop: '200px'}}>
                    <div >{children}</div>
                </div>
            </main>
        </React.Fragment>
    );
}

export default Layout;
