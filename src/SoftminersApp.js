
import React from 'react'
import { AppRouter } from './components/routers/AppRouter';


//Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'


//Library creation
library.add(fas, fab);

export const SoftminersApp = () => {
    return (

        <AppRouter />
    )
}
