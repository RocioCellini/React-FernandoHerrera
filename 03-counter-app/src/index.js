
// FC - Funtional Component

import React from 'react';
import ReactDom from 'react-dom';
import PrimeraApp from './PrimeraApp';

import './index.css';

const divRoot = document.querySelector('#root');

ReactDom.render( <PrimeraApp saludo="Hola Mundo" />, divRoot);
