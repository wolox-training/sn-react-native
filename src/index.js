import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import AppRoutes from './app/config/routes';

ReactDOM.render(<AppRoutes />, document.getElementById('root'));
registerServiceWorker();
