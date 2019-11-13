import * as React from 'react'
import { useContext, useState, useEffect } from 'react'
import ResponsiveContext from './ResponsiveContext'
import { breakPoints } from '../layout/MediaQuery'

interface ResponsiveInput {
    as: React.ReactType<any>,
    minWidth: number,
    maxWidth: number,
    children?: React.ReactNode,
    onShow: () => any,
    onHide: () => any,
}

const Responsive = ({ as = 'div', children, minWidth = 0, maxWidth = 99999, onShow = () => { }, onHide = () => { } }: ResponsiveInput) => {
    const dimension = useContext(ResponsiveContext)
    const [show, setShow] = useState(false)

    useEffect(() => {
        const shouldDisplay = ({ width }: { width: number }) => width >= minWidth && width <= maxWidth
        setShow(shouldDisplay(dimension))
        return () => {
            const newShow = shouldDisplay(dimension)
            if (!newShow && show !== newShow) {
                onHide()
            }
            if (newShow && show !== newShow) {
                onShow()
            }
            setShow(newShow)
        }
    }, [dimension, minWidth, maxWidth, onHide, onShow, show])

    const Element: React.ReactType<any> = as
    return show ? (
        <Element>
            {children}
        </Element>
    ) : null
}

export default Object.assign(Responsive, breakPoints)