import * as React from 'react'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../Controls'
import { Column, Row } from '../layout'
import { convertNumberToLocaleNumber } from '../locale'
import { dispatchOnChangeValueEvent } from '../event'
import InputNumber, { InputNumberProps, convertNumValue } from './InputNumber'
import { addIcon } from '../Icon'
import { NoFocusNailsButton } from '../Controls/Button/Button'
import { SpacingType } from '../properties/PropertyTypes'

addIcon([faChevronUp, faChevronDown])

export enum QuantityInputMode {
    Left = "left",
    Right = "right",
    LeftRight = "leftright",
}

interface InputQuantityProps extends InputNumberProps {
    /**
     * icon for increase - default chevron-up
     */
    increaseIcon?: string,
    /**
     * icon for decrease - default chevron-down
     */
    decreaseIcon?: string,
    buttonMode: QuantityInputMode,
}

interface ChangeButtonsProps {
    onChange: (direction: number) => any,
    increaseIcon?: string,
    decreaseIcon?: string
}

const ChangeButtons = ({ onChange, increaseIcon, decreaseIcon }: ChangeButtonsProps) => (
    <Column>
        <Button type="button" icon={increaseIcon} as={NoFocusNailsButton} onClick={() => onChange(1)} />
        <Button type="button" icon={decreaseIcon} as={NoFocusNailsButton} onClick={() => onChange(-1)} />
    </Column>
)

const InputQuantity = ({ changeAmount = 1, value, increaseIcon = "chevron-up", decreaseIcon = "chevron-down", prefix, suffix, buttonMode = QuantityInputMode.Left, ...rest }: InputQuantityProps) => {

    const inputRef: React.RefObject<HTMLInputElement> = React.createRef()

    const roundToNextChangeAmount = (num: number): number => {
        const factor = 1.0 / changeAmount
        return Math.round(factor * num) / factor
    }

    const onChangeAmount = (direction: number) => {
        let curVal: number = convertNumValue(value || 0)
        const newValue = roundToNextChangeAmount(curVal + (changeAmount * direction))
        dispatchOnChangeValueEvent(inputRef, convertNumberToLocaleNumber(newValue))
    }

    let usePrefix = prefix
    let useSuffix = suffix

    switch (buttonMode) {
        case QuantityInputMode.Left:
            usePrefix = (
                <Row itemSpace={SpacingType.Small}>
                    <ChangeButtons onChange={onChangeAmount} increaseIcon={increaseIcon} decreaseIcon={decreaseIcon} />
                    {prefix}
                </Row>
            )
            break
        case QuantityInputMode.LeftRight:
            usePrefix = (
                <Row itemSpace={SpacingType.Small}>
                    <Button type="button" icon={increaseIcon} as={NoFocusNailsButton} onClick={() => onChangeAmount(1)} />
                    {prefix}
                </Row>
            )
            useSuffix = (
                <Row itemSpace={SpacingType.Small}>
                    {suffix}
                    <Button type="button" icon={decreaseIcon} as={NoFocusNailsButton} onClick={() => onChangeAmount(-1)} />
                </Row>
            )
            break
        case QuantityInputMode.Right:
        default:
            useSuffix = (
                <Row itemSpace={SpacingType.Small}>
                    {suffix}
                    <ChangeButtons onChange={onChangeAmount} increaseIcon={increaseIcon} decreaseIcon={decreaseIcon} />
                </Row>
            )
    }

    return (
        <InputNumber {...rest} value={value} prefix={usePrefix} suffix={useSuffix} inputRef={inputRef} changeAmount={changeAmount} />
    )
}

export default InputQuantity