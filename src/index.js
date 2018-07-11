import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import rootSaga from './sagas';
import Redux, { sagaMiddleware } from './components/redux/Redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(React.createElement(Redux), document.getElementById('root'));
sagaMiddleware.run(rootSaga);
registerServiceWorker();
