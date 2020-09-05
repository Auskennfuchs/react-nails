import * as React from 'react'
import { useState } from 'react'
import styled, { css } from 'styled-components'
import { TextAlignProps, ItemAlignType, FluidProps, StatusProps, StatusType } from 'properties/PropertyTypes'
import { addThemeComponent } from 'theme'
import { Row } from 'layout'
import { resolveTextAlign, resolveFluid, applySingle } from 'properties/PropertyResolver'
import { Icon } from 'Icon'
import { dispatchOnChangeValueEvent } from 'event'

export interface InputProps extends TextAlignProps, FluidProps, StatusProps {
    name: string,
    prefix?: React.ReactNode,
    suffix?: React.ReactNode,
    onFocus?: (e?: React.FormEvent<HTMLInputElement>) => any,
    onBlur?: (e?: React.FormEvent<HTMLInputElement>) => any,
    onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => any,
    onClear?: (e?: any) => any,
    inputRef?: React.RefObject<any>,
    clearable?: boolean,
    value?: any,
    inputMode?: "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | "search",
    type?: string,
}

addThemeComponent((theme: { controls: { backgroundColor: string, focus: any }, spaces: { small: string } }) => ['input', {
    ...theme.controls,
    afix: {
        backgroundColor: theme.controls.backgroundColor,
        padding: theme.spaces.small,
    },
    focus: {
        ...theme.controls.focus,
        borderWidth: "2px",
    }
}], 10)

const colorBorder = (color: string) => css`
    border-color: ${color};
    overflow: visible;
    &:after {
        content: '';
        z-index: 1;
        position: absolute;
        display: block;
        border-radius: ${p => p.theme.input.borderRadius};
        right: -1px;
        bottom: -1px;
        left: -1px;
        top: -1px;
        border: ${p => p.theme.input.focus.borderWidth} solid ${color};
        pointer-events: none;
    }
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
    position: relative;
    border: ${p => p.theme.input.borderWidth} solid ${p => p.theme.input.borderColor};
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
    min-width: 0;

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


const Input: React.FC<InputProps & React.RefAttributes<any>> = React.forwardRef(({ name, prefix, suffix, onFocus = () => null, onBlur = () => null, onChange = () => null, onClear = () => null, fluid, inputRef, status, clearable, value, ...rest }: InputProps, ref: React.RefObject<any>) => {

    const [focus, setFocus] = useState(false)
    const localInputRef: React.MutableRefObject<any> = inputRef || ref || React.createRef()

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
        dispatchOnChangeValueEvent(localInputRef, null)
        onClear({
            target: {
                name,
                value: null
            }
        })
    }

    return (
        <InputContainer focus={focus} fluid={fluid} statusType={status} onFocus={localOnFocus} onBlur={localOnBlur}>
            <Row align={ItemAlignType.Center}>
                {prefix && (
                    <AffixContainer>{prefix}</AffixContainer>
                )}
                <InputElement {...rest} name={name} onChange={onChange} ref={localInputRef} value={value} />
                {clearable && value && (
                    <ClearButton onClick={onClickClear}><Icon icon="times" /></ClearButton>
                )}
                {suffix && (
                    <AffixContainer>{suffix}</AffixContainer>
                )}
            </Row>
        </InputContainer>
    )
})

export default Input
