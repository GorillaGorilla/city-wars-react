import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import reducers from '../../reducers';
import App from '../App';

// const defaultStore = {players: [], user: }
const history = createBrowserHistory();
export const sagaMiddleware = createSagaMiddleware();

const createStoreWMiddleware = compose(applyMiddleware(routerMiddleware(history), sagaMiddleware));
const store = createStore(connectRouter(history)(reducers), createStoreWMiddleware);
export const { dispatch } = store;
const Redux = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>);

export default Redux;
