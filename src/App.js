import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import Home from './pages/home'
import NotFound from './pages/404'

function App () {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  )
};

export default App
