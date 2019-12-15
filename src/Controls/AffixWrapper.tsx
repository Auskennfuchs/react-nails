import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { FluidProps, StatusProps, ItemAlignType } from '../properties/PropertyTypes'
import { Row } from '../layout'
import { ControlContainer } from './controlsCommon'

export interface AffixProps extends FluidProps, StatusProps {
    prefix?: React.ReactNode,
    suffix?: React.ReactNode,
    focus?: boolean,
    onFocus?: (e?: React.FormEvent<HTMLInputElement>) => any,
    onBlur?: (e?: React.FormEvent<HTMLInputElement>) => any,
}

const AffixWrapper = (themeProp: string) => (props: any) => {
    const Container = ControlContainer(themeProp)

    const AffixContainer = styled.div`
        align-self: stretch;
        display: flex;
        align-items: center;
        background-color: ${p => p.theme[themeProp].afix.backgroundColor};
        padding: ${p => p.theme[themeProp].afix.padding};
    `

    const AffixControl = ({ prefix, suffix, onFocus = () => null, onBlur = () => null, status, focus, children, ...rest }: AffixProps) => {
        const [localFocus, setFocus] = useState(false)

        const localOnFocus = (e: any) => {
            console.log('affix focus')
            setFocus(true)
            onFocus(e)
        }

        const localOnBlur = (e: any) => {
            console.log('affix blur')
            setFocus(false)
            onBlur(e)
        }

        return (
            <Container focus={focus || localFocus} statusType={status} onFocus={localOnFocus} onBlur={localOnBlur} {...rest}>
                <Row align={ItemAlignType.Center}>
                    {prefix && (
                        <AffixContainer>{prefix}</AffixContainer>
                    )}
                    {children}
                    {suffix && (
                        <AffixContainer>{suffix}</AffixContainer>
                    )}
                </Row>
            </Container>

        )
    }

    return (
        <AffixControl {...props} />
    )

}
export default AffixWrapper