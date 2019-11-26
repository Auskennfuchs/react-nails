import * as React from 'react'
import { ReactNode } from "react"
import styled, { css } from "styled-components"
import { TextColorProps, TextAlignProps, SizeType, SizeProps } from "../properties/PropertyTypes"
import { resolveTextColor, applySingle, resolveTextAlign } from '../properties/PropertyResolver'
import { addThemeComponent } from '../theme'

addThemeComponent((theme: { font: { [name: string]: string } }) => ['headerText', {
    [SizeType.Tiny]: theme.font.normal,
    [SizeType.Small]: theme.font.normal,
    [SizeType.Medium]: theme.font.large,
    [SizeType.Large]: "1.73333em",
    [SizeType.Huge]: "2.133333em",
    [SizeType.Massive]: "2.266666em",
}])

interface HeaderTextProps extends TextColorProps, TextAlignProps,SizeProps {
}

const resolveHeaderTextSizeSingle = (size: SizeType = SizeType.Medium) => css`font-size: ${p => p.theme.headerText[size]};`
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
        [name in SizeType]: any
    } = {
        [SizeType.Massive]: HeaderH0,
        [SizeType.Huge]: HeaderH1,
        [SizeType.Large]: HeaderH2,
        [SizeType.Medium]: HeaderH3,
        [SizeType.Small]: HeaderH4,
        [SizeType.Tiny]: HeaderH5,
    }
    let Element = size ? elemMap[size] : elemMap[SizeType.Medium]
    return (
        <Element size={size} textColor={textColor} {...rest}>{children}</Element>
    )
}

export default HeaderText