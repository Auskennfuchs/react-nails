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
    value?: number | string,
    type?: string,
}

export const convertNumValue = (value: string | number): number => typeof value === "string" ? Number.parseFloat(value) : value

const InputNumber = ({ changeAmount = 1, minValue = Number.NEGATIVE_INFINITY, maxValue = Number.POSITIVE_INFINITY,
    value, onBlur, onChange = () => null, inputRef, ...rest }: InputNumberProps) => {

    const localInputRef: React.RefObject<HTMLInputElement> = inputRef ? inputRef : React.createRef()

    const [inputValue, setInputValue] = useState(!isEmpty(value) ? String(value) : "")
    const [curValue, setCurValue] = useState(value)

    useEffect(() => {
        if (value === null || value === undefined || value === "") {
            setCurValue(undefined)
        } else {
            const numValue: number = convertNumValue(value)
            if (localInputRef.current && localInputRef.current !== document.activeElement) {
                setInputValue(convertNumberToLocaleNumber(numValue))
            }
            setCurValue(minMaxValue(numValue))
        }
    }, [value])

    const minMaxValue = (val: number) => Math.min(Math.max(val, minValue), maxValue)

    const roundToNextChangeAmount = (num: number): number => {
        const factor = 1.0 / changeAmount
        return Math.round(factor * num) / factor
    }

    const sendOnChangeEvent = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
        const sendEvent: React.ChangeEvent<HTMLInputElement> = {
            ...e,
            target: {
                ...e.target,
                value,
            },
            currentTarget: {
                ...e.currentTarget,
                value,
            }
        }

        return onChange(sendEvent)
    }

    const localOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget
        setInputValue(value)
        if (value === "" || value === null) {
            setInputValue("")
            sendOnChangeEvent(e, "")
            return
        }

        const numValue = roundToNextChangeAmount(convertLocaleNumberToNumber(e.currentTarget.value || "0"))
        if (isNaN(numValue)) {
            return
        }
        sendOnChangeEvent(e, String(minMaxValue(numValue)))
    }

    const localOnBlur = (e: React.FormEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget
        if (value === "") {
            setInputValue("")
            return
        }
        const targetValue = convertLocaleNumberToNumber(inputValue)
        if (curValue !== undefined && targetValue !== curValue) {
            setInputValue(convertNumberToLocaleNumber(convertNumValue(curValue)))
        } else if (inputValue !== "") {
            const curInput = convertLocaleNumberToNumber(inputValue)
            setInputValue(convertNumberToLocaleNumber(curInput))
        }
        if (onBlur) {
            onBlur(e)
        }
    }

    return (
        <Input {...rest} value={inputValue} inputRef={localInputRef} onChange={localOnChange} onBlur={localOnBlur} inputMode="decimal" />
    )
}

export default InputNumber