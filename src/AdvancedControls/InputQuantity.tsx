import * as React from 'react'
import styled from 'styled-components'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Button, NailsButton } from '../Controls'
import { Column } from '../layout'
import { convertNumberToLocaleNumber } from '../locale'
import { dispatchOnChangeValueEvent } from '../event'
import InputNumber, { InputNumberProps } from './InputNumber'
import { addIcon } from '../Icon'

interface InputQuantityProps extends InputNumberProps {
    /**
     * icon for increase - default chevron-up
     */
    increaseIcon?: string,
    /**
     * icon for decrease - default chevron-down
     */
    decreaseIcon?: string,
}

addIcon([faChevronUp, faChevronDown])

const ChangeButton = styled(NailsButton).attrs({ tabIndex: -1 })`
    &:focus {
        outline: 0 none;
        box-shadow: none;
    }
`

const ChangeButtons = ({ onChange, increaseIcon = "chevron-up", decreaseIcon = "chevron-down" }: { onChange: (direction: number) => any, increaseIcon?: string, decreaseIcon?: string }) => (
    <Column>
        <Button type="button" icon={increaseIcon} as={ChangeButton} onClick={() => onChange(1)} />
        <Button type="button" icon={decreaseIcon} as={ChangeButton} onClick={() => onChange(-1)} />
    </Column>
)

const InputQuantity = ({ changeAmount = 1, value, increaseIcon, decreaseIcon, ...rest }: InputQuantityProps) => {

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
        <InputNumber {...rest} value={value} prefix={<ChangeButtons onChange={onChangeAmount} increaseIcon={increaseIcon} decreaseIcon={decreaseIcon} />} inputRef={inputRef} changeAmount={changeAmount} />
    )
}

export default InputQuantity