import * as React from 'react'
import styled, { css } from 'styled-components'
import GridContext, { GridProps } from './GridContext'

type RowContainerProps  = GridProps & {
    equalHeights?: boolean,
}

const frGetter = (columns: any) => (
    typeof columns === "number" ? `repeat(${columns}, minmax(0,1fr))` : columns
)

const RowContainer = styled.div<RowContainerProps>`
    display: grid;
    grid-template-columns: ${p => frGetter(p.columns)};

    ${p=>p.equalHeights && css`
        grid-auto-rows: 1fr;
    `}
`

const Row = ({ equalHeights, children }: { equalHeights?: boolean, children: React.ReactNode }) => (
    <GridContext.Consumer>
        {gridProps => (
            <RowContainer {...gridProps} equalHeights={equalHeights}>
                {children}
            </RowContainer>
        )}
    </GridContext.Consumer>
)

export default Row