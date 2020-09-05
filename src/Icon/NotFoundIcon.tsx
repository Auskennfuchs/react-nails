import styled from 'styled-components'
import { StyleHelper } from 'Style'

const NotFoundIcon = styled.div<any>`
    display: inline-block;
    width: 1em;
    height: 1em;
    background: #f0f;    
    position: relative;
    &:after {
        content: '?';
        color: #fff;
        ${StyleHelper.centerAbsolute}
    }
`

export default NotFoundIcon