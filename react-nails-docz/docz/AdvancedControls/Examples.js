import React from 'react'
import { InputQuantity, Inline, Text, InputNumber, Column } from 'react-nails'

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
    const [tvalue, setTValue] = React.useState(value)

    const onChange = ({ target }) => {
        setValue(target.value)
    }

    const onChangeT = ({ target }) => {
        setTValue(target.value)
    }

    return (
        <Column>
            <Inline itemSpace="medium">
                <InputNumber value={pvalue} onChange={onChange} {...rest} />
                <Text>value: {pvalue}</Text>
            </Inline>
            <Inline itemSpace="medium">
                <InputNumber value={tvalue} onChange={onChangeT} minValue={0} maxValue={10}/>
                <Text>value: {tvalue}</Text>
            </Inline>
        </Column>
    )

}