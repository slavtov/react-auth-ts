import {
    ADD_ERROR,
    ADD_NOTIFICATION,
    NotificationsActionTypes,
    REMOVE_ERROR,
    REMOVE_NOTIFICATION
} from './types'

export const addNotification = (message: string): NotificationsActionTypes => ({
    type: ADD_NOTIFICATION,
    payload: message
})

export const removeNotification = (): NotificationsActionTypes => ({
    type: REMOVE_NOTIFICATION
})

export const addError = (error: { message: string }): NotificationsActionTypes => ({
    type: ADD_ERROR,
    payload: error.message
})

export const removeError = (): NotificationsActionTypes => ({
    type: REMOVE_ERROR
})
