import React, { Component } from 'react'
import './App.css'
import SimpleReactLightbox from "simple-react-lightbox";
import '@szhsin/react-menu/dist/index.css';
import GalleryMenu from "./component/GalleryMenu";

class App extends Component {
    render() {
        return (
            <SimpleReactLightbox>
                <div style={{height: '2em'}}></div>
                <GalleryMenu/>
            </SimpleReactLightbox>
        );
    }
}


export default App;
