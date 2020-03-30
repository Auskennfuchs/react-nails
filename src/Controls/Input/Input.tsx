import * as React from 'react'
import { useState, createRef } from 'react'
import styled, { css } from 'styled-components'
import { TextAlignProps, ItemAlignType, FluidProps, StatusProps, StatusType } from '../../properties/PropertyTypes'
import { addThemeComponent } from '../../theme'
import { Row } from '../../layout'
import { resolveTextAlign, resolveFluid, applySingle } from '../../properties/PropertyResolver'
import { Icon } from '../../Icon'
import { dispatchOnChangeValueEvent } from '../../event';

export interface InputProps extends TextAlignProps, FluidProps, StatusProps {
    name: string,
    prefix?: React.ReactNode,
    suffix?: React.ReactNode,
    onFocus?: (e?: React.FormEvent<HTMLInputElement>) => any,
    onBlur?: (e?: React.FormEvent<HTMLInputElement>) => any,
    onClear?: (e?: any) => any,
    inputRef?: React.RefObject<any>,
    clearable?: boolean,
}

addThemeComponent((theme: { controls: { backgroundColor: string }, spaces: { small: string } }) => ['input', {
    ...theme.controls,
    afix: {
        backgroundColor: theme.controls.backgroundColor,
        padding: theme.spaces.small,
    },
}], 10)

const colorBorder = (color: string) => css`
    border-color: ${color};
    box-shadow: 0 0 0 1px ${color};
`

const resolveStatus = (status: StatusType = StatusType.Normal) => {
    switch (status) {
        case StatusType.Error:
            return css`
                ${p => colorBorder(p.theme.input.error.borderColor)}
            `
        case StatusType.Success:
            return css`
                ${p => colorBorder(p.theme.input.success.borderColor)}
            `
    }
    return null
}

const InputContainer = styled.div<any>`
    border: 1px solid ${p => p.theme.input.borderColor};
    border-radius: ${p => p.theme.input.borderRadius};
    background-color: ${p => p.theme.input.backgroundColor};
    color: ${p => p.theme.input.textColor};
    line-height: 1.15em;
    overflow: hidden;
    ${resolveFluid}
    ${applySingle(resolveStatus, 'statusType')}

    ${p => p.focus && colorBorder(p.theme.input.focus.borderColor)}
`

const InputElement = styled.input`
    border: 0 none;
    background-color: transparent;
    font-size: 1em;
    padding: 0.6em 0.4em;
    width: 100%;

    &:focus, &:active {
        outline: 0 none;
    }

    &::placeholder {
        color: ${p => p.theme.input.placeholderTextColor};
    }

    ${resolveTextAlign}
`

const AffixContainer = styled.div`
    align-self: stretch;
    display: flex;
    align-items: center;
    background-color: ${p => p.theme.input.afix.backgroundColor};
    padding: ${p => p.theme.input.afix.padding};
`

const ClearButton = styled.button.attrs(() => ({ type: 'button', tabIndex: -1 }))`
    border: 0 none;
    background-color: transparent;
    line-height: 1;
    padding: 0;
    font-size: 0.8em;
    color: ${p => p.theme.colors.textLight};
    &:focus {
        outline: 0 none;
    }
    align-self: stretch;
    padding: 0 0.3em;
`


const Input: React.FC<InputProps> = ({ name, prefix, suffix, onFocus = () => null, onBlur = () => null, onChange = () => null, onClear = () => null, fluid, inputRef, status, clearable, ...rest }: InputProps) => {

    const [focus, setFocus] = useState(false)
    const localInputRef: React.RefObject<HTMLInputElement> = inputRef || createRef()

    const localOnFocus = (e: any) => {
        setTimeout(() => setFocus(true))
        onFocus(e)
    }

    const localOnBlur = (e: any) => {
        setTimeout(() => setFocus(false))
        onBlur(e)
    }

    const onClickClear = (e: any) => {
        e.stopPropagation()
        e.preventDefault()
        dispatchOnChangeValueEvent(localInputRef, "")
        onClear(
            {
                target: {
                    name,
                    value: null
                }
            }
        )
    }

    return (
        <InputContainer focus={focus} fluid={fluid} statusType={status} onFocus={localOnFocus} onBlur={localOnBlur}>
            <Row align={ItemAlignType.Center}>
                {prefix && (
                    <AffixContainer>{prefix}</AffixContainer>
                )}
                <InputElement {...rest} name={name} onChange={onChange} ref={localInputRef} />
                {clearable && (
                    <ClearButton onClick={onClickClear}><Icon icon="times" /></ClearButton>
                )}
                {suffix && (
                    <AffixContainer>{suffix}</AffixContainer>
                )}
            </Row>
        </InputContainer>
    )
}

export default Input
