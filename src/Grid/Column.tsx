import * as React from 'react'
import styled, { css } from 'styled-components'
import GridContext, { GridProps } from './GridContext'
import { applyMediaQuery, applyMediaQueryIE11, resolveAlignItems, resolveJustifyItems } from 'properties/PropertyResolver'
import { SpacingType, ItemJustifyType, ChildProps } from 'properties/PropertyTypes'

export interface ColumnProps extends GridProps, ChildProps {
    colWidth: number | number[],
    /**
     * colspan of current column 
     */
    width?: number,
}

const calcWidth = (colWidth: number, columns: number) => `${colWidth / columns * 100}%`

const resolveWidthSingle = (width: number) => css`
    grid-column-end: span ${width};
`
const resolveWidth = applyMediaQuery(resolveWidthSingle, 'colWidth')

const resolveWidthIE11Single = (colWidth: number, p: { columns: number }) => css`
    width: ${calcWidth(colWidth, p.columns)};
`
const resolveWidthIE11 = applyMediaQueryIE11(resolveWidthIE11Single, 'colWidth')

const resolveItemSpaceIE11Single = (space: SpacingType) => css`
    padding-left: calc(${ (p: { theme: { spaces: object } }) => p.theme.spaces[space]} / 2);
    padding-right: calc(${ (p: { theme: { spaces: object } }) => p.theme.spaces[space]} / 2);
`
const resolveItemSpaceIE11 = applyMediaQueryIE11(resolveItemSpaceIE11Single, 'itemSpace')

const resolveLineSpaceIE11Single = (space: SpacingType) => css`
    padding-top: calc(${ (p: { theme: { spaces: object } }) => p.theme.spaces[space]} / 2);
    padding-bottom: calc(${ (p: { theme: { spaces: object } }) => p.theme.spaces[space]} / 2);
`
const resolveLineSpaceIE11 = applyMediaQueryIE11(resolveLineSpaceIE11Single, 'lineSpace')

const ColumnContainer = styled.div<ColumnProps>`
    min-width: 0;
    display: flex;
    ${p => p.justify == ItemJustifyType.Stretch && css`
        & > * {
            flex: 1 1 auto;
        }
    `}
    ${resolveWidth}
    ${resolveWidthIE11}
    ${resolveItemSpaceIE11}
    ${resolveLineSpaceIE11}
    ${resolveAlignItems}
    ${resolveJustifyItems}
`

const Column = ({ width = 1, children, ...rest }: ColumnProps) => (
    <GridContext.Consumer>
        {gridProps => (
            <ColumnContainer {...gridProps} {...rest} colWidth={width}>
                {children}
            </ColumnContainer>
        )}
    </GridContext.Consumer>
)

export default Column