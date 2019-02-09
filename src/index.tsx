import 'bootstrap/dist/css/bootstrap.min.css';
import 'node_modules/react-metismenu/dist/react-metismenu-standart.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
