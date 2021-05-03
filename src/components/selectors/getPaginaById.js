import {paginas} from '../data/paginas';

export const getPaginaById = ( id ) => {

    return paginas.find (pagina => pagina.id === id);
}