import { css } from 'styled-components'

export enum BreakPoint {
    Small = "small",
    Medium = "medium",
    Large = "large",
    XLarge = "xlarge",
    Wide = "wide",
}

type BreakPointType = {
    [name in BreakPoint]: {
        maxWidth?: number,
        minWidth?: number,
    }
}

export const breakPoints: BreakPointType = {
    [BreakPoint.Small]: { maxWidth: 767 },
    [BreakPoint.Medium]: { minWidth: 768, maxWidth: 991 },
    [BreakPoint.Large]: { minWidth: 992, maxWidth: 1199 },
    [BreakPoint.XLarge]: { minWidth: 1200, maxWidth: 1919 },
    [BreakPoint.Wide]: { minWidth: 1920 },
}

type MediaQueryType = {
    breakPoints: BreakPointType,
    IE11: (args: any) => any
}

const MediaQuery: MediaQueryType = {
    breakPoints,
    IE11: (...args) => css`
        @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
            ${css(...args)}
        }
    `,
}

Object.keys(breakPoints).forEach(k => {
    const bp: { maxWidth?: number, minWidth?: number } = breakPoints[k]
    MediaQuery[k] = (...rules: any): any => css`
        @media screen and ${bp.minWidth && `(min-width: ${bp.minWidth}px)`} ${bp.minWidth && bp.maxWidth && ` and `} ${bp.maxWidth && `(max-width: ${bp.maxWidth}px)`} {
            ${css`${rules}`}
        }
    `
})

export default MediaQuery