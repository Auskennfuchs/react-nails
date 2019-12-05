import React from 'react'
import { InputQuantity, Inline, Text, InputNumber } from 'react-nails'

export const QuantityExample = ({ value, ...rest }) => {
    const [pvalue, setValue] = React.useState(value)

    const onChange = ({ target }) => {
        setValue(target.value)
    }

    return (
        <Inline itemSpace="medium">
            <InputQuantity value={pvalue} onChange={onChange} {...rest} />
            <Text>value: {pvalue}</Text>
        </Inline>
    )

}

export const InputNumberExample = ({ value, ...rest }) => {
    const [pvalue, setValue] = React.useState(value)

    const onChange = ({ target }) => {
        setValue(target.value)
    }

    return (
        <Inline itemSpace="medium">
            <InputNumber value={pvalue} onChange={onChange} {...rest} />
            <Text>value: {pvalue}</Text>
        </Inline>
    )

}