import React from 'react'
import {combineReducers, applyMiddleware} from 'redux'
import {connect, Provider} from 'react-redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

import settings_reducer  from '../example-settings/reducers.js'

import routes from './routes.js'
import {Container, DefaultScreen} from './Container.jsx'

export const init = (store) => {
}

export const reducer = combineReducers({
    settings:  settings_reducer,
    routing:   routerReducer,
})
export const middleware = applyMiddleware(
    thunkMiddleware,
    createLogger({collapsed: true})
)

export const App = ({store}) => (
    <Provider store={store}>
        <Router history={syncHistoryWithStore(browserHistory, store)}>
            <Route component={Container}>
                {routes.map(({path, component}, i) => <Route key={i} path={path} component={component}/>)}
                <Route path='*' component={DefaultScreen} />
            </Route>
        </Router>
    </Provider>
)
App.propTypes = {
    store: React.PropTypes.object,
}
