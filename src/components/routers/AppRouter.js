

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { AboutScreen } from '../AboutScreen';
import { ClientsScreen } from '../ClientsScreen';
import { ContactSceen } from '../ContactSceen';
import { HomeScreen } from '../HomeScreen';
import { ResourcesScreen } from '../ResourcesScreen';
import { ServicesScreen } from '../ServicesScreen';
import { SolutionsScreen } from '../SolutionsScreen';
import { NavBar } from '../ui/NavBar';


export const AppRouter = () => {
    return (
        <Router>
        <div>
            <NavBar />

            <Switch>
                <Route path="/" component={HomeScreen}></Route>
                <Route exact path="/servicios" component={ServicesScreen}></Route>
                <Route exact path="/soluciones" component={SolutionsScreen}></Route>
                <Route exact path="/clientes" component={ClientsScreen}></Route>
                <Route exact path="/recursos" component={ResourcesScreen}></Route>
                <Route exact path="/nosotros" component={AboutScreen}></Route>
                <Route exact path="/contacto" component={ContactSceen}></Route>

                <Redirect to="/"></Redirect>
            </Switch>

            {/* <Footer /> */}
        </div>
        </Router>
    )
}
