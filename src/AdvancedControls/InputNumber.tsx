import * as React from 'react'
import { useEffect, useState } from 'react'
import { isEmpty } from 'lodash'
import { Input } from '../Controls'
import { InputProps } from '../Controls/Input/Input'
import { convertNumberToLocaleNumber, convertLocaleNumberToNumber } from '../locale'

export interface InputNumberProps extends InputProps {
    /**
     * fraction to increase/decrease current value
     */
    changeAmount: number,
    value?: number,
}

const InputNumber = ({ changeAmount = 1, value, onFocus, onBlur, onChange, ...rest }: InputNumberProps) => {

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
        <Input {...rest} value={inputValue} inputRef={inputRef} onChange={localOnChange} onBlur={localOnBlur} />
    )
}

export default InputNumber