import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { NailsApp, BodyReset } from 'react-nails'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { withTheme } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faChevronUp, faTimes } from '@fortawesome/free-solid-svg-icons'
import {withInfo} from '@storybook/addon-info'

library.add({ faCoffee, faChevronUp, faTimes })

const ThemeWrapper = withTheme(({ theme, children, ...rest }) => (
    <NailsApp theme={theme} {...rest}>
        <BodyReset />
        {children}
    </NailsApp>
))

const withNailsApp = (storyFn) => (
    <ThemeWrapper>
        {storyFn()}
    </ThemeWrapper>
)

addDecorator(withNailsApp)
addDecorator(withInfo)

const baseNailsTheme = {
    name: "ReactNails base theme",
}

const darkNailsTheme = {
    name: "ReactNails dark theme",
    colors: {
        primary: "#ff0",
    }
}

const themes = [baseNailsTheme, darkNailsTheme]
addDecorator(withThemesProvider(themes))

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
