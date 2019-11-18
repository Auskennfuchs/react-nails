export enum SpacingType {
    None = "none",
    XSmall = "xsmall",
    Small = "small",
    Medium = "medium",
    Large = "large",
    XLarge = "xlarge",
    XXLarge = "xxlarge",
}

export enum TextSizeType {
    Small = "small",
    Normal = "normal",
    Large = "large",
    XLarge = "xlarge",

}

export enum TextWeightType {
    Normal = "normal",
    Bold = "bold",
    Bolder = "bolder",
    Light = "light",
    Lighter = "lighter",
}

export enum ItemAlignType {
    /**
     * aligns horizontally centered
     */
    Center = "center",
    Top = "flex-start",
    Bottom = "flex-end",
    Stretch = "stretch",
    Baseline = "baseline",
}

export enum ItemJustifyType {
    None = "normal",
    Stretch = "stretch",
    Evenly = "space-evenly",
    SpaceBetween = "space-between",
    SpaceAround = "space-around",
    Center = "center",
    Left = "flex-start",
    Right = "flex-end",
}

export enum BorderType {
    None = "none",
    Thin = "thin",
    Medium = "medium",
    Thick = "thick",
}

export enum TextAlignType {
    Left = "left",
    Center = "center",
    Right = "right",
}

export enum HeaderTextSizeType {
    Tiny = "tiny",
    Small = "small",
    Medium = "medium",
    Large = "large",
    Huge = "huge",
    Massive = "massive",
}

export interface BorderProps {
    /**
     * defines border size
     */
    border?: BorderType | BorderType[],
    borderColor?: string,
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
     * vertically align containing items      
     */
    align?: ItemAlignType,
}

export interface JustifyItemProp {
    /**
     * horizontally align containing items
     */
    justify?: ItemJustifyType,

}

export interface ItemSpaceProps {
    /**
     * gap between containing items
     */
    itemSpace?: SpacingType,
}

export interface LineSpaceProps {
    /**
     * vertical space between items
     */
    lineSpace?: SpacingType,

}

export interface TextColorProps {
    /**
     * text color
     * one of defined theme.colors
     */
    textColor?: string,
}

export interface TextSizeProps {
    /**
     * text size
     * [small, medium, large, xlarge]
     */
    textSize?: TextSizeType,
}

export interface TextWeightProps {
    /**
     * text style
     * [lighter, light, normal, bold, bolder]
     */
    textWeight?: TextWeightType,
}

export interface TextAlignProps {
    /**
     * text alignment
     * [left, center, right]
     */
    textAlign?: TextAlignType,
}