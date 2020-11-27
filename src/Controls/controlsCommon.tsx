import styled, { css } from 'styled-components'
import { StatusType, StatusProps, FluidProps } from '../properties/PropertyTypes'
import { resolveFluid, applySingle, resolveTextAlign } from '../properties/PropertyResolver'

export interface ContainerProps extends FluidProps, StatusProps {
    focus?: boolean,
    statusType?: StatusType,
}

export const colorBorder = (color: string) => css`
    border-color: ${color};
    box-shadow: 0 0 0 1px ${color};
`

export const resolveStatus = (themeProp: string = 'input') => (status: StatusType = StatusType.Normal) => {
    switch (status) {
        case StatusType.Error:
            return css`
                ${p => colorBorder(p.theme[themeProp].error.borderColor)}
            `
        case StatusType.Success:
            return css`
                ${p => colorBorder(p.theme[themeProp].success.borderColor)}
            `
    }
    return null
}

export const ControlContainer = (themeProp: string) => styled.div<ContainerProps>`
    border: ${p => p.theme[themeProp].borderWidth} solid ${p => p.theme[themeProp].borderColor};
    border-radius: ${p => p.theme[themeProp].borderRadius};
    background-color: ${p => p.theme[themeProp].backgroundColor};
    color: ${p => p.theme[themeProp].textColor};
    line-height: 1.15em;
    overflow: hidden;
    ${resolveFluid}
    ${applySingle(resolveStatus(themeProp), 'statusType')}

    ${p => p.focus && colorBorder(p.theme[themeProp].focus.borderColor)}
`

export const controlContent = css`
    border: 0 none;
    background-color: transparent;
    font-size: 1em;
    padding: ${p => p.theme.controls.padding};
    width: 100%;
    ${resolveTextAlign}
    line-height: normal;
`