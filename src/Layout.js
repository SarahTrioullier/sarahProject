import React from "react";
import HelveticaMenu from "./component/helveticaMenu";

function Layout({ children }) {
    return (
        <React.Fragment>
            <HelveticaMenu />
            <main >
                <div >
                    <div >{children}</div>
                </div>
            </main>
        </React.Fragment>
    );
}

export default Layout;
