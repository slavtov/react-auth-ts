import { AppDispatch } from '..'
import { http } from '../../helpers/api'
import { User } from '../auth/types'
import {
    FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    UsersActionTypes,
} from './types'

export const fetchUsersRequest = (): UsersActionTypes => ({
    type: FETCH_USERS_REQUEST
})

export const fetchUsersSuccess = (users: User[]): UsersActionTypes => ({
    type: FETCH_USERS_SUCCESS,
    payload: users
})

export const fetchUsersFailure = (error: { message: string }): UsersActionTypes => ({
    type: FETCH_USERS_FAILURE,
    payload: error.message
})

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    dispatch(fetchUsersRequest())

    try {
        const res = await http('GET', 'users')
        dispatch(fetchUsersSuccess(res))
    } catch (err) {
        dispatch(fetchUsersFailure(err))
    }
}
