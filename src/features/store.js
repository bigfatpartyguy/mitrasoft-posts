import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import posts from './posts';
import comments from './comments';
import user from './user';
import rootSaga from './rootSaga';
import withProvider from './withProvider';

const rootReducer = combineReducers({
  posts,
  comments,
  user,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

// sagaMiddleware.run();

export default withProvider({store, Provider});
