import * as React from 'react'
import { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import GridContext, { GridProps } from './GridContext'
import { applyMediaQuery, applyMediaQueryIE11 } from '../properties/PropertyResolver'
import { SpacingType } from '../properties/PropertyTypes'

type ColumnType = GridProps & {
    colWidth: number | number[]
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

const ColumnContainer = styled.div<ColumnType>`
    min-width: 0;
    ${resolveWidth}
    ${resolveWidthIE11}
    ${resolveItemSpaceIE11}
`

const Column = ({ width = 1, children }: { width?: number | number[], children: ReactNode }) => (
    <GridContext.Consumer>
        {gridProps => (
            <ColumnContainer {...gridProps} colWidth={width}>
                {children}
            </ColumnContainer>
        )}
    </GridContext.Consumer>
)

export default Column