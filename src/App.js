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
                <MenuItem href="/headerRouge">Header Rouge</MenuItem>
                <MenuItem href="/headerImpact">Header Impact</MenuItem>
                <MenuItem href="/headerJaune">Header Jaune</MenuItem>
                <MenuItem href="/headerWithoutBand">Header Sans Bandeau Jaune</MenuItem>
                <MenuItem href="/headerWithoutRed">Header Sans Bandeau Rouge</MenuItem>
            </Menu>
        </Router>
    );
  }
}

export default App;
