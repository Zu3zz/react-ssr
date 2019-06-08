import React from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/Home'
import Login from "./containers/Login"

export default (
  <div>
    <Route path='/' exact component={Home} />
    <Route path='/login' component={Login}/>
  </div>
)
