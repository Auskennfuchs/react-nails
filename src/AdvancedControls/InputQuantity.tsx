import * as React from 'react'
import styled from 'styled-components'
import { Button, NailsButton } from '../Controls'
import { Column } from '../layout'
import { convertNumberToLocaleNumber } from '../locale'
import { dispatchOnChangeValueEvent } from '../event'
import InputNumber, { InputNumberProps } from './InputNumber'

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

const InputQuantity = ({ changeAmount = 1, value, onFocus, ...rest }: InputNumberProps) => {

    const inputRef: React.RefObject<HTMLInputElement> = React.createRef()

    const roundToNextChangeAmount = (num: number): number => {
        const factor = 1.0 / changeAmount
        return Math.round(factor * num) / factor
    }

    const onChangeAmount = (direction: number) => {
        let curVal = value
        if (curVal === undefined) {
            curVal = 0
        }
        const newValue = roundToNextChangeAmount(curVal + (changeAmount * direction))
        dispatchOnChangeValueEvent(inputRef, convertNumberToLocaleNumber(newValue))
    }

    return (
        <InputNumber {...rest} value={value} prefix={<ChangeButtons onChange={onChangeAmount} onFocus={onFocus} />} inputRef={inputRef} changeAmount={changeAmount} onFocus={onFocus} />
    )
}

export default InputQuantity