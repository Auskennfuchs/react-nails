import React from 'react'
import { theme, useConfig, ComponentsProvider } from 'docz'
import { ThemeProvider } from 'theme-ui'
import { NailsApp, FullScreenContainer } from 'react-nails'

const Theme = ({ children }) => {
    const config = useConfig()
    return (
        <ThemeProvider theme={config}>
            <NailsApp>
                {children}
            </NailsApp>
        </ThemeProvider>
    )
}

export default Theme