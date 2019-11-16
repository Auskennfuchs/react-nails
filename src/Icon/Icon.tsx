import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import styled from 'styled-components';
import { StyleHelper } from '../Style';

const resolverFuncs = {}

export type IconType = string | Array<any> | IconDefinition

type ResolverFuncResult = {
    icon: IconType,
    element: any
} | null

type ResolverFunc = (icon: string | IconDefinition) => ResolverFuncResult

const fontAwesomeResolver: ResolverFunc = (icon: IconDefinition) => ({
    icon,
    element: FontAwesomeIcon,
})

const isIconDefinition = (x: any): x is IconDefinition => {
    return x && !!(x as IconDefinition).iconName
}

type AddIconInput = {
    id: string | IconDefinition,
    resolver: ResolverFunc
}

const addIconSingle = ({ id, resolver }: AddIconInput) => {
    if (isIconDefinition(id)) {
        resolverFuncs[id.iconName] = (resolver || fontAwesomeResolver)(id)
    } else {
        resolverFuncs[id] = (resolver || fontAwesomeResolver)(id)
    }
}

export const addIcon = (icon: AddIconInput | AddIconInput[]) => {
    if (Array.isArray(icon)) {
        icon.forEach(i => {
            if (isIconDefinition(i)) {
                addIconSingle({ id: i, resolver: fontAwesomeResolver })
            } else {
                addIconSingle(i)
            }
        })
    } else {
        addIconSingle(icon)
    }
}

const NotFoundIcon = styled.div`
    display: inline-block;
    width: 1em;
    height: 1em;
    background: #f0f;    
    position: relative;
    &:after {
        content: '?';
        color: #fff;
        ${StyleHelper.centerAbsolute}
    }
`

const Icon = ({ icon, ...rest }: { icon: string }) => {
    const convertIcon = (iconName: string): ResolverFuncResult => {
        if (resolverFuncs[iconName]) {
            return resolverFuncs[iconName]
        }
        console.error(`icon with name ${iconName} not found`)
        return null
    }
    const foundIcon: ResolverFuncResult = convertIcon(icon)
    if (foundIcon) {
        const IconElement: any = foundIcon.element
        return (
            <IconElement icon={foundIcon.icon} {...rest} />
        )
    }
    return <NotFoundIcon />
}

export default Icon