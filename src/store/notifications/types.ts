export const ADD_NOTIFICATION = 'ADD_NOTIFICATION'
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'

export const ADD_ERROR = 'ADD_ERROR'
export const REMOVE_ERROR = 'REMOVE_ERROR'

export interface NotificationsState {
    message: string
    error: string
}

interface addNotificationAction {
    type: typeof ADD_NOTIFICATION
    payload: string
}

interface removeNotificationAction {
    type: typeof REMOVE_NOTIFICATION
}

interface addErrorAction {
    type: typeof ADD_ERROR
    payload: string
}

interface removeErrorAction {
    type: typeof REMOVE_ERROR
}

export type NotificationsActionTypes = addNotificationAction | removeNotificationAction | addErrorAction | removeErrorAction
