import React from "react";
import HelveticaMenu from "./component/helveticaMenu";

function Layout({ children }) {
    return (
        <div>
            <HelveticaMenu />

            <main style={{paddingTop: '60px'}}>

                    <div >{children}</div>

            </main>

        </div>
    );
}

export default Layout;
