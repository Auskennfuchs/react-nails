import * as React from 'react'
import { useState } from 'react'
import styled, { css } from 'styled-components'
import { TextAlignProps, ItemAlignType, FluidProps } from '../../properties/PropertyTypes'
import { addThemeComponent } from '../../theme'
import { Row } from '../../layout'
import { resolveTextAlign, resolveFluid } from '../../properties/PropertyResolver'

interface InputProps extends TextAlignProps, FluidProps {
    prefix?: React.ReactNode,
    suffix?: React.ReactNode,
    onFocus?: (e?: Event) => any,
    onBlur?: (e?: Event) => any,
    inputRef?: React.RefObject<any>,
}

addThemeComponent((theme: { controls: { backgroundColor: string }, spaces: { small: string } }) => ['input', {
    ...theme.controls,
    afix: {
        backgroundColor: theme.controls.backgroundColor,
        padding: theme.spaces.small,
    },
}], 10)

const InputContainer = styled.div<any>`
    border: 1px solid ${p => p.theme.input.borderColor};
    border-radius: ${p => p.theme.input.borderRadius};
    background-color: ${p => p.theme.input.backgroundColor};
    color: ${p => p.theme.input.textColor};
    line-height: 1.15em;
    overflow: hidden;
    ${resolveFluid}

    ${p => p.focus && css`
        border-color: ${p.theme.input.focus.borderColor};
        box-shadow: 0 0 0 1px ${p.theme.input.focus.borderColor};
    `}
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

const Input: React.FC<InputProps> = ({ prefix, suffix, onFocus = () => null, onBlur = () => null, fluid,inputRef, ...rest }: InputProps) => {

    const [focus, setFocus] = useState(false)

    const localOnFocus = (e: any) => {
        setFocus(true)
        onFocus(e)
    }

    const localOnBlur = (e: any) => {
        setFocus(false)
        onBlur(e)
    }

    return (
        <InputContainer focus={focus} fluid={fluid}>
            <Row align={ItemAlignType.Center}>
                {prefix && (
                    <AffixContainer>{prefix}</AffixContainer>
                )}
                <InputElement onFocus={localOnFocus} onBlur={localOnBlur} {...rest} ref={inputRef}  />
                {suffix && (
                    <AffixContainer>{suffix}</AffixContainer>
                )}
            </Row>
        </InputContainer>
    )
}

export default Input