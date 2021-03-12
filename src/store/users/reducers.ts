import {
    FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    UsersActionTypes,
    UsersState
} from './types'

const initialState: UsersState = {
    isLoading: true,
    error: '',
    users: []
}

const usersReducer = (state = initialState, action: UsersActionTypes): UsersState => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                isLoading: false,
                error: '',
                users: action.payload
            }
        case FETCH_USERS_FAILURE:
            return {
                isLoading: false,
                error: action.payload,
                users: []
            }
        default:
            return state
    }
}

export default usersReducer
