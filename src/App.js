import React from 'react'
import Home from './pages/Home'
import Contaduria from './pages/Contaduria'
import Finanzas from './pages/Finanzas'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// https://via.placeholder.com/300x150

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contaduria" component={Contaduria} />
        <Route path="/finanzas" component={Finanzas} />
      </Switch>
    </Router>
  )
}

export default App
