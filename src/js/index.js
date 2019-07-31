import React from 'react';
import ReactDOM from 'react-dom';
import AppProvider from './components/AppProvider';
import './icon-library';
import 'bootstrap/js/dist/modal';
import '../scss/main.scss';

// Bootstrap
ReactDOM.render(<AppProvider />, document.getElementById('root'));
