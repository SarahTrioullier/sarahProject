import React from "react";
import HelveticaMenu from "./component/helveticaMenu";
import Footer from "./component/Footer";

function Layout({ children }) {
    return (
        <React.Fragment>

            <HelveticaMenu />

            <main >


                    <div >{children}</div>

            </main>

        </React.Fragment>
    );
}

export default Layout;
