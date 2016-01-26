import React from 'react'
import {Route,IndexRoute} from 'react-router'
import App from './common/containers/App'

//Redux smart
import Counter from './common/containers/CounterPage'
import Todo from './common/containers/TodoPage'
import Reddit from './common/containers/RedditPage'

//Redux Dumb
import HomePage from "./common/component/Home";
import About from "./common/component/About";
import Error404 from "./common/component/404";



export default (
    <Route name="app" path="/" component={App}>
        <Route path="home" component={HomePage} />
        <Route path="counter" component={Counter} />
        <Route path="about" component={About} />
        <Route path="todo" component={Todo} />
        <Route path="reddit" component={Reddit} />
        <Route path="*" component={Error404}/>
    </Route>
);