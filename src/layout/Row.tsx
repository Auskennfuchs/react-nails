import styled, { css } from 'styled-components'
import { resolveSpace, resolveItemSpace, resolveAlignItems, resolveJustifyItems } from '../properties/PropertyResolver'
import { ItemJustifyType, SpacingProps, ItemSpaceProps, AlignItemProps, JustifyItemProp } from '../properties/PropertyTypes'

interface RowProps extends SpacingProps, ItemSpaceProps, AlignItemProps, JustifyItemProp {
}

const Row = styled.div<RowProps>`
    display: flex;
    flex-direction: row;
    width: 100%;
    ${resolveItemSpace}
    ${resolveSpace}
    ${resolveAlignItems}
    ${resolveJustifyItems}

    ${p => p.justify === ItemJustifyType.Stretch && css`
        & > * {
            flex: 1 1 auto;
        }
    `}
`

export default Row