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

export enum SizeType {
    Tiny = "tiny",
    Small = "small",
    Medium = "medium",
    Large = "large",
    Huge = "huge",
    Massive = "massive",
}

export enum StatusType {
    Normal = "normal",
    Info = "info",
    Success = "success",
    Warning = "warning",
    Error = "error",
}

export interface NailsBaseType {
    children?: any,
    [name: string]: any,
}

export interface BorderProps extends NailsBaseType {
    /**
     * defines border size
     */
    border?: BorderType | BorderType[],
    borderColor?: string,
}

export interface SpacingProps extends NailsBaseType {
    /**
     * space set padding for inner elements to own border
     * [none, small, medium, large]
     */
    space?: SpacingType | SpacingType[]
}

export interface BackgroundColorProps extends NailsBaseType {
    /**
     * defines background color for element
     */
    backgroundColor?: string | string[],
}

export interface AlignItemProps extends NailsBaseType {
    /**
     * vertically align containing items      
     */
    align?: ItemAlignType,
}

export interface JustifyItemProp extends NailsBaseType {
    /**
     * horizontally align containing items
     */
    justify?: ItemJustifyType,

}

export interface ItemSpaceProps extends NailsBaseType {
    /**
     * gap between containing items
     */
    itemSpace?: SpacingType,
}

export interface LineSpaceProps extends NailsBaseType {
    /**
     * vertical space between items
     */
    lineSpace?: SpacingType,

}

export interface TextColorProps extends NailsBaseType {
    /**
     * text color
     * one of defined theme.colors
     */
    textColor?: string,
}

export interface TextSizeProps extends NailsBaseType {
    /**
     * text size
     * [small, medium, large, xlarge]
     */
    textSize?: TextSizeType,
}

export interface TextWeightProps extends NailsBaseType {
    /**
     * text style
     * [lighter, light, normal, bold, bolder]
     */
    textWeight?: TextWeightType,
}

export interface TextAlignProps extends NailsBaseType {
    /**
     * text alignment
     * [left, center, right]
     */
    textAlign?: TextAlignType,
}

export interface SizeProps extends NailsBaseType {
    /**
     * size of the element
     * [tiny, small, medium, large, huge, massive]
     */
    size?: SizeType,
}

export interface FluidProps extends NailsBaseType {
    /**
     * if set items tries to fill width of parent
     */
    fluid?: boolean,
}

export interface StatusProps extends NailsBaseType {
    /**
     * controls styling of component
     * [error, info, warning, success]
     */
    status?: StatusType
}

export interface RelativeProps extends NailsBaseType {
    /**
     * set Box to position:relative
     */
    relative?: boolean,
}