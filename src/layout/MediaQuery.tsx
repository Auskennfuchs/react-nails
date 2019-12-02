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
    IE11: (strings: any, ...args: any) => any,
    [name: string]: any,
}

const MediaQuery: MediaQueryType = {
    breakPoints,
    IE11: (strings, ...args) => css`
        @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
            ${css(strings, args)}
        }
    `,
}

Object.keys(breakPoints).forEach(k => {
    const bp: { maxWidth?: number, minWidth?: number } = breakPoints[k]
    MediaQuery[k] = (strings: any, ...rules: any[]): any => css`
        @media screen and ${bp.minWidth && `(min-width: ${bp.minWidth}px)`} ${bp.minWidth && bp.maxWidth && ` and `} ${bp.maxWidth && `(max-width: ${bp.maxWidth}px)`} {
            ${css(strings, rules)}
        }
    `
    if (bp.minWidth) {
        MediaQuery[`${k}Min`] = (strings: any, ...rules: any[]): any => css`
            @media screen and (min-width: ${bp.minWidth}px) {
                ${css(strings, rules)}
            }
        `
    }

    if (bp.maxWidth) {
        MediaQuery[`${k}Max`] = (strings: any, ...rules: any[]): any => css`
            @media screen and (max-width: ${bp.maxWidth}px) {
                ${css(strings, rules)}
            }
        `
    }
    
    MediaQuery[`${k}IE11`] = (strings: any, ...rules: any[]): any => css`
        @media screen and ${bp.minWidth && `(min-width: ${bp.minWidth}px)`} ${bp.minWidth && bp.maxWidth && ` and `} ${bp.maxWidth && `(max-width: ${bp.maxWidth}px)`} and (-ms-high-contrast: active) and (-ms-high-contrast:none) {
            ${css(strings, rules)}
        }
    `
})

export default MediaQuery