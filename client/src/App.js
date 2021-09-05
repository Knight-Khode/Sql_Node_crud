import React from 'react'
import "./App.css"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from "./components/layout/Navbar.js"
import SignUp from "./components/pages/SignUp.js"
import Login from "./components/pages/Login.js"

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/register" component={SignUp}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </Router>
  )
}

export default App
