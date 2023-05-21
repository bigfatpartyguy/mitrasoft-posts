import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {postsReducer} from './posts';
import withProvider from './withProvider';

const rootReducer = combineReducers({
  postsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// sagaMiddleware.run();

export default withProvider({store, Provider});
