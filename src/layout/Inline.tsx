import styled from "styled-components"
import { SpacingType, SpacingProps, resolveSpace } from "./LayoutResolver"

export interface InlineProps extends SpacingProps {
    space?: SpacingType | SpacingType[]
}

const Inline = styled.div<InlineProps>`
    ${resolveSpace}
`

export default Inline