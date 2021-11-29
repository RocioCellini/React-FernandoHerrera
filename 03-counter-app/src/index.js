import React from 'react';
import ReactDom from 'react-dom';

const saludo = <h1>Hola Mundo</h1>;

const divRoot = document.querySelector('#root');

ReactDom.render(saludo, divRoot);
