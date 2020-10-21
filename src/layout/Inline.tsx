import styled from 'styled-components'
import { resolveAlignItems, resolveItemSpace, resolveLineSpace } from 'properties/PropertyResolver'
import { Types } from 'properties'

export type InlineProps = {
    hideContent?: boolean,    
} & Types.AlignItemProps & Types.ItemSpaceProps & Types.LineSpaceProps

const Inline = styled.div<InlineProps>`
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    ${resolveItemSpace}
    ${resolveAlignItems}
    ${resolveLineSpace}
`

export default Inline