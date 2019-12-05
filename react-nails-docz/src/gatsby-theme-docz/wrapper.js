import React from 'react'
import { NailsApp, addIcon } from 'react-nails'
import { faChevronUp, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBookmark as faBookmarkR, faSmile } from '@fortawesome/free-regular-svg-icons'
import './theme.css'

addIcon(faTimes)
addIcon([faChevronUp, faChevronDown, { ...faBookmarkR, iconName: 'bookmark-r' }, faSmile])

const Theme = ({ children }) => {
    return (
        <NailsApp>
            {children}
        </NailsApp>
    )
}

export default Theme