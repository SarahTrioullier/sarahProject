import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullRoster from './FullRoster'
import Player from './Player'
import Japon from "./s_component/Japon";
import Japon_NB from "./s_component/Japon_NB";

// The Roster component matches one of two different routes
// depending on the full pathname
const JapDeux = () => (
    <Japon_NB />
)


export default JapDeux