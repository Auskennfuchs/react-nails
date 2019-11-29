import React from 'react'
import { NailsApp, addIcon, svgIconResolver } from 'react-nails'
import { faChevronUp, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBookmark as faBookmarkR, faSmile } from '@fortawesome/free-regular-svg-icons'
import './theme.css'

import { ReactComponent as LogoSvg } from './react-nails-logo.svg'

console.log('logoSvg', LogoSvg)

addIcon(faTimes)
addIcon([faChevronUp, { ...faBookmarkR, iconName: 'bookmark-r' }, faSmile])
addIcon({ id: "react-nails-logo", resolver: svgIconResolver, svg: LogoSvg })

const Theme = ({ children }) => {
    return (
        <NailsApp>
            {children}
        </NailsApp>
    )
}

export default Theme