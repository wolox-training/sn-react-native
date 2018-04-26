import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './app/config/routes.js';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<AppRoutes />, document.getElementById('root'));
registerServiceWorker();
