import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Card/>, document.getElementById('root'));
registerServiceWorker();
