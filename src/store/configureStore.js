import { createStore, applyMiddleware, compose } from 'redux';
import modules from 'store/modules';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger(); 

export default function configureStore() {
  const store = createStore(
    modules, /* preloadedState, */
    compose(
      applyMiddleware(
        ReduxThunk,
        logger
      ),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
   );
  return store;
}