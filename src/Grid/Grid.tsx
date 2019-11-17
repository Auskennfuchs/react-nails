import * as React from 'react'
import { ReactNode } from "react"
import styled from "styled-components"
import GridContext, { GridProps } from "./GridContext"

const GridContainer = styled.div`
`

const Grid = ({ children, ...rest }: GridProps & { children: ReactNode }) => (
    <GridContext.Provider value={rest}>
        <GridContainer>
            {children}
        </GridContainer>
    </GridContext.Provider>
)

export default Grid