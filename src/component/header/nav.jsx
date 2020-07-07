import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../page/home'
import Login from '../page/login'
import Form from '../page/form'

export default function Nav() {
    return(
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Forside</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/form">Form</Link></li>
                </ul>
            </nav>
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/form" component={Form}></Route>
        </Router>
    )
}