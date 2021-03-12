import {
    applyMiddleware,
    combineReducers,
    createStore
} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import auth from './auth/reducers'
import users from './users/reducers'
import notifications from './notifications/reducers'

const rootReducer = combineReducers({
    auth,
    users,
    notifications
})

export type RootState = ReturnType<typeof rootReducer>

const middleware = [thunk, logger]
export const store = createStore(rootReducer, applyMiddleware(...middleware))

export type AppDispatch = typeof store.dispatch
