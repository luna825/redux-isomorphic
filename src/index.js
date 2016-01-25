import './css/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router'
import routes from './routes'
import { browserHistory } from 'react-router'
import {Provider} from 'react-redux'
import configureStore from './common/store/configureStore'
import Devtools from './common/containers/devtools'

import { syncHistory, routeReducer } from 'redux-simple-router'


const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
    <div>
        <Router history={browserHistory}>
            {routes}
        </Router>
        <Devtools/>
    </div>
    </Provider>,
    document.getElementById('app')

)