

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
import { SolutionsIbmScreen } from '../Soluciones/SolutionsIbmScreen';
import { SolutionsSoftexpertScreen } from '../Soluciones/SolutionsSoftexpertScreen';
import { SolutionsSapScreen } from '../Soluciones/SolutionsSapScreen';
import { SolutionsScreen } from '../Soluciones/SolutionsScreen';

import { Footer } from '../ui/Footer';
import { NavBar } from '../ui/NavBar';



export const AppRouter = () => {
    return (
        <Router>

            <NavBar />
                
            <div>
                

                    <Switch>
                        <Route exact path="/" component={HomeScreen}></Route>
                        <Redirect from="/index.html" to="/" />

                        <Route exact path="/servicios" component={ServicesScreen}></Route>
                        <Redirect from="/servicios.html" to="/servicios"></Redirect>
                        
                        <Route exact path="/soluciones" component={SolutionsScreen}></Route>
                        <Redirect from="/soluciones.html" to="/soluciones"></Redirect>

                        <Route exact path="/soluciones/soluciones-sap" component={SolutionsSapScreen}></Route>
                        <Redirect from="/soluciones-sap.html" to="/soluciones/soluciones-sap"></Redirect>

                        <Route exact path="/soluciones/soluciones-ibm" component={SolutionsIbmScreen}></Route>
                        <Redirect from="/soluciones-ibm.html" to="/soluciones/soluciones-ibm" ></Redirect>

                        <Route exact path="/soluciones/soluciones-softexpert" component={SolutionsSoftexpertScreen}></Route>
                        <Redirect from="/soluciones-softexpert.html" to="/soluciones/soluciones-softexpert" ></Redirect>

                        <Route exact path="/soluciones/soluciones-softland" component={SolutionsSoftexpertScreen}></Route>

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
