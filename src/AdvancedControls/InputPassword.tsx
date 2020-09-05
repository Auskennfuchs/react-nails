import * as React from 'react'
import { useState } from 'react'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { addIcon } from '../Icon'
import Input, { InputProps } from '../Controls/Input/Input'
import { NailsButton, Button } from '../Controls'
import { useEffectExceptOnMount } from '../util'

interface InputPasswordProps extends InputProps {
    /**
     * icon for increase - default chevron-up
     */
    showIcon?: string,
    /**
     * icon for decrease - default chevron-down
     */
    hideIcon?: string,
}

addIcon([faEye, faEyeSlash])

const ShowHideButton = styled(NailsButton).attrs(() => ({ tabIndex: -1 }))`
    &:focus {
        outline: 0 none;
        box-shadow: none;
    }
`

const InputPassword = ({ showIcon = "eye", hideIcon = "eye-slash", inputRef, ...rest }: InputPasswordProps) => {
    const [showPass, setShowPass] = useState(false)
    const localInputRef: React.RefObject<HTMLInputElement> = inputRef || React.createRef()

    const toggleShow = () => {
        setShowPass(!showPass)
    }

    useEffectExceptOnMount(() => {
        if (localInputRef.current) {
            localInputRef.current.focus()
            const textLength = localInputRef.current.value.length
            localInputRef.current.setSelectionRange(textLength, textLength)
        }
    }, [showPass])

    return (
        <Input {...rest} suffix={<Button as={ShowHideButton} icon={showPass ? hideIcon : showIcon} onClick={toggleShow} />} ref={localInputRef} type={showPass ? 'input' : 'password'} />
    )
}

export default InputPassword