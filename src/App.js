import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./output.css";

import Home from "./components/Home"
import Dashboard from "./components/Dashboard";




const App = () => (

    <div className="container">
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/dashboard" component={Dashboard} />

            </Switch>

        </Router>

    </div>
 
)
export default App;
