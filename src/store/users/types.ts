import { User } from '../auth/types'

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

export interface UsersState {
    isLoading: boolean
    error: string
    users: User[]
}

interface fetchUsersRequestAction {
    type: typeof FETCH_USERS_REQUEST
}

interface fetchUsersSuccessAction {
    type: typeof FETCH_USERS_SUCCESS
    payload: User[]
}

interface fetchUsersFailureAction {
    type: typeof FETCH_USERS_FAILURE
    payload: string
}

export type UsersActionTypes = fetchUsersRequestAction | fetchUsersSuccessAction | fetchUsersFailureAction
