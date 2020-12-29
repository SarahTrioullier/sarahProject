import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from "./component/Footer";
import './fonts/Photograph Signature.ttf';
import './fonts/Impact Label.ttf';
import Images from "./component/imageTest";
import HelveticaMenu from "./component/helveticaMenu";
const routing = (
    <Router>
      <div>
<App/>
        <Switch>
            <Route path="/helveticaMenu">
                <HelveticaMenu />
            </Route>
        </Switch>
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
