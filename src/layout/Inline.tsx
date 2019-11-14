import styled from "styled-components"
import { resolveAlignItems, resolveItemSpace, resolveLineSpace } from "./PropertyResolver"
import { AlignItemProps, ItemSpaceProps, LineSpaceProps } from "./PropertyTypes"

export interface InlineProps extends AlignItemProps, ItemSpaceProps, LineSpaceProps {
}

const Inline = styled.div<InlineProps>`
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;    
    ${resolveItemSpace}
    ${resolveAlignItems}
    ${resolveLineSpace}
`

export default Inline