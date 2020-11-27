import styled from 'styled-components'
import { resolveSpace, resolveLineSpace, resolveJustifyItems, resolveAlignItems } from '../properties/PropertyResolver'
import { SpacingProps, LineSpaceProps, AlignItemProps, JustifyItemProps } from '../properties/PropertyTypes'

export interface ColumnProps extends SpacingProps, LineSpaceProps, AlignItemProps, JustifyItemProps {
}

const Column = styled.div<ColumnProps>`
    display: flex;
    flex-direction: column;
    ${resolveSpace}
    ${resolveAlignItems}
    ${resolveJustifyItems}
    ${resolveLineSpace}
`

export default Column