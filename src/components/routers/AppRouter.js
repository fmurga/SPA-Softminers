

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
import { ServicesScreen } from '../ServiciosScreen/ServicesScreen';
import { SolutionsIbmScreen } from '../SolutionsIbmScreen';
import { SolutionsScreen } from '../SolutionsScreen';
import { Footer } from '../ui/Footer';

import { NavBar } from '../ui/NavBar';


export const AppRouter = () => {
    return (
        <Router>

                <NavBar />

            <div>
                

                    <Switch>
                        <Route exact path="/" component={HomeScreen}></Route>
                        <Route exact path="/servicios" component={ServicesScreen}></Route>
                        <Route exact path="/soluciones" component={SolutionsScreen}></Route>
                        <Route exact path="/soluciones/soluciones-sap" component={SolutionsScreen}></Route>
                        <Route exact path="/soluciones/soluciones-ibm" component={SolutionsIbmScreen}></Route>
                        <Route exact path="/soluciones/soluciones-softexpert" component={SolutionsScreen}></Route>
                        <Route exact path="/clientes" component={ClientsScreen}></Route>
                        <Route exact path="/recursos" component={ResourcesScreen}></Route>
                        <Route exact path="/nosotros" component={AboutScreen}></Route>
                        <Route exact path="/contacto" component={ContactSceen}></Route>

                        <Redirect to="/"></Redirect>
                    </Switch>

                
            </div>
            <Footer />
        </Router>
    )
}
