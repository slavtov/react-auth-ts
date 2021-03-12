import {
    AuthActionTypes,
    AuthState,
    AUTH_LOGIN_FAILURE,
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGOUT,
    AUTH_SIGNUP_FAILURE,
    AUTH_SIGNUP_REQUEST,
    AUTH_SIGNUP_SUCCESS
} from './types'

const initialState: AuthState = {
    isLoading: false,
    isLoggedIn: false,
    token: localStorage.getItem('token'),
    user: {
        _id: '',
        username: '',
        email: '',
        date: ''
    }
}

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
    switch (action.type) {
        case AUTH_SIGNUP_REQUEST:
        case AUTH_LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case AUTH_SIGNUP_SUCCESS:
        case AUTH_LOGIN_SUCCESS:
            return {
                isLoading: false,
                isLoggedIn: true,
                token: localStorage.setItem('token', action.payload.access_token),
                user: action.payload.user
            }
        case AUTH_SIGNUP_FAILURE:
        case AUTH_LOGIN_FAILURE:
            return {
                isLoading: false,
                isLoggedIn: false,
                token: localStorage.removeItem('token'),
                user: {
                    _id: '',
                    username: '',
                    email: '',
                    date: ''
                }
            }
        case AUTH_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                token: localStorage.removeItem('token'),
                user: {
                    _id: '',
                    username: '',
                    email: '',
                    date: ''
                }
            }
        default:
            return state
    }
}

export default authReducer
