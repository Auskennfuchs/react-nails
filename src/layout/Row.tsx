import styled, { css } from 'styled-components'
import { applyMediaQuery } from './MediaQuery'

export enum SpacingType {
    Small = "small",
    Medium = "medium",
    Large = "large",
}

interface Spacing {
    /**
     * space set padding for inner elements to own border
     * [none, small, medium, large]
     */
    space?: SpacingType | SpacingType[]
}

const singleSpace = (space?: SpacingType) => css`
    ${space === SpacingType.Small && css`
        padding: 1em;
    `}
    ${space === SpacingType.Medium && css`
        padding: 1.5em;
    `}
`

const singleBackgroundColor = (color: string = "unknown") => css`
    background-color: ${p => p.theme.colors[color] || p.theme.palette[color]};
`

const space = applyMediaQuery(singleSpace, 'space')

const backgroundColor = applyMediaQuery(singleBackgroundColor, 'backgroundColor')

interface RowProps extends Spacing {
    /**
     * inline makes Row only as long as needed
     */
    inline?: boolean,
    /**
     * defines background color for element
     */
    backgroundColor?: string | string[],
}

export const Row = styled.div<RowProps>`
    display: ${ p => p.inline ? "inline-flex" : "flex"};
    ${space}
    ${backgroundColor}
`