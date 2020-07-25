import { css } from 'styled-components'

const centerAbsolute = css`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
`

const StyleHelper = {
    centerAbsolute,
}

export {
    StyleHelper
}