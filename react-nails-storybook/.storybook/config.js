import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import {NailsApp, BodyReset} from 'react-nails';
import {withThemesProvider} from 'storybook-addon-styled-component-theme'
import {withTheme} from 'styled-components'

const ThemeWrapper = withTheme(({theme,children,...rest})=>(
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

const themes =[{name:"ReactNails base theme",colors:{crazyColor:"#f0f"}}]
addDecorator(withThemesProvider(themes))

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
