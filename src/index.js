import React from 'react';
import ReactDOM from 'react-dom';

import AppRoutes from './app/config/routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppRoutes />, document.getElementById('root'));
registerServiceWorker();
