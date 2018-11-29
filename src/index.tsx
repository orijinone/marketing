import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Router from './Router'
import registerServiceWorker from './registerServiceWorker'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'

ReactDOM.render(
    <Router/>,
    document.getElementById('root')
);

registerServiceWorker()
