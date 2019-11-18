import { merge, cloneDeep } from 'lodash'
//import { mergeDeep } from 'immutable'

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
        res[id] = merge(res[id] || {}, style)
    })
    // override again with specific values
    return merge(res, theme)
}

const palette = {
    red: "#ff0000",
    redLight: "#ff8888",
    green: "#56d9a3",
    greenLight: "#88ff88",
    grey1: "#1b2025",
    grey2: "#404b57",
    grey3: "#6b7782",
    grey4: "#99A1A8",
    grey5: "#bcc4cc",
    grey6: "#aaaaaa",
    grey7: "#bababa",
    grey8: "#cccccc",
    grey9: "#e8e8e8",
    white1: "#fcfbf9",
    white3: "rgba(255,255,255,0.9)",
    white4: "rgba(255,255,255,0.6)",
    blue1: "#135192",
    blue2: "#4C93E9",
    blue3: "#73A8E7",
    blue4: "#4289DD",
    blue5: "#4392F1",
    white: "#ffffff",
    black: "#000000",
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
    brandColor: palette.blue1,
    primary: palette.blue5,
    textColor: palette.grey1,
    textColorInvert: palette.grey9,
    textColorMedium: palette.grey2,
    headerTextColor: palette.blue1,
    white: palette.white,
    black: palette.black,
    transparent: "transparent",
}

const fontSizes = {
    small: '0.8666em',
    normal: '1em',
    large: '1.133333em',
    xlarge: '1.2em',
    xxlarge: '2.4em',
}

const headerSizes = {
    tiny: fontSizes.normal,
    small: fontSizes.normal,
    medium: fontSizes.large,
    large: "1.73333em",
    huge: "2.133333em",
    massive: "2.266666em",
}

const font = {
    fontFamily: '-apple-system, BlinkMaxSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol"',
    baseFontSize: '15px',
    ...fontSizes,
}

const spaces = {
    none: "0px",
    xsmall: "0.15em",
    small: "0.3em",
    medium: "0.5em",
    large: "0.7em",
    xlarge: "1em",
    xxlarge: "3em",
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
    headerSizes,
}