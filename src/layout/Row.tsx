import styled from 'styled-components'
import { resolveSpace, SpacingProps, BackgroundColorProps, resolveBackgroundColor } from './LayoutResolver'

interface RowProps extends SpacingProps, BackgroundColorProps {
    /**
     * inline makes Row only as long as needed
     */
    inline?: boolean,
}

export const Row = styled.div<RowProps>`
    display: ${ p => p.inline ? "inline-flex" : "flex"};
    ${resolveSpace}
    ${resolveBackgroundColor}
`