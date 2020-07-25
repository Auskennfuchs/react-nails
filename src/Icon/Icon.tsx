import * as React from 'react'
import styled, { css } from 'styled-components'
import { StyleHelper } from 'Style'
import { TextColorProps, SizeProps, SizeType, FluidProps } from 'properties/PropertyTypes'
import { resolveTextColor, applySingle } from 'properties/PropertyResolver'
import { addThemeComponent } from 'theme'
import { ResolverFuncResult, resolverFuncs } from './iconLib'

addThemeComponent(() => ['icon', {
    [SizeType.Tiny]: "0.3em",
    [SizeType.Small]: "0.5em",
    [SizeType.Medium]: "1.0em",
    [SizeType.Large]: "2em",
    [SizeType.Huge]: "4em",
    [SizeType.Massive]: "8em",
}])

const NotFoundIcon = styled.div<any>`
    display: inline-block;
    width: 1em;
    height: 1em;
    background: #f0f;    
    position: relative;
    &:after {
        content: '?';
        color: #fff;
        ${StyleHelper.centerAbsolute}
    }
`

const resolveIconSize = (size: SizeType = SizeType.Medium) => css`
    font-size: ${p => p.theme.icon[size]};
`

const resolveFluid = (fluid: boolean) => fluid && css`
    width: 100%;
    height: 100%;
`

export const NailsIcon = styled.i<TextColorProps & SizeProps & FluidProps>`
    font-style: normal;
    ${resolveTextColor}
    ${applySingle(resolveIconSize, 'iconSize')}
    line-height: 1em;
    width: 1em;
    height: 1em;
    ${applySingle(resolveFluid, 'fluid')}
    display: flex;
    align-items: center;
    justify-content: center;
`

export interface IconProps extends SizeProps, FluidProps {
    /**
     * name of registered icon
     */
    icon: string,
    /**
     * color of icon
     */
    color?: string,
    as?: any,
}

const Icon = ({ icon, as:Element = NailsIcon, color, size, fluid, ...rest }: IconProps) => {
    const convertIcon = (iconName: string): ResolverFuncResult => {
        if (resolverFuncs[iconName]) {
            return resolverFuncs[iconName]
        }
        console.error(`icon with name ${iconName} not found`)
        return null
    }
    const foundIcon: ResolverFuncResult = convertIcon(icon)
    if (foundIcon) {
        const { element: IconElement, ...iconProps } = foundIcon
        return (
            <Element textColor={color} iconSize={size} fluid={fluid}>
                <IconElement {...iconProps} {...rest} />
            </Element>
        )
    }
    return (
        <Element textColor={color} iconSize={size}>
            <NotFoundIcon {...rest} />
        </Element>
    )
}

export default Icon