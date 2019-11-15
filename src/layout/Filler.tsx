import styled, { css } from "styled-components"
import { applySingle } from "../properties/PropertyResolver"

interface FillerProps {
    stretchChild?: boolean,
}

const resolveStretchChildSingle = (stretchChild: boolean = false) => stretchChild ? css`
    display: flex;
    & > * {
        flex: 1 1 auto;        
    }
`: null

const resolveStretchChild = applySingle(resolveStretchChildSingle, 'stretchChild')

const Filler = styled.div<FillerProps>`
    flex: 1 1 auto;
    ${resolveStretchChild}
`

export default Filler