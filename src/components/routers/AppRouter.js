

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { NavBar } from '../ui/NavBar';


export const AppRouter = () => {
    return (
        <Router>
        <div>
            <NavBar />

            <Switch>
                <Route exact path="/"></Route>
                <Route exact path="/servicios"></Route>
                <Route exact path="/soluciones"></Route>
                <Route exact path="/clientes"></Route>
                <Route exact path="/recursos"></Route>
                <Route exact path="/contacto"></Route>

                <Redirect to="/"></Redirect>
            </Switch>

            {/* <Footer /> */}
        </div>
        </Router>
    )
}
