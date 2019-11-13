import { css } from "styled-components"
import { applyMediaQuery } from "./MediaQuery";

export enum SpacingType {
    None = "none",
    Small = "small",
    Medium = "medium",
    Large = "large",
}

export interface SpacingProps {
    /**
     * space set padding for inner elements to own border
     * [none, small, medium, large]
     */
    space?: SpacingType | SpacingType[]
}

export interface BackgroundColorProps {
    /**
     * defines background color for element
     */
    backgroundColor?: string | string[],
}

const resolveSpaceSingle = (space: SpacingType = SpacingType.None) => css`
    padding: ${p => p.theme.spaces[space]};
`
export const resolveSpace = applyMediaQuery(resolveSpaceSingle, 'space')

const resolveBackgroundColorSingle = (color: string = "unknown") => css`
    background-color: ${p => p.theme.colors[color] || p.theme.colors.unknown};
`
export const resolveBackgroundColor = applyMediaQuery(resolveBackgroundColorSingle, 'backgroundColor')
