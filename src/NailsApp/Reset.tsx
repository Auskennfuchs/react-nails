import styled, { createGlobalStyle } from "styled-components"

export const GlobalReset = styled.div`
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
    }
`

export const BodyReset = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
`