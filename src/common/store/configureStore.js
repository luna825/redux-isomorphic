import {createStore,applyMiddleware,compose} from 'redux'
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import Devtools from '../containers/devtools';
import { syncHistory } from 'redux-simple-router'
import { browserHistory } from 'react-router'
import promiseMiddleware from '../api/promiseMiddleware';

const reduxRouterMiddleware = syncHistory(browserHistory)

const finalCreateStore = compose(
  applyMiddleware(thunk,reduxRouterMiddleware,promiseMiddleware),
  Devtools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&]+)\b/
    )
  )
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
}