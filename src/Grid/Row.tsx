import * as React from 'react'
import styled, { css } from 'styled-components'
import GridContext, { GridProps } from './GridContext'
import { SpacingType } from '../properties/PropertyTypes'
import { applyMediaQuery, applyMediaQueryIE11 } from '../properties/PropertyResolver'
import { MediaQuery } from '../layout'

type RowContainerProps = GridProps & {
    equalHeights?: boolean,
}

const frGetter = (columns: any) => (
    typeof columns === "number" ? `repeat(${columns}, minmax(0,1fr))` : columns
)

const resolveItemSpaceSingle = (space: SpacingType) => css`
    grid-column-gap: ${p => p.theme.spaces[space]};
`
const resolveItemSpace = applyMediaQuery(resolveItemSpaceSingle, 'itemSpace')

const resolveLineSpaceSingle = (space: SpacingType) => css`
    grid-row-gap: ${p => p.theme.spaces[space]};
    margin-bottom: ${p => p.theme.spaces[space]};
`
const resolveLineSpace = applyMediaQuery(resolveLineSpaceSingle, 'lineSpace')

const resolveItemSpaceIE11Single = (space: SpacingType = SpacingType.None) => css`
    margin-left: calc(-${ (p: { theme: { spaces: object } }) => p.theme.spaces[space]} / 2);
    margin-right: calc(-${ (p: { theme: { spaces: object } }) => p.theme.spaces[space]} / 2);
    width: calc(100% + ${ (p: { theme: { spaces: object } }) => p.theme.spaces[space]});
`
const resolveItemSpaceIE11 = applyMediaQueryIE11(resolveItemSpaceIE11Single, 'itemSpace')

const resolveLineSpaceIE11Single = (space: SpacingType = SpacingType.None) => css`
    margin-top: calc(-${ (p: { theme: { spaces: object } }) => p.theme.spaces[space]} / 2);
    margin-bottom: calc(-${ (p: { theme: { spaces: object } }) => p.theme.spaces[space]} / 2);
`
const resolveLineSpaceIE11 = applyMediaQueryIE11(resolveLineSpaceIE11Single, 'lineSpace')

const RowContainer = styled.div<RowContainerProps>`
    display: grid;
    grid-template-columns: ${p => frGetter(p.columns)};

    ${p => p.equalHeights && css`
        grid-auto-rows: 1fr;
    `}

    ${resolveItemSpace}
    ${resolveLineSpace}

    ${MediaQuery.IE11`
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin-bottom: 0;
    `}
    ${resolveItemSpaceIE11}
    ${resolveLineSpaceIE11}
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