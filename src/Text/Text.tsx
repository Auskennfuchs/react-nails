import styled from "styled-components"
import { TextColorProps } from "../properties/PropertyTypes"
import { resolveTextColor } from "../properties/PropertyResolver"

interface TextProps extends TextColorProps {
}

const Text = styled.span<TextProps>`
    ${resolveTextColor}
`

export default Text