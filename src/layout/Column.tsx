import styled from 'styled-components'
import { resolveSpace,  resolveLineSpace } from '../properties/PropertyResolver'
import { SpacingProps, LineSpaceProps } from '../properties/PropertyTypes'

export interface ColumnProps extends SpacingProps, LineSpaceProps {
}

const Column = styled.div<ColumnProps>`
    display: flex;
    flex-direction: column;
    ${resolveSpace}
    ${resolveLineSpace}
`

export default Column