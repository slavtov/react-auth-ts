import { AppDispatch } from '..'
import { http } from '../../helpers/api'
import {
    addError,
    addNotification,
    removeError
} from '../notifications/actions'
import {
    AuthActionTypes,
    AUTH_LOGIN_FAILURE,
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGOUT,
    AUTH_SIGNUP_FAILURE,
    AUTH_SIGNUP_REQUEST,
    AUTH_SIGNUP_SUCCESS,
    SuccessPayload
} from './types'

export const authSignupRequest = (): AuthActionTypes => ({
    type: AUTH_SIGNUP_REQUEST
})

export const authSignupSuccess = (user: SuccessPayload): AuthActionTypes => ({
    type: AUTH_SIGNUP_SUCCESS,
    payload: user
})

export const authSignupFailure = (): AuthActionTypes => ({
    type: AUTH_SIGNUP_FAILURE
})

export const authLoginRequest = (): AuthActionTypes => ({
    type: AUTH_LOGIN_REQUEST
})

export const authLoginSuccess = (user: SuccessPayload): AuthActionTypes => ({
    type: AUTH_LOGIN_SUCCESS,
    payload: user
})

export const authLoginFailure = (): AuthActionTypes => ({
    type: AUTH_LOGIN_FAILURE
})

export const authLogout = (): AuthActionTypes => ({
    type: AUTH_LOGOUT
})

export const fetchSignup = (username: string, email: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(authSignupRequest())

    try {
        const res = await http('POST', 'auth/register', {
            username,
            email,
            password
        })

        dispatch(removeError())
        dispatch(authSignupSuccess(res))
        dispatch(addNotification('You\'re registered successfully'))
    } catch (err) {
        dispatch(addError(err))
        dispatch(authSignupFailure())
    }
}

export const fetchLogin = (email: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(authLoginRequest())

    try {
        const res = await http('POST', 'auth/login', {
            email,
            password
        })

        dispatch(removeError())
        dispatch(authLoginSuccess(res))
    } catch (err) {
        dispatch(addError(err))
        dispatch(authLoginFailure())
    }
}
