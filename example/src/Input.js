import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Inline, addThemeComponent, Icon } from 'react-nails'

addThemeComponent((theme) => ['input', {
    ...theme.controls,
    afix: {

    },
}], 10)

const InputContainer = styled.div`
    border: 1px solid ${p => p.theme.input.borderColor};
    border-radius: ${p => p.theme.input.borderRadius};
    background-color: ${p => p.theme.input.backgroundColor};

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

    &:focus, &:active {
        outline: 0 none;
    }

    &::placeholder {
        color: ${p => p.theme.input.placeholderTextColor};
    }
`

const AffixContainer = styled.div`
    align-self: stretch;
    display: flex;
    align-items: center;
    background-color: #f0f;
    padding: ${p=>p.theme.spaces.small};
`

const Input = ({ onFocus = () => null, onBlur = () => null, prefix, suffix, ...rest }) => {

    const [focus, setFocus] = useState(false)

    const localOnFocus = (e) => {
        setFocus(true)
        onFocus(e)
    }

    const localOnBlur = (e) => {
        setFocus(false)
        onBlur(e)
    }

    return (
        <InputContainer focus={focus}>
            <Inline itemSpace="small">
                {prefix && (
                    <AffixContainer>{prefix}</AffixContainer>
                )}
                <InputElement onFocus={localOnFocus} onBlur={localOnBlur} {...rest} />
                {suffix && (
                    <AffixContainer>{suffix}</AffixContainer>
                )}
            </Inline>
        </InputContainer>
    )
}

export default Input