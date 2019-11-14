import { css } from 'styled-components'

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