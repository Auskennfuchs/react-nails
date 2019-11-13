import * as React from 'react'
import { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { resolveTheme, addThemeComponent } from "../theme"
import ResponsiveObserver from '../Responsive/ResponsiveObserver'

addThemeComponent((theme: { palette: any }) => (['body', {
    backgroundColor: theme.palette.white1,
    color: theme.palette.baseGrey,
}]))

const GlobalReset = styled.div`
    font-family: ${p => p.theme.font.fontFamily};
    font-size: ${p => p.theme.font.baseFontSize};
    background-color: ${p => p.theme.body.backgroundColor};
    color: ${p => p.theme.body.color};
    width: 100%;
    overflow: auto;
    * {
        box-sizing: border-box;
        font-size: inherit;
        &:active, &:focus {
            outline: 0 none;
        }
    }
    input, select, button {
        font-family: inherit;
        appearance: none;
        color: inherit;
    }
    select::-ms-expand {
        display: none;
    }
    a {
        text-decoration: none;
        color: inherit;
        &:active, &:visited {
            color: inherit;
        }
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    button {
        cursor: pointer;
        border: 0 none;
        background-color: transparent;
    }
`

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