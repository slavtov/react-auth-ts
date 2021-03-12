import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { removeNotification } from '../store/notifications/actions'

export function useNotification() {
    const message = useSelector((state: RootState) => state.notifications.message)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(removeNotification())
        }
    }, [dispatch])

    return message
}
