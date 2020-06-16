import React from 'react'
import { NailsApp, addIcon } from 'react-nails'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBookmark as faBookmarkR, faSmile } from '@fortawesome/free-regular-svg-icons'
import {ReactComponent as NailsLogo} from './react-nails-logo.svg'
import './theme.css'

addIcon(faTimes)
addIcon([{ ...faBookmarkR, iconName: 'bookmark-r' }, faSmile])
addIcon({ id: "nailsLogo", resolver: svgIconResolver, svg: NailsLogo })

const Theme = ({ children }) => {
    return (
        <NailsApp>
            {children}
        </NailsApp>
    )
}

export default Theme