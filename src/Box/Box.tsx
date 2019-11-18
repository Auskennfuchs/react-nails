import styled, { css } from "styled-components"
import { resolveSpace, resolveBackgroundColor, applySingle, resolveBorder, resolveTextColor, resolveTextAlign } from "../properties/PropertyResolver"
import { addThemeComponent } from "../theme"
import { SpacingProps, BackgroundColorProps, BorderProps, TextColorProps, TextAlignProps } from "../properties/PropertyTypes";

addThemeComponent((theme: { borderRadius: string }) => (['box', {
    borderRadius: theme.borderRadius,
}]))


export interface BoxProps extends SpacingProps, BackgroundColorProps, BorderProps, TextColorProps, TextAlignProps {
    /**
     * rounded border
     */
    rounded?: boolean,

    /**
     * inlines element
     */
    inline?: boolean,

    /**
     * sets display mode flex for element
     */
    flex?: boolean,

    /**
     * expand the element to 100% of height and width
     */
    stretch?: boolean,
}

const resolveRoundedSingle = (rounded: boolean = false) => rounded && css`
    border-radius: ${p => p.theme.box.borderRadius};
`
const resolveRounded = applySingle(resolveRoundedSingle, 'rounded')

const resolveInlineSingle = (inline: boolean = false) => inline && css`
    display: inline-block;
`
const resolveInline = applySingle(resolveInlineSingle, 'inline')

const resolveFlexSingle = (flex: boolean = false) => flex && css`
    display: flex;
`
const resolveFlex = applySingle(resolveFlexSingle, 'flex')

const resolveStretchSingle = (stretch: boolean = false) => stretch && css`
    width: 100%;
    height: 100%;
`
const resolveStretch = applySingle(resolveStretchSingle, 'stretch')

const Box = styled.div<BoxProps>`
    overflow: hidden;
    ${resolveInline}
    ${resolveFlex}
    ${resolveSpace}
    ${resolveBackgroundColor}
    ${resolveRounded}
    ${resolveBorder}
    ${resolveTextColor}
    ${resolveTextAlign}
    ${resolveStretch}
`

export default Box