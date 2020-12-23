import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import {Menu, MenuButton, MenuItem} from "@szhsin/react-menu";
import '@szhsin/react-menu/dist/index.css';
class App extends Component {
  render() {
    return (
        <Router>
            <Menu   menuButton={<MenuButton style={{marginRight: '6em'}} > ☰</MenuButton>}>
                <MenuItem href="/headerHelvetica">Header Helvetica</MenuItem>
                <MenuItem href="/headerImpactNew">Header Impact New</MenuItem>
                <MenuItem href=" /helveticaMenu">Header HelveticaMenu</MenuItem>

            </Menu>
        </Router>
    );
  }
}

export default App;
