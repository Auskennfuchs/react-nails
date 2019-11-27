import *as React from 'react'
import styled, { css } from 'styled-components'
import { addThemeComponent } from '../theme'
import { NailsBaseType, SpacingProps, SpacingType } from '../properties/PropertyTypes'
import { applyMediaQuery } from '../properties/PropertyResolver'

addThemeComponent((theme: { palette: { grey10: string } }) => ['divider', {
    color: theme.palette.grey10,
}])

interface DividerProps extends SpacingProps, NailsBaseType {
    /**
     * divider has horizontal line
     */
    vertical?: boolean;
}

const DividerLine = styled.div<any>`
    ${(p: DividerProps) => p.vertical ? css`        
        border-right: 1px solid ${p => p.theme.divider.color};
        height: 100%;            
    `: css`
        border-bottom: 1px solid ${p => p.theme.divider.color};
        width: 100%;
    `}
`

const resolveHorizontalSpace = (space: SpacingType = SpacingType.Medium) => css`
    padding-top: ${p => p.theme.spaces[space]};
    padding-bottom: ${p => p.theme.spaces[space]};
`

const resolveVerticalSpace = (space: SpacingType = SpacingType.Medium) => css`
    padding-left: ${p => p.theme.spaces[space]};
    padding-right: ${p => p.theme.spaces[space]};
`

const DividerContainer = styled.div<DividerProps>`
    position: relative;
    flex: 0 0 auto;
    ${p => p.vertical ? css`
        justify-self: center;
        align-self: stretch
        ${applyMediaQuery(resolveVerticalSpace, 'space', false)}
    `: css`
        align-self: center;
        justify-self: stretch;
        width: 100%;
        ${applyMediaQuery(resolveHorizontalSpace, 'space', false)}
    `}
`

const Divider: React.FC<DividerProps> = ({ vertical, space, ...rest }: DividerProps) => (
    <DividerContainer vertical={vertical} space={space}>
        <DividerLine vertical={vertical} {...rest} />
    </DividerContainer>
)

export default Divider