import React from 'react'
import { QuantityInput } from 'react-nails'


const QuantityExample = ({ value, ...rest }) => {
    const [pvalue, setValue] = React.useState(value)

    const onChange = ({ target }) => {
        console.log('target', target.value)
        setValue(target.value)
    }

    return (
        <QuantityInput value={pvalue} onChange={onChange} {...rest} />
    )
}

export default QuantityExample