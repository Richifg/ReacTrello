import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import './icon-library';
import '../assets/favicon.ico';
import 'bootstrap/js/dist/modal';
import '../scss/main.scss';

render(<App />, document.getElementById('root'));
