import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from '../store'

export function useShallowEqualSelector<T>(selector: (state: RootState) => T) {
    return useSelector<RootState, T>(selector, shallowEqual)
}
