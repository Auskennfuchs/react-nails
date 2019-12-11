import * as React from 'react'
import styled, { css } from 'styled-components'
import { addThemeComponent } from '../../theme'
import { Inline } from '../../layout'
import { SpacingType, SizeType, TextColorProps } from '../../properties/PropertyTypes'
import { Icon } from '../../Icon'
import { Spinner } from '../../Spinner';

export interface ButtonProps extends TextColorProps {
    /**
     * styles button as primary button
     */
    primary?: boolean,
    /**
     * styles button as secondary button
     */
    secondary?: boolean,
    /**
     * icon on right side
     */
    icon?: string,
    /**
     * icon on left side
     */
    iconLeft?: string,
    /**
     * disables button
     */
    disabled?: boolean,
    /**
     * button is rendered as this component
     */
    as?: typeof React.Component | React.FunctionComponent | any,
    /**
     * shows spinner instead of content
     */
    loading?: boolean,
    /**
     * color of loading spinner
     */
    loadingSpinnerColor?: string,
}

addThemeComponent((theme: { colors: any, controls: any, palette: any, font: any }) => ["button", {
    borderRadius: theme.controls.borderRadius,
    textColor: theme.colors.primary,
    fontSize: theme.font.normal,
    disabled: {
        textColor: theme.controls.disabled.textColor,
    },
    primary: {
        backgroundColor: theme.colors.primary,
        textColor: theme.colors.primaryText,
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
            textColor: theme.palette.white3,
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
            borderColor: theme.palette.blue3,
        }
    },
}], 10)

const applyState = (state: { backgroundColor: string, textColor: string, borderColor: string }) => css`
    background-color: ${state.backgroundColor};
    color: ${state.textColor};
    border-color: ${state.borderColor};
`

const ButtonIcon = styled.span``

export const NailsButton = styled.button<ButtonProps>`
    display: inline-flex;
    align-items: center;
    background-color: transparent;
    border-radius: ${p => p.theme.button.borderRadius};
    border: 0 none;
    color: ${p => p.theme.colors[p.textColor || ""] || p.theme.button.textColor};
    padding: 0;
    user-select: none;
    font-size: ${p => p.theme.button.fontSize};
    outline: 0 none;
    min-width: 1em;
    position: relative;

    &:disabled {
        cursor: not-allowed;
        color: ${p => p.theme.button.disabled.textColor};
    }

    & > * {
        pointer-events: none;
    }

    &:focus {
        box-shadow: 0 0 0 2px ${p => p.theme.button.textColor};
    }
`

export const NoFocusNailsButton = styled(NailsButton).attrs(() => ({ tabIndex: -1 }))`
    &:focus, &:active {
        outline: 0 none;
        box-shadow: none;
    }
`

export const PrimaryNailsButton = styled(NailsButton)`
    font-weight: 600;
    letter-spacing: 0.04em;
    border: 1px solid ${p => p.theme.button.primary.borderColor};
    ${p => applyState(p.theme.button.primary)}
    box-shadow: 0 0 7px 2px rgba(0,0,0,0.1);
    padding: 0.7em 1em;

    &:hover, &:focus {
        box-shadow: none;
        outline: 0 none;
        ${p => applyState(p.theme.button.primary.hover)}
    }

    &:active {
        box-shadow: none;
        ${p => applyState(p.theme.button.primary.active)}
    }

    &:disabled {
        ${p => applyState(p.theme.button.primary.disabled)}
    }

    ${ButtonIcon} {
        color: ${p => p.theme.button.primary.iconColor};
    }
`

export const SecondaryNailsButton = styled(NailsButton)`
    font-weight: 600;
    letter-spacing: 0.04em;
    border: 1px solid ${p => p.theme.button.secondary.borderColor};
    ${p => applyState(p.theme.button.secondary)}
    padding: 0.7em 1em;

    &:hover,&:focus {
        box-shadow: none;
        outline: 0 none;
        ${p => applyState(p.theme.button.secondary.hover)}
    }

    &:active {
        box-shadow: none;
        ${p => applyState(p.theme.button.secondary.active)}
    }

    &:disabled {
        ${p => applyState(p.theme.button.secondary.disabled)}
    }
`

const ChildContainer = styled(Inline)`
    ${p => p.hideContent && css`
        visibility: hidden;
    `}
`

const Button: React.FC<ButtonProps> = ({ primary, secondary, icon, iconLeft, children, as, loading = false, loadingSpinnerColor = "white", ...rest }: ButtonProps) => {
    const Element = as || (primary ? PrimaryNailsButton : secondary ? SecondaryNailsButton : NailsButton)
    return (
        <Element {...rest}>
            {loading && <Spinner color={loadingSpinnerColor} size={SizeType.Small} absolute />}
            <ChildContainer itemSpace={SpacingType.Medium} hideContent={loading}>
                {iconLeft && (<ButtonIcon>
                    <Icon icon={iconLeft} />
                </ButtonIcon>)}
                {children && (
                    <span>
                        {children}
                    </span>
                )}
                {icon && (<ButtonIcon>
                    <Icon icon={icon} />
                </ButtonIcon>)}
            </ChildContainer>
        </Element>
    )
}

export default Button