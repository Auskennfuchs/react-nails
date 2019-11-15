import styled from "styled-components"
import { TextColorProps, TextSizeProps, TextWeightProps } from "../properties/PropertyTypes"
import { resolveTextColor, resolveTextSize, resolveTextWeight } from "../properties/PropertyResolver"

interface TextProps extends TextColorProps, TextSizeProps, TextWeightProps {
}

const Text = styled.span<TextProps>`
    ${resolveTextColor}
    ${resolveTextSize}
    ${resolveTextWeight}
`

export default Text