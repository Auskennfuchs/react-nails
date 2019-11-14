import styled from 'styled-components'
import { resolveSpace, SpacingProps, BackgroundColorProps, resolveBackgroundColor } from './LayoutResolver'

interface RowProps extends SpacingProps, BackgroundColorProps {
}

const Row = styled.div<RowProps>`
    display: flex;
    flex-direction: row;
    ${resolveSpace}
    ${resolveBackgroundColor}
`

export default Row