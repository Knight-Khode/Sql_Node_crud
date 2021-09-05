import React from 'react'
import "./App.css"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from "./components/layout/Navbar.js"

const App = () => {
  return (
    <Router>
      <Navbar/>
    </Router>
  )
}

export default App
