import 'bootstrap/dist/css/bootstrap.min.css'
// import $ from 'jquery'
// import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react'
import { Route } from 'react-router-dom'
import Login from './login/index'
import Dashboard from './dashboard/index'
import About from './about/index'

const App = () => (
  <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/about-us" component={About} />
  </div>
)

export default App
