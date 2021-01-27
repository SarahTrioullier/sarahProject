import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GalleryMenu from "./GalleryMenu";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={GalleryMenu}/>
        </Switch>
    </main>
)

export default Main