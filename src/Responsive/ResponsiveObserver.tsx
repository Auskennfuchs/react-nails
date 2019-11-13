import * as React from 'react'
import { useState, useEffect, ReactNode } from 'react'
import { throttle } from 'lodash'
import ResponsiveContext from './ResponsiveContext'

const ResponsiveObserver = ({ children }: { children?: ReactNode }) => {
    const [dimension, setDimension] = useState({ width: window.innerWidth, height: window.innerHeight })

    useEffect(() => {
        const onChangeWindowSize = throttle(() => {
            const { innerWidth, innerHeight } = window
            setDimension({ width: innerWidth, height: innerHeight })
        }, 100)
        window.addEventListener('resize', onChangeWindowSize)
        onChangeWindowSize()
        return () => {
            window.removeEventListener('resize', onChangeWindowSize)
        };
    }, [])

    return (
        <ResponsiveContext.Provider value={dimension}>
            {children}
        </ResponsiveContext.Provider>
    )
}

export default ResponsiveObserver