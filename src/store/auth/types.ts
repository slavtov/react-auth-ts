export const AUTH_SIGNUP_REQUEST = 'AUTH_SIGNUP_REQUEST'
export const AUTH_SIGNUP_SUCCESS = 'AUTH_SIGNUP_SUCCESS'
export const AUTH_SIGNUP_FAILURE = 'AUTH_SIGNUP_FAILURE'

export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST'
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS'
export const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE'

export const AUTH_LOGOUT = 'AUTH_LOGOUT'

export interface User {
    _id: string
    username: string
    email: string
    date: string
}

export interface AuthState {
    isLoading: boolean
    isLoggedIn: boolean
    token: string | null | void
    user: User
}

export interface SuccessPayload {
    user: User
    access_token: string
}

interface authSignupRequestAction {
    type: typeof AUTH_SIGNUP_REQUEST
}

interface authSignupSuccessAction {
    type: typeof AUTH_SIGNUP_SUCCESS
    payload: SuccessPayload
}

interface authSignupFailureAction {
    type: typeof AUTH_SIGNUP_FAILURE
}

interface authLoginRequestAction {
    type: typeof AUTH_LOGIN_REQUEST
}

interface authLoginSuccessAction {
    type: typeof AUTH_LOGIN_SUCCESS
    payload: SuccessPayload
}

interface authLoginFailureAction {
    type: typeof AUTH_LOGIN_FAILURE
}

interface authLogoutAction {
    type: typeof AUTH_LOGOUT
}

export type AuthActionTypes = authSignupRequestAction | authSignupSuccessAction | authSignupFailureAction | authLoginRequestAction | authLoginSuccessAction | authLoginFailureAction | authLogoutAction
