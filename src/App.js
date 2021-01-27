import React, { Component } from 'react'
import './App.css'
import SimpleReactLightbox from "simple-react-lightbox";
import '@szhsin/react-menu/dist/index.css';
import GalleryMenu from "./component/GalleryMenu";
import Main from "./component/Main";

class App extends Component {
    render() {
        return (
            <div>
                <Main />
            </div>
        );
    }
}


export default App;
