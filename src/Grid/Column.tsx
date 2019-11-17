import * as React from 'react'
import { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import GridContext, { GridProps } from './GridContext'
import { applyMediaQuery, resolveItemSpace } from '../properties/PropertyResolver';

type ColumnType = GridProps & {
    colWidth: number | number[]
}

const resolveWidthSingle = (width: number) => {
    console.log('width', width)
    return css`
    grid-column-end: span ${width};
`
}

const resolveWidth = applyMediaQuery(resolveWidthSingle, 'colWidth')

const ColumnContainer = styled.div<ColumnType>`
    min-width: 0;
    ${resolveWidth}
    ${resolveItemSpace}
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