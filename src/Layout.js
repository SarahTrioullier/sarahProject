
import React from "react";
import HeaderImpactNew from "./component/headerImpactNew";

function Layout({ children }) {
    return (
        <React.Fragment>
            <HeaderImpactNew />
            <main >
                <div >
                    <div >{children}</div>
                </div>
            </main>
        </React.Fragment>
    );
}

export default Layout;