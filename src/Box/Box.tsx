import styled, { css } from "styled-components"
import {  resolveSpace, resolveBackgroundColor, applySingle, resolveBorder } from "../layout/PropertyResolver"
import { addThemeComponent } from "../theme"
import { SpacingProps, BackgroundColorProps, BorderProps } from "../layout/PropertyTypes";

addThemeComponent((theme: { borderRadius: string }) => (['box', {
    borderRadius: theme.borderRadius,
}]))

export interface BoxProps extends SpacingProps, BackgroundColorProps, BorderProps {
    /**
     * rounded border
     */
    rounded?: boolean,
    /**
     * inlines element
     */
    inline?: boolean
}

const resolveRoundedSingle = (rounded: boolean = false) => rounded ? css`
    border-radius: ${p => p.theme.box.borderRadius};
`: null

const resolveRounded = applySingle(resolveRoundedSingle, 'rounded')

const resolveInlineSingle = (inline: boolean = false) => inline ? css`
    display: inline-block;
`: null

const resolveInline = applySingle(resolveInlineSingle, 'inline')

const Box = styled.div<BoxProps>`
    ${resolveInline}
    ${resolveSpace}
    ${resolveBackgroundColor}
    ${resolveRounded}
    ${resolveBorder}
`

export default Box