import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullRoster from './FullRoster'
import Player from './Player'
import Portrait_Gallery from "./s_component/Portrait_Gallery";

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
   <Portrait_Gallery />
)


export default Roster