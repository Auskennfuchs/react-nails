import * as React from 'react'
import styled, { css } from 'styled-components'
import { resolveSpace, resolveItemSpace, resolveAlignItems, resolveJustifyItems, resolveLineSpace } from '../properties/PropertyResolver'
import { ItemJustifyType, SpacingProps, ItemSpaceProps, AlignItemProps, JustifyItemProp, LineSpaceProps } from '../properties/PropertyTypes'

interface RowProps extends SpacingProps, ItemSpaceProps, AlignItemProps, LineSpaceProps, JustifyItemProp {
    /**
     * items will wrap to next line if they exceed width
     */
    wrap?: boolean
}

const Row = styled(({ wrap, space, justify, itemSpace, align, lineSpace, ...rest }: RowProps) => (<div {...rest} />))`
    display: flex;
    flex-direction: row;
    width: 100%;
    ${resolveItemSpace}
    ${resolveSpace}
    ${resolveAlignItems}
    ${resolveJustifyItems}
    ${resolveLineSpace}

    ${p => p.justify === ItemJustifyType.Stretch && css`
        & > * {
            flex: 1 1 auto;
        }
    `}

    ${p => p.wrap && css`
        flex-wrap: wrap;
    `}
`

export default Row