import * as React from 'react'
import { ReactNode } from "react"
import styled, { css } from "styled-components"
import { TextColorProps, TextAlignProps } from "../properties/PropertyTypes"
import { resolveTextColor, applySingle, resolveTextAlign } from '../properties/PropertyResolver'

export enum HeaderTextSizeType {
    Tiny = "tiny",
    Small = "small",
    Medium = "medium",
    Large = "large",
    Huge = "huge",
    Massive = "massive",
}

interface HeaderTextProps extends TextColorProps, TextAlignProps {
    /**
     * text size
     * [tiny, small, medium, large, huge, massive]
     */
    size?: HeaderTextSizeType,
}

const resolveHeaderTextSizeSingle = (size: HeaderTextSizeType = HeaderTextSizeType.Medium) => css`font-size: ${p => p.theme.headerSizes[size]};`
const resolveHeaderTextSize = applySingle(resolveHeaderTextSizeSingle, 'size')

const resolveNoMarginSingle = (noMargin: boolean = false) => noMargin && css`margin: 0;`
const resolveNoMargin = applySingle(resolveNoMarginSingle, 'noMargin')

const resolveNoMarginBottomSingle = (noMargin: boolean = false) => noMargin && css`margin-bottom: 0;`
const resolveNoMarginBottom = applySingle(resolveNoMarginBottomSingle, 'noMarginBottom')

const resolveNoMarginTopSingle = (noMargin: boolean = false) => noMargin && css`margin-top: 0;`
const resolveNoMarginTop = applySingle(resolveNoMarginTopSingle, 'noMarginTop')

const applyTextProps = () => css`
    ${resolveTextColor}
    ${resolveHeaderTextSize}
    ${resolveNoMargin}
    ${resolveNoMarginBottom}
    ${resolveNoMarginTop}
    ${resolveTextAlign}
`

const HeaderH0 = styled.h1<HeaderTextProps>`
    font-weight: 600;
    line-height: 1.2;
    ${applyTextProps}
`

const HeaderH1 = styled.h1<HeaderTextProps>`
    font-weight: 600;
    line-height: 1.2;
    ${applyTextProps}
`

const HeaderH2 = styled.h2<HeaderTextProps>`
    font-weight: 600;
    line-height: 1.2;
    ${applyTextProps}
`

const HeaderH3 = styled.h3<HeaderTextProps>`
    font-weight: 400;
    ${applyTextProps}
`

const HeaderH4 = styled.h4<HeaderTextProps>`
    font-weight: 400;
    margin-block-end: 0.66em;
    ${applyTextProps}
`

const HeaderH5 = styled.h5<HeaderTextProps>`
    font-weight: 600;
    ${applyTextProps}
`

const HeaderText = ({ size, textColor = "headerTextColor", children, ...rest }: HeaderTextProps & { children: ReactNode }) => {
    const elemMap: {
        [name in HeaderTextSizeType]: any
    } = {
        [HeaderTextSizeType.Massive]: HeaderH0,
        [HeaderTextSizeType.Huge]: HeaderH1,
        [HeaderTextSizeType.Large]: HeaderH2,
        [HeaderTextSizeType.Medium]: HeaderH3,
        [HeaderTextSizeType.Small]: HeaderH4,
        [HeaderTextSizeType.Tiny]: HeaderH5,
    }
    let Element = size ? elemMap[size] : elemMap[HeaderTextSizeType.Medium]
    return (
        <Element size={size} textColor={textColor} {...rest}>{children}</Element>
    )
}

export default HeaderText