import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp, library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const Icon = ({ icon }: { icon: IconProp }) => {
    return <FontAwesomeIcon icon={icon} />
}

export default Icon