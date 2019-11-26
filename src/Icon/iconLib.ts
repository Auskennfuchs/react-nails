import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, library } from '@fortawesome/fontawesome-svg-core'
export type IconType = string | Array<any> | IconDefinition

export type ResolverFuncResult = {
    icon: IconType,
    element: any
} | null

type ResolverFunc = (icon: string | IconDefinition) => ResolverFuncResult

export const resolverFuncs: { [name: string]: ResolverFuncResult } = {}

const fontAwesomeResolver: ResolverFunc = (icon: IconDefinition) => {
    library.add(icon)
    return {
        icon,
        element: FontAwesomeIcon,
    }
}

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
