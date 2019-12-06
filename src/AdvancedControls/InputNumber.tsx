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
    minValue: number,
    maxValue: number,
    value?: number,
}

const InputNumber = ({ changeAmount = 1, minValue = Number.NEGATIVE_INFINITY, maxValue = Number.POSITIVE_INFINITY,
    value, onBlur, onChange, inputRef, ...rest }: InputNumberProps) => {

    const localInputRef: React.RefObject<HTMLInputElement> = inputRef ? inputRef : React.createRef()

    const [inputValue, setInputValue] = useState(!isEmpty(value) ? String(value) : "")
    const [curValue, setCurValue] = useState(value)

    useEffect(() => {
        if (value === null || value === undefined) {
            setCurValue(undefined)
        } else {
            if (localInputRef.current && localInputRef.current !== document.activeElement) {
                setInputValue(convertNumberToLocaleNumber(value))
            }
            if (typeof value === "string") {
                setCurValue(minMaxValue(value))
            }
            if (typeof value === "number") {
                setCurValue(minMaxValue(value))
            }
        }
    }, [value])

    const minMaxValue = (val: number) => Math.min(Math.max(val, minValue), maxValue)

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
        sendOnChangeEvent(e, minMaxValue(numValue))
    }

    const localOnBlur = (e: React.FormEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget
        if (value === "") {
            setInputValue("")
            return
        }
        const targetValue = convertLocaleNumberToNumber(inputValue)
        if (curValue !== undefined && targetValue !== curValue) {
            setInputValue(convertNumberToLocaleNumber(curValue))
        } else if (inputValue !== "") {
            const curInput = convertLocaleNumberToNumber(inputValue)
            setInputValue(convertNumberToLocaleNumber(curInput))
        }
        if (onBlur) {
            onBlur(e)
        }
    }

    return (
        <Input {...rest} value={inputValue} inputRef={localInputRef} onChange={localOnChange} onBlur={localOnBlur} inputMode="decimal"/>
    )
}

export default InputNumber