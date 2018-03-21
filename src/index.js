// Importando librerias
import React from 'react';  // Para la creación de componentes.
import ReactDOM from 'react-dom'; // Para la rendirazción de los componentes.

// Importando componentes
import Newsletter from './components/newsletter';

// utilidades
import registerServiceWorker from './registerServiceWorker';


const root = document.getElementById('root'); // Donde voy a renderizar mi aplicación

ReactDOM.render(<Newsletter />, root);
registerServiceWorker();
