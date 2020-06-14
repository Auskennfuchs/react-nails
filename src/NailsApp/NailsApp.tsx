import * as React from 'react'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { resolveTheme, addThemeComponent } from "../theme"
import ResponsiveObserver from '../Responsive/ResponsiveObserver'
import { GlobalReset } from './Reset'

addThemeComponent((theme: { palette: any, colors: any }) => (['body', {
    backgroundColor: theme.palette.white1,
    color: theme.colors.text,
}]))

export const NailsApp = ({ theme, children }: { theme?: any, children?: any }) => {
    const [useTheme, setUseTheme] = useState(resolveTheme({}))

    useEffect(() => {
        const newTheme = resolveTheme(theme)
        setUseTheme(newTheme)
    }, [theme])

    return (
        <ThemeProvider theme={useTheme}>
            <ResponsiveObserver>
                <GlobalReset>
                    {children}
                </GlobalReset>
            </ResponsiveObserver>
        </ThemeProvider>
    )
}