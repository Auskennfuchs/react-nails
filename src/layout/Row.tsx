import * as React from 'react'
import styled, { css } from 'styled-components'
import { resolveSpace, resolveItemSpace, resolveAlignItems, resolveJustifyItems, resolveLineSpace, resolveRelative, applySingle } from '../properties/PropertyResolver'
import { ItemJustifyType, SpacingProps, ItemSpaceProps, AlignItemProps, JustifyItemProps, LineSpaceProps, ItemAlignType, RelativeProps, ChildProps } from '../properties/PropertyTypes'

export interface RowProps extends SpacingProps, ItemSpaceProps, AlignItemProps, LineSpaceProps, JustifyItemProps, RelativeProps, ChildProps {
    /**
     * items will wrap to next line if they exceed width
     */
    wrap?: boolean,
    relative?: boolean,
}

const Row = styled(({ wrap, space, justify, itemSpace, align, lineSpace, relative, ...rest }: RowProps) => (<div {...rest} />)).attrs((p: RowProps) => ({
    align: p.align || ItemAlignType.Center,
}))`
    display: flex;
    flex-direction: row;
    width: 100%;
    ${resolveItemSpace}
    ${resolveSpace}
    ${resolveAlignItems}
    ${resolveJustifyItems}
    ${resolveLineSpace}
    ${applySingle(resolveRelative, 'relative')}

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