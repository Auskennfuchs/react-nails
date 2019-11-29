import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Row, addThemeComponent, Icon } from 'react-nails'

addThemeComponent((theme) => ['dropdown', {
    ...theme.controls,
}], 10)

const DropdownContainer = styled.div`
    border: 1px solid ${p => p.theme.dropdown.borderColor};
    border-radius: ${p => p.theme.dropdown.borderRadius};
    padding: 0.6em 0.4em;
    background-color: ${p=>p.theme.dropdown.backgroundColor};

    ${p => p.focus && css`
        border-color: ${p.theme.dropdown.focus.borderColor};
        box-shadow: 0 0 0 1px ${p.theme.dropdown.focus.borderColor};
    `}
`

const SelectedText = styled.div`
    border: 0 none;
    background-color: transparent;
    font-size: 1em;
`

const Dropdown = ({ onFocus = () => null, onBlur = () => null, ...rest }) => {

    const [focus, setFocus] = useState(false)

    const localOnFocus = (e) => {
        setFocus(true)
        onFocus(e)
    }

    const localOnBlur = (e) => {
        setFocus(false)
        onBlur(e)
    }

    return (
        <DropdownContainer focus={focus} {...rest}>
            <Row itemSpace="small" align="center">
                <Icon icon="times" />
                <SelectedText >TEst</SelectedText>
                <Icon icon="times" />
            </Row>
        </DropdownContainer>
    )
}

export default Dropdown