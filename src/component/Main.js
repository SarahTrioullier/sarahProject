import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Roster from './Roster'
import Schedule from './Schedule'
import GalleryTravel from "./GalleryTravel";
import TravelMaroc from "./s_component/TravelMaroc";
import Fahrenheit from "./s_component/Fahrenheit";
import J1 from "./J1";
import JapDeux from "./JapDeux";
import JapTrois from "./JapTrois";
import Isc from "./Isc";
import Far from "./Far";
import Al from "./AL";
import Mar from "./Mar";
import Ad from "./Ad";
import AdAir from "./AdAir";
import Ya from "./Ya";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <Switch>
            <Route path='/roster' component={Roster}/>
            <Route path='/schedule' component={Schedule}/>
            <Route path='/galleryTravel' component={GalleryTravel}/>
            <Route path='/travelMaroc' component={TravelMaroc}/>
            <Route path='/japon' component={J1}/>
            <Route path='/japonDeux' component={JapDeux}/>
            <Route path='/japonTrois' component={JapTrois}/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/ischia' component={Isc}/>
            <Route exact path='/fareinheit' component={Far}/>
            <Route exact path='/alison' component={Al}/>
            <Route exact path='/portraitUntitled' component={Mar}/>
            <Route exact path='/adelaide' component={Ad}/>
            <Route exact path='/adelintheaire' component={AdAir}/>
            <Route exact path='/yamee' component={Ya}/>

        </Switch>
    </main>
)

export default Main