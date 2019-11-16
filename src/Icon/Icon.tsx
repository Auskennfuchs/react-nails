import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const resolverFuncs = {}

interface ResolverFunc {
    icon: string | Array<any> | IconProp,
    element: any
}

export const addIconResolver = (id: string, func: ResolverFunc) => {
    resolverFuncs[id] = func
}

const Icon = ({ icon, ...rest }: { icon: string }) => {
    const convertIcon = (iconName: string): ResolverFunc => {
        if (resolverFuncs[iconName]) {
            return resolverFuncs[iconName]
        }
        return {
            icon: iconName,
            element: FontAwesomeIcon
        }
    }
    const foundIcon: ResolverFunc = convertIcon(icon)
    const IconElement: any = foundIcon.element
    return (
        <IconElement icon={foundIcon.icon} {...rest} />
    )
}

export default Icon