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
}

addThemeComponent((theme: { colors: any, controls: any, palette: any, font: any }) => ["button", {
    primaryBackgroundColor: theme.colors.primary,
    borderRadius: theme.controls.borderRadius,
    primaryTextColor: theme.colors.white,
    primaryIconColor: theme.palette.white3,
    secondaryBackgroundColor: theme.colors.white,
    secondaryBorderColor: theme.colors.primary,
    secondaryTextColor: theme.colors.primary,
    textColor: theme.colors.primary,
    fontSize: theme.font.normal,
}])

const ButtonIcon = styled.span``

const StyledButton = styled.button<ButtonProps>`
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

    & > * {
        pointer-events: none;
    }

    &:disabled {
        opacity: 0.7;
    }

    ${p => !p.secondary && !p.primary && css`
        &:focus {
            box-shadow: 0 0 0 2px ${p.theme.button.textColor};
        }
    `}

    ${p => p.secondary && css`
        background-color: ${p.theme.button.secondaryBackgroundColor};
        color: ${p.theme.button.secondaryTextColor};
        border: 1px solid ${p.theme.button.secondaryBorderColor};
        padding: 0.7em 1em;

        &:focus {
            outline: 0 none;
            box-shadow: 0 0 2px 2px ${p => p.theme.button.secondaryBorderColor};
        }
    `}

    ${p => p.primary && css`
        background-color: ${p.theme.button.primaryBackgroundColor};
        color: ${p.theme.button.primaryTextColor};
        border: 1px solid ${p.theme.button.primaryBackgroundColor};
        box-shadow: 0 0 7px 2px rgba(0,0,0,0.1);
        padding: 0.7em 1em;

        &:focus {
            outline: 0 none;
            box-shadow: 0 0 7px 2px ${p => p.theme.button.primaryBackgroundColor};
        }

        ${ButtonIcon} {
            color: ${p.theme.button.primaryIconColor};
        }
    `}
`

const Button: React.FC<ButtonProps> = ({ primary, secondary, icon, iconLeft, children, ...rest }: ButtonProps) => (
    <StyledButton primary={primary} secondary={secondary} {...rest}>
        <Inline itemSpace={SpacingType.Medium}>
            {iconLeft && (<ButtonIcon>
                <Icon icon={iconLeft} />
            </ButtonIcon>)}
            {children}
            {icon && (<ButtonIcon>
                <Icon icon={icon} />
            </ButtonIcon>)}
        </Inline>
    </StyledButton>
)

export default Button