import { css } from "styled-components"
import { applyMediaQuery, applySingle } from "./MediaQuery"

export enum SpacingType {
    None = "none",
    XSmall = "xsmall",
    Small = "small",
    Medium = "medium",
    Large = "large",
}

export enum ItemAlignType {
    /**
     * aligns horizontally centered
     */
    Center = "center",    
    Top = "flex-start",
    Bottom = "flex-end",
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

export interface AlignItemProps {
    /**
     * align containing items
     */
    align?: ItemAlignType,
}

const resolveSpaceSingle = (space: SpacingType = SpacingType.None) => css`
    padding: ${p => p.theme.spaces[space]};
`
export const resolveSpace = applyMediaQuery(resolveSpaceSingle, 'space')

const resolveBackgroundColorSingle = (color: string = "unknown") => css`
    background-color: ${p => p.theme.colors[color] || p.theme.colors.unknown};
`
export const resolveBackgroundColor = applyMediaQuery(resolveBackgroundColorSingle, 'backgroundColor')

const resolveAlignItemsSingle = (align: ItemAlignType = ItemAlignType.Center) => css`
    align-items: ${align};
`

export const resolveAlignItems = applySingle(resolveAlignItemsSingle, 'align')