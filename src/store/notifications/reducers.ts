import {
    ADD_ERROR,
    ADD_NOTIFICATION,
    NotificationsActionTypes,
    NotificationsState,
    REMOVE_ERROR,
    REMOVE_NOTIFICATION
} from './types'

const initialState: NotificationsState = {
    message: '',
    error: ''
}

const notificationsReducer = (state = initialState, action: NotificationsActionTypes): NotificationsState => {
    switch (action.type) {
        case ADD_NOTIFICATION:
            return {
                ...state,
                message: action.payload
            }
        case REMOVE_NOTIFICATION:
            return {
                ...state,
                message: ''
            }
        case ADD_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case REMOVE_ERROR:
            return {
                ...state,
                error: ''
            }
        default:
            return state
    }
}

export default notificationsReducer
