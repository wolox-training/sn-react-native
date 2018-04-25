import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './app/screens/Home/index.js';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<HomeContainer />, document.getElementById('root'));
registerServiceWorker();
