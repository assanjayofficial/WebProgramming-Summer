import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Login from '../../Login/index'
  import Dashboard from '../../Login/Dashboard';
  import About from '../../Login/About';

const Routes = () => {
    return (
        <Router>
            <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route exact path="/">
                <Dashboard/>
            </Route>
            <Route path="/About">
                <About/>
            </Route>
        </Switch>
        </Router>
    )
}

export default Routes
