import styled, { css } from "styled-components"
import { applySingle, resolveAlignItems } from "../properties/PropertyResolver"
import { AlignItemProps } from "../properties/PropertyTypes"

interface FillerProps extends AlignItemProps {
    stretchChild?: boolean,
    fillParent?: boolean,
}

const resolveStretchChildSingle = (stretchChild: boolean = false) => stretchChild && css`
    & > * {
        flex: 1 1 auto;
        max-width: 100%;
        width: 100%;
    }
`
const resolveStretchChild = applySingle(resolveStretchChildSingle, 'stretchChild')

const Filler = styled.div<FillerProps>`
    display: flex;
    flex: 1 1 auto;
    ${resolveAlignItems}
    ${resolveStretchChild}
`

export default Filler