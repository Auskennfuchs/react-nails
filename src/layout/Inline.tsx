import styled, { css } from "styled-components"
import { SpacingType, SpacingProps, resolveAlignItems, AlignItemProps } from "./LayoutResolver"
import { applyMediaQuery } from "./MediaQuery"

export interface InlineProps extends SpacingProps, AlignItemProps {
    lineSpace?: SpacingType
}

const resolveSpaceSingle = (space: SpacingType = SpacingType.None) => css`
    & > * {
        margin-right: ${p => p.theme.spaces[space]};
        &:last-child {
            margin-right: 0;
        }
    }
`
const resolveSpace = applyMediaQuery(resolveSpaceSingle, 'space')

const resolveLineSpaceSingle = (lineSpace: SpacingType = SpacingType.None) => css`
    margin-bottom: -${p => p.theme.spaces[lineSpace]};

    & > * {
        margin-bottom: ${p => p.theme.spaces[lineSpace]};
    }
`

const resolveLineSpace = applyMediaQuery(resolveLineSpaceSingle, 'lineSpace')

const Inline = styled.div<InlineProps>`
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;    
    ${resolveSpace}
    ${resolveAlignItems}
    ${resolveLineSpace}
`

export default Inline