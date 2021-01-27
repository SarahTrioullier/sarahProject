import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Roster from './Roster'
import Schedule from './Schedule'
import GalleryTravel from "./GalleryTravel";
import TravelMaroc from "./s_component/TravelMaroc";
import Fahrenheit from "./s_component/Fahrenheit";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/roster' component={Roster}/>
            <Route path='/schedule' component={Schedule}/>
            <Route path='/galleryTravel' component={GalleryTravel}/>
            <Route path='/travelMaroc' component={TravelMaroc}/>



        </Switch>
    </main>
)

export default Main