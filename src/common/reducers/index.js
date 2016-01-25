import {combineReducers} from 'redux'
import {routerStateReducer} from 'redux-router'
import {routeReducer } from 'redux-simple-router'

import layout from './layout'
import user from './user';
import counter from './counter'
import todos from './todo'

const rootReducer = combineReducers({
    layout:layout,
    router:routeReducer,
    user:user,
    counter:counter,
    todos:todos
})
export default rootReducer;