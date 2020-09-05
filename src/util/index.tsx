import { useRef, useEffect, EffectCallback, DependencyList } from 'react'

export const useEffectExceptOnMount = (effect: EffectCallback, dependencies?: DependencyList) => {
    const mounted = useRef(false);
    useEffect(() => {
        if (mounted.current) {
            const unmount = effect()
            return () => unmount && unmount()
        } else {
            mounted.current = true
            return () => { }
        }
    }, dependencies);

    // Reset on unmount for the next mount.
    useEffect(() => {
        return () => {
            mounted.current = false
        }
    }, []);
}