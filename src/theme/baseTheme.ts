import { merge, cloneDeep } from 'lodash'

export type ThemeFuncResult = [string, object]

export type ThemeFunc = (res: object) => ThemeFuncResult

const themeFuncs: ThemeFunc[] = []

export const addThemeComponent = (func: ThemeFunc) => {
    themeFuncs.push(func)
}

export const resolveTheme = (theme: object = {}): object => {
    const res: object = merge(cloneDeep(baseTheme), cloneDeep(theme))
    themeFuncs.forEach(tf => {
        const [id, style] = tf(res)
        res[id] = style
    })
    // override again with specific values
    return merge(res, theme)
}

const palette = {
    red: "#f00",
    redLight: "#f88",
    green: "#0f0",
    greenLight: "#8f8",
    grey1: "#1b2025",
    grey2: "#404b57",
    grey3: "#6b7782",
    grey4: "#99A1A8",
    grey5: "#bcc4cc",
    grey6: "#aaaaaa",
    grey7: "#bababa",
    grey8: "#e8e8e8",
    white1: "#fcfbf9",
    white2: "#cccccc",
    white3: "rgba(255,255,255,0.9)",
}

const colors = {
    negative: palette.red,
    negativeLight: palette.redLight,
    positive: palette.green,
    positiveLight: palette.greenLight,
    unknown: '#f0f',
}

const fontSizes = {
    small: '0.8em',
    medium: '1em',
    large: '1.2em',
    xlarge: '1.5em',
}

const font = {
    fontFamily: '-apple-system, BlinkMaxSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol"',
    baseFontSize: '1em',
    ...fontSizes,
}

const spaces = {
    none: "0",
    small: "0.3em",
    medium: "0.5em",
    large: "1em",
}

export const baseTheme = {
    palette,
    colors,
    font,
    spaces,
}