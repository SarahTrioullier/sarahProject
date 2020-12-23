import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import Header from "./component/header";
import reportWebVitals from './reportWebVitals';
import Footer from "./component/Footer";
import HeaderRouge from "./component/headerRouge";
import './fonts/Photograph Signature.ttf';
import './fonts/Impact Label.ttf';
import HeaderImpact from "./component/headerImpact";
import HeaderWithout from "./component/headerWithOutBand";
import HeaderWithoutRed from "./component/headerWithoutBandRed";
import Images from "./component/imageTest";
import HeaderImpactNew from "./component/headerImpactNew";
import HeaderHelvetica from "./component/headerHelvetica";
import HelveticaMenu from "./component/helveticaMenu";
const routing = (
    <Router>
      <div>
          <App/>
        <Switch>

            <Route exact path="/" component={App} />
            <Route path="/headerImpactNew">
                <HeaderImpactNew />
            </Route>
            <Route path="/headerHelvetica">
                <HeaderHelvetica />
            </Route>
          <Route exact path="/" component={App} />
            <Route path="/headerRouge">
                <HeaderRouge />
            </Route>
            <Route path="/headerJaune">
                <Header />
            </Route>
            <Route path="/headerImpact">
                <HeaderImpact />
            </Route>
            <Route path="/headerWithoutBand">
                <HeaderWithout />
                <App/>
            </Route>
            <Route path="/headerWithoutRed">
                <HeaderWithoutRed />
            </Route>
            <Route path="/helveticaMenu">
                <HelveticaMenu />
            </Route>



        </Switch>
<Images/>
        <Footer />
      </div>
    </Router>
);


ReactDOM.render(

  routing, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
