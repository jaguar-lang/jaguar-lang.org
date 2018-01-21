import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as sw from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
sw.unregister();
