import { merge, cloneDeep } from 'lodash'

export type ThemeFuncResult = [string, object]

export type ThemeFunc = (res: object) => ThemeFuncResult

const themeFuncs: ThemeFunc[] = []

export const addThemeComponent = (func: ThemeFunc) => {
    themeFuncs.unshift(func)
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
    green: "#56d9a3",
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
    blue: "#135192",
    blueLight: "#4392F1",
    white: "#fff",
    black: "#000",
    yellow: "#fddf01",
    yellowLight: "#fef4c2",
}

const colors = {
    negative: palette.red,
    negativeLight: palette.redLight,
    positive: palette.green,
    positiveLight: palette.greenLight,
    info: palette.yellow,
    infoLight: palette.yellowLight,    
    unknown: '#f0f',
    brandColor: palette.blue,
    primary: palette.blueLight,
    textColor: palette.grey1,
    textColorInvert: palette.grey8,
    textColorMedium: palette.grey2,
    white: palette.white,
    black: palette.black,
}

const fontSizes = {
    small: '0.8666em',
    normal: '1em',
    large: '1.133333em',
    xlarge: '1.2em',
    xxlarge: '2.4em',
}

const font = {
    fontFamily: '-apple-system, BlinkMaxSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol"',
    baseFontSize: '15px',
    ...fontSizes,
}

const spaces = {
    none: "0px",
    xsmall: "0.3em",
    small: "0.5em",
    medium: "0.7em",
    large: "1em",
}

const borders = {
    none: "0",
    thin: "1px",
    medium: "2px",
    thick: "3px",
}

export const baseTheme = {
    palette,
    colors,
    font,
    spaces,
    borders,
    borderRadius: "4px",
}