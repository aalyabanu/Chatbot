import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./output.css";
import Home from "./components/Home"
import Header from "./components/Header"


const App = () => (
    <>
<Header/>
    <div className="container">
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>

        </Router>

    </div>
</>
)
export default App;
