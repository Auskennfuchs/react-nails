import { css } from 'styled-components'
import { times } from 'lodash'

export enum BreakPoint {
    Small = "small",
    Medium = "medium",
    Large = "large",
    XLarge = "xlarge",
    Wide = "wide",
}

export const breakPoints = {
    Small: { maxWidth: 767 },
    Medium: { minWidth: 768, maxWidth: 991 },
    Large: { minWidth: 992, maxWidth: 1199 },
    XLarge: { minWidth: 1200, maxWidth: 1919 },
    Wide: { minWidth: 1920 },
}

export type MediaQueryFunc = (value?: any, props?: any) => any

export const applyMediaQuery = (func: MediaQueryFunc, propName: string, discardNull: boolean = true): any => (props: any) => {
    const mediaBreakPoints: string[] = Object.keys(BreakPoint)
    const propObject: any = props[propName]
    if (discardNull && !propObject) {
        return null
    }
    if (Array.isArray(propObject)) {
        if (propObject.length > 0 && propObject.length < mediaBreakPoints.length) {
            const lastValue: any = propObject[propObject.length - 1]
            times(mediaBreakPoints.length - propObject.length, () => propObject.push(lastValue))
        }
        return propObject.reduce<any>((res, s, idx): any => css`
                ${res}
                ${MediaQuery[mediaBreakPoints[idx]]`
                    ${func(s, props)}
                `}
            `, undefined)
    }
    return func(propObject, props)
}

export const applySingle = (func: MediaQueryFunc, propName: string, discardNull: boolean = true): any => (props: any) => {
    const propObject: any = props[propName]
    if (discardNull && !propObject) {
        return null
    }
    return func(propObject, props)
}

const MediaQuery = {
    breakPoints,
}

Object.keys(breakPoints).forEach(k => {
    const bp: { maxWidth?: number, minWidth?: number } = breakPoints[k]
    MediaQuery[k] = (...rules: any[]): any => css`
        @media screen and ${bp.minWidth && `(min-width: ${bp.minWidth}px)`} ${bp.minWidth && bp.maxWidth && ` and `} ${bp.maxWidth && `(max-width: ${bp.maxWidth}px)`} {
            ${css`${rules}`}
        }
    `
})

export default MediaQuery