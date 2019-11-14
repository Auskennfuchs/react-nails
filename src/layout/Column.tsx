import styled from 'styled-components'
import { resolveSpace,  resolveLineSpace } from './PropertyResolver'
import { SpacingProps, LineSpaceProps } from './PropertyTypes'

interface ColumnProps extends SpacingProps, LineSpaceProps {
}

const Column = styled.div<ColumnProps>`
    display: flex;
    flex-direction: column;
    ${resolveSpace}
    ${resolveLineSpace}
`

export default Column