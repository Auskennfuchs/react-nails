import * as React from 'react'
import { ResolverFuncResult, IconResolverFunc, AddIconInput } from './iconLib'
import styled from 'styled-components'
import { StyleHelper } from '../Style'


export const svgIconResolver: IconResolverFunc = (id: string, icon: AddIconInput): ResolverFuncResult => {
    return {
        icon: id,
        element: SvgIcon,
        svg: icon.svg,
    }
}

const IconWrapper = styled.div`
    display: inline-block;
    position: relative;
    width: 1em;
    height: 1em;
    
    svg {
        width: 100%;
        height: 100%;
        ${StyleHelper.centerAbsolute}
    }
`

const SvgIcon = ({ svg: Element }: { svg: any }) => (
    <IconWrapper>
        <Element />
    </IconWrapper>
)

export default SvgIcon