import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { removeError } from '../store/notifications/actions'

export function useError() {
    const error = useSelector((state: RootState) => state.notifications.error)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(removeError())
        }
    }, [dispatch])

    return error
}
