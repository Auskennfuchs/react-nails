import { css } from 'styled-components'

const breakPoints = {
    Small: { maxWidth: 767 },
    Medium: { minWidth: 768, maxWidth: 1023 },
    Large: { minWidth: 1024 },
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