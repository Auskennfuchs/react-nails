import * as React from 'react'
import styled from 'styled-components'
import { TextAlignProps, FluidProps, StatusProps } from '../../properties/PropertyTypes'
import { addThemeComponent } from '../../theme'
import AffixWrapper from '../AffixWrapper'
import { controlContent } from '../controlsCommon'

export interface InputProps extends TextAlignProps, FluidProps, StatusProps {
    prefix?: React.ReactNode,
    suffix?: React.ReactNode,
    onFocus?: (e?: React.FormEvent<HTMLInputElement>) => any,
    onBlur?: (e?: React.FormEvent<HTMLInputElement>) => any,
    inputRef?: React.RefObject<any>,
}

addThemeComponent((theme: { controls: { backgroundColor: string }, spaces: { small: string } }) => ['input', {
    ...theme.controls,
    afix: {
        backgroundColor: theme.controls.backgroundColor,
        padding: theme.spaces.small,
    },
}], 10)

const InputElement = styled.input`
    ${controlContent}

    &:focus, &:active {
        outline: 0 none;
    }

    &::placeholder {
        color: ${p => p.theme.input.placeholderTextColor};
    }
`

const Input: React.FC<InputProps> = ({ prefix, suffix, onFocus = () => null, onBlur = () => null, fluid, inputRef, status, ...rest }: InputProps) => {

    const InputWrapper = AffixWrapper('input')

    return (
        <InputWrapper prefix={prefix} suffix={suffix} onFocus={onFocus} onBlur={onBlur} fluid={fluid} status={status}>
            <InputElement {...rest} ref={inputRef} />
        </InputWrapper>
    )
}

export default Input