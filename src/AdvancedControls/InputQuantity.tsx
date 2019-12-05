import * as React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { isEmpty } from 'lodash'
import { Button, NailsButton, Input } from '../Controls'
import { Column } from '../layout'
import { convertNumberToLocaleNumber, convertLocaleNumberToNumber } from '../locale'
import { dispatchOnChangeValueEvent } from '../event'
import { InputNumberProps } from './InputNumber'

const ChangeButton = styled(NailsButton).attrs({ tabIndex: -1 })`
    &:focus {
        outline: 0 none;
        box-shadow: none;
    }
`

const ChangeButtons = ({ onChange, onFocus }: { onChange: (direction: number) => any, onFocus: any }) => (
    <Column>
        <Button type="button" icon="chevron-up" as={ChangeButton} onClick={() => onChange(1)} onFocus={onFocus} onMouseDown={onFocus} />
        <Button type="button" icon="chevron-down" as={ChangeButton} onClick={() => onChange(-1)} onFocus={onFocus} />
    </Column>
)

const InputQuantity = ({ changeAmount = 1, value, onFocus, onBlur, onChange, ...rest }: InputNumberProps) => {

    const inputRef: React.RefObject<HTMLInputElement> = React.createRef()

    const [inputValue, setInputValue] = useState(!isEmpty(value) ? String(value) : "")
    const [curValue, setCurValue] = useState(value)

    useEffect(() => {
        if (value === null || value === undefined) {
            setCurValue(undefined)
        } else {
            if (inputRef.current && inputRef.current !== document.activeElement) {
                setInputValue(convertNumberToLocaleNumber(value))
            }
        }
        if (typeof value === "string") {
            setCurValue(Number(value))
        }
        if (typeof value === "number") {
            setCurValue(value)
        }
    }, [value])

    const roundToNextChangeAmount = (num: number): number => {
        const factor = 1.0 / changeAmount
        return Math.round(factor * num) / factor
    }

    const onChangeAmount = (direction: number) => {
        let curVal = curValue
        if (curVal === undefined) {
            curVal = 0
        }
        const newValue = roundToNextChangeAmount(curVal + (changeAmount * direction))
        setCurValue(newValue)
        setInputValue(convertNumberToLocaleNumber(newValue))
        dispatchOnChangeValueEvent(inputRef, convertNumberToLocaleNumber(newValue))
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    const sendOnChangeEvent = (e: React.FormEvent<HTMLInputElement>, value?: number | null) => onChange ? onChange({
        ...e,
        target: {
            ...e.target,
            value,
        },
        currentTarget: {
            ...e.currentTarget,
            value,
        }
    }) : null

    const localOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget
        setInputValue(value)
        if (value === "") {
            sendOnChangeEvent(e, null)
            return
        }

        const numValue = roundToNextChangeAmount(convertLocaleNumberToNumber(e.currentTarget.value || "0"))
        if (isNaN(numValue)) {
            return
        }
        sendOnChangeEvent(e, numValue)
    }

    const localOnBlur = (e: React.FormEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget
        if (value === "") {
            setInputValue("")
            return
        }
        const targetValue = convertLocaleNumberToNumber(inputValue)
        if (curValue !== undefined && targetValue !== curValue) {
            console.log('curValue blur', curValue)
            setInputValue(convertNumberToLocaleNumber(curValue))
        }
        if (onBlur) {
            onBlur(e)
        }
    }

    return (
        <Input {...rest} value={inputValue} prefix={<ChangeButtons onChange={onChangeAmount} onFocus={onFocus} />} inputRef={inputRef} onChange={localOnChange} onBlur={localOnBlur} />
    )
}

export default InputQuantity