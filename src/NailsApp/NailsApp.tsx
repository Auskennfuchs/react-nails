import * as React from 'react'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { resolveTheme, addThemeComponent } from "../theme"
import ResponsiveObserver from '../Responsive/ResponsiveObserver'
import { GlobalReset } from './Reset'

addThemeComponent((theme: { palette: any, colors: any }) => (['body', {
    backgroundColor: theme.palette.white1,
    color: theme.colors.textColor,
}]))

export const NailsApp = ({ theme, children }: { theme?: any, children?: any }) => {
    const [useTheme, setUseTheme] = useState(resolveTheme({}))

    useEffect(() => {
        setUseTheme(resolveTheme(theme))
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