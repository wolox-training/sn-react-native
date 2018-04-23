import React from 'react';
import ReactDOM from 'react-dom';
import Home from './app/screens/Home/index.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
