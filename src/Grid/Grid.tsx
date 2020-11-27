import * as React from 'react'
import { ReactNode } from 'react'
import styled from 'styled-components'
import { ItemAlignType, ItemJustifyType } from '../properties/PropertyTypes'
import GridContext, { GridProps } from './GridContext'
import Row from './Row'
import Column from './Column'

const GridContainer = styled.div`
    width: 100%;
`

const Grid = ({ columns = 12, children, align = ItemAlignType.Stretch, justify = ItemJustifyType.Stretch, ...rest }: GridProps & { children?: ReactNode }) => (
    <GridContext.Provider value={{ columns, align, justify, ...rest }}>
        <GridContainer>
            {children}
        </GridContainer>
    </GridContext.Provider>
)

export default Object.assign(Grid, { Row, Column })