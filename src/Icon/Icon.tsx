import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import styled from 'styled-components'
import { StyleHelper } from '../Style'
import { TextColorProps } from '../properties/PropertyTypes'
import { resolveTextColor } from '../properties/PropertyResolver'

export type IconType = string | Array<any> | IconDefinition

type ResolverFuncResult = {
    icon: IconType,
    element: any
} | null

type ResolverFunc = (icon: string | IconDefinition) => ResolverFuncResult

const resolverFuncs: { [name: string]: ResolverFuncResult } = {}

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

const addIconResolver = ({ id, resolver }: AddIconInput) => {
    if (isIconDefinition(id)) {
        resolverFuncs[id.iconName] = (resolver || fontAwesomeResolver)(id)
    } else {
        resolverFuncs[id] = (resolver || fontAwesomeResolver)(id)
    }
}

const addIconSingle = (icon: AddIconInput): void => {
    if (isIconDefinition(icon)) {
        addIconResolver({ id: icon, resolver: fontAwesomeResolver })
    } else {
        addIconResolver(icon)
    }
}

export const addIcon = (icon: AddIconInput | AddIconInput[]) => {
    if (Array.isArray(icon)) {
        icon.forEach(i => {
            addIconSingle(i)
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

const IconWrapper = styled.i<TextColorProps>`
    ${resolveTextColor}
`

type IconProps = {
    icon: string,
    color?: string
}

const Icon = ({ icon, color, ...rest }: IconProps) => {
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
            <IconWrapper textColor={color}>
                <IconElement icon={foundIcon.icon} {...rest} />
            </IconWrapper>
        )
    }
    return <NotFoundIcon />
}

export default Icon