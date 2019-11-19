import * as React from 'react'
import styled, { css } from 'styled-components'
import { addThemeComponent } from '../../theme'
import { Inline } from '../../layout'
import { SpacingType } from '../../properties/PropertyTypes'
import { Icon } from '../../Icon'

type ButtonProps = {
    primary?: boolean,
    secondary?: boolean,
    children?: React.ReactNode,
    icon?: string,
    iconLeft?: string,
    disabled?: boolean,
    as: typeof React.Component | React.FunctionComponent,
}

addThemeComponent((theme: { colors: any, controls: any, palette: any, font: any }) => ["button", {
    borderRadius: theme.controls.borderRadius,
    textColor: theme.colors.primary,
    fontSize: theme.font.normal,
    primary: {
        backgroundColor: theme.colors.primary,
        textColor: theme.colors.white,
        iconColor: theme.palette.white3,
        borderColor: theme.colors.primary,
        hover: {
            backgroundColor: theme.palette.blue2,
            textColor: theme.colors.white,
            borderColor: theme.palette.blue2,
        },
        active: {
            backgroundColor: theme.palette.blue4,
            textColor: theme.colors.white,
            borderColor: theme.palette.blue4,
        },
        disabled: {
            backgroundColor: theme.palette.blue3,
            textColor: theme.colors.white3,
            borderColor: theme.palette.blue3,
        }
    },
    secondary: {
        backgroundColor: theme.colors.transparent,
        textColor: theme.colors.primary,
        iconColor: theme.colors.primary,
        borderColor: theme.colors.primary,
        hover: {
            backgroundColor: theme.palette.white3,
            textColor: theme.palette.blue2,
            borderColor: theme.palette.blue2,
        },
        active: {
            backgroundColor: theme.colors.transparent,
            textColor: theme.palette.blue4,
            borderColor: theme.palette.blue4,
        },
        disabled: {
            backgroundColor: theme.palette.white4,
            textColor: theme.palette.blue3,
            borderColor: theme.palette.primary,
        }
    },
}])

const applyState = (state: { backgroundColor: string, textColor: string, borderColor: string }) => css`
    background-color: ${state.backgroundColor};
    color: ${state.textColor};
    border-color: ${state.borderColor};
`

const ButtonIcon = styled.span``

const NailsButton = styled.button<ButtonProps>`
    background-color: transparent;
    border-radius: ${p => p.theme.button.borderRadius};
    border: 0 none;
    color: ${p => p.theme.button.textColor};
    padding: 0;
    user-select: none;
    letter-spacing: 0.04em;
    font-weight: 600;
    font-size: ${p => p.theme.button.fontSize};
    outline: 0 none;
    min-width: 1em;

    & > * {
        pointer-events: none;
    }

    ${p => !p.secondary && !p.primary && css`
        &:focus {
            box-shadow: 0 0 0 2px ${p.theme.button.textColor};
        }
    `}

    ${p => p.secondary && css`
        border: 1px solid ${p.theme.button.secondary.borderColor};
        ${applyState(p.theme.button.secondary)}
        padding: 0.7em 1em;

        &:hover,&:focus {
            outline: 0 none;
            ${applyState(p.theme.button.secondary.hover)}
        }

        &:active {
            ${applyState(p.theme.button.secondary.active)}
        }

        &:disabled {
            ${applyState(p.theme.button.secondary.disabled)}
            cursor: not-allowed;
        }
    `}

    ${p => p.primary && css`
        border: 1px solid ${p.theme.button.primary.borderColor};
        ${applyState(p.theme.button.primary)}
        box-shadow: 0 0 7px 2px rgba(0,0,0,0.1);
        padding: 0.7em 1em;

        &:hover, &:focus {
            outline: 0 none;
            ${applyState(p.theme.button.primary.hover)}
        }

        &:active {
            ${applyState(p.theme.button.primary.active)}
        }

        &:disabled {
            ${applyState(p.theme.button.primary.disabled)}
            cursor: not-allowed;
        }

        ${ButtonIcon} {
            color: ${p.theme.button.primary.iconColor};
        }
    `}
`

const Button: React.FC<ButtonProps> = ({ primary, secondary, icon, iconLeft, children, as: Element = NailsButton, ...rest }: ButtonProps) => (
    <Element primary={primary} secondary={secondary} {...rest}>
        <Inline itemSpace={SpacingType.Medium}>
            {iconLeft && (<ButtonIcon>
                <Icon icon={iconLeft} />
            </ButtonIcon>)}
            {children}
            {icon && (<ButtonIcon>
                <Icon icon={icon} />
            </ButtonIcon>)}
        </Inline>
    </Element>
)

export default Button