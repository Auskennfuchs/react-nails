import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, library } from '@fortawesome/fontawesome-svg-core'

export type IconType = string | IconDefinition

export type ResolverFuncResult = {
    icon: IconType,
    element: any,
    [name: string]: any,
} | null

export type AddIconInput = {
    id: string | IconDefinition,
    resolver: IconResolverFunc,
    [name: string]: any,
}

export type IconResolverFunc = (id: string | IconDefinition, icon: AddIconInput) => ResolverFuncResult

export const resolverFuncs: { [name: string]: ResolverFuncResult } = {}

const fontAwesomeResolver: IconResolverFunc = (icon: IconDefinition): ResolverFuncResult => {
    library.add(icon)
    return {
        icon,
        element: FontAwesomeIcon,
    }
}

const isIconDefinition = (x: any): x is IconDefinition => {
    return x && !!(x as IconDefinition).iconName
}

const addIconResolver = (icon: AddIconInput) => {
    const { id, resolver } = icon
    if (isIconDefinition(id)) {
        resolverFuncs[id.iconName] = (resolver || fontAwesomeResolver)(id, icon)
    } else {
        resolverFuncs[id] = (resolver || fontAwesomeResolver)(id, icon)
    }
}

const addIconSingle = (icon: AddIconInput | IconDefinition): void => {
    if (isIconDefinition(icon)) {
        addIconResolver({ id: icon, resolver: fontAwesomeResolver })
    } else {
        addIconResolver(icon)
    }
}

export const addIcon = (icon: AddIconInput | IconDefinition | (AddIconInput | IconDefinition)[]) => {
    if (Array.isArray(icon)) {
        icon.forEach(i => {
            addIconSingle(i)
        })
    } else {
        addIconSingle(icon)
    }
}
