import styled, { css } from "styled-components"
import { SpacingProps, BackgroundColorProps, resolveSpace, resolveBackgroundColor } from "../layout/LayoutResolver"
import { addThemeComponent } from "../theme";
import { applySingle } from "../layout/MediaQuery";

addThemeComponent((theme: { borderRadius: string }) => (['box', {
    borderRadius: theme.borderRadius,
}]))

export interface BoxProps extends SpacingProps, BackgroundColorProps {
    rounded?: boolean,
}

const resolveRoundedSingle = (rounded: boolean = false) => rounded ? css`
    border-radius: ${p => p.theme.box.borderRadius};
`: null

const resolveRounded = applySingle(resolveRoundedSingle, 'rounded')

const Box = styled.div<BoxProps>`
    display: inline-block;
    ${resolveSpace}
    ${resolveBackgroundColor}
    ${resolveRounded}
`

export default Box