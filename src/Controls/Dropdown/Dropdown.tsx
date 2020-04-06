import * as React from 'react'
import { useState, createRef, useEffect } from 'react'
import styled from 'styled-components'
import { addThemeComponent } from '../../theme'
import { FluidProps, TextAlignProps, SpacingType, NailsBaseType } from '../../properties/PropertyTypes'
import { Text } from '../../Text'
import AffixWrapper from '../AffixWrapper'
import { controlContent } from '../controlsCommon'
import { Button } from '../Button'
import { NoFocusNailsButton } from '../Button/Button'
import { Row } from '../../layout';

type OptionEntryType = {
    value: string | number,
    label: any
}

export interface DropdownProps extends TextAlignProps, FluidProps, NailsBaseType {
    placeholder?: string,
    filtered?: boolean,
    values: OptionEntryType[],
    value: any,
}

addThemeComponent((theme: { input: any }) => ['dropdown', {
    ...theme.input,
    options: {
        backgroundColor: theme.input.backgroundColor,
        borderColor: theme.input.borderColor,
    }
}], 100)

const SelectionElement = styled.div`    
    ${controlContent}
`

const PlaceHolderText = styled(Text)`
    color: ${p => p.theme.dropdown.placeholderTextColor};
`

const InputElement = styled.input<any>`
    ${controlContent}

    &:focus, &:active {
        outline: 0 none;
    }

    &::placeholder {
        color: ${p => p.theme.dropdown.placeholderTextColor};
    }
`

const OptionsContainer = styled.div`
    position: absolute;
    left: 0;
    top: 100%;
    margin-top: ${p => p.theme.spaces.small};
    min-width: 100%;
    max-width: 80vw;
    border: 1px solid ${p => p.theme.dropdown.options.borderColor};
    z-index: 1000;
`

const DropdownElement = styled.div`
    position: relative;
`

const OptionEntry = styled(Row).attrs(() => ({ space: SpacingType.Medium }))`
    background-color: ${p => p.theme.dropdown.options.backgroundColor};
`

const Dropdown = ({ placeholder, filtered, onFocus = () => null, onBlur = () => null, id, name, value, values = [], tabIndex }: DropdownProps) => {

    const inputRef: React.RefObject<HTMLInputElement> = createRef()
    const wrapperRef: React.RefObject<any> = createRef();

    const [inputMode, setInputMode] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)

    const DropdownWrapper = AffixWrapper('dropdown')

    const localOnFocus = (e: any) => {
        if (filtered) {
            setInputMode(true)
        }
        onFocus(e)
    }

    const localOnBlur = (e: any) => {
        setInputMode(false)
        setShowDropdown(false)
        onBlur(e)
    }

    useEffect(() => {
        if (inputMode && inputRef.current) {
            inputRef.current.focus()
        }
    }, [inputMode])

    const onToggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    return (
        <DropdownElement onFocus={localOnFocus} onBlur={localOnBlur} tabIndex={tabIndex || 0} ref={wrapperRef}>
            <DropdownWrapper id={id || name} name={name} onClick={onToggleDropdown} focus={showDropdown}
                suffix={
                    <Button icon="chevron-down" as={NoFocusNailsButton} />
                }
            >
                {!inputMode && (
                    <SelectionElement>
                        {!value && (
                            <PlaceHolderText>{placeholder}</PlaceHolderText>
                        )}
                    </SelectionElement>
                ) || (
                        <InputElement ref={inputRef} tabIndex="-1" onBlur={localOnBlur} onFocus={localOnFocus} />
                    )}
            </DropdownWrapper>
            {showDropdown && (
                <OptionsContainer >
                    {values.map(v => (
                        <OptionEntry key={v.value}>
                            {v.label}
                        </OptionEntry>
                    ))}
                </OptionsContainer>
            )}
        </DropdownElement>
    )
}

export default Dropdown