import { css } from "styled-components"
import { times } from 'lodash'
import MediaQuery, { BreakPoint } from "../layout/MediaQuery"
import { BorderType, SpacingType, ItemAlignType, ItemJustifyType } from "./PropertyTypes"

export type ResolverFunc = (value?: any, props?: any) => any
export const applySingle = (func: ResolverFunc, propName: string, discardNull: boolean = true): any => (props: any) => {
    const propObject: any = props[propName]
    if (discardNull && !propObject) {
        return null
    }
    return func(propObject, props)
}

export const applyMediaQuery = (func: ResolverFunc, propName: string, discardNull: boolean = true): any => (props: any) => {
    const mediaBreakPoints: string[] = Object.keys(BreakPoint)
    const propObject: any = props[propName]
    if (discardNull && !propObject) {
        return null
    }
    if (Array.isArray(propObject)) {
        if (propObject.length > 0 && propObject.length < mediaBreakPoints.length) {
            const lastValue: any = propObject[propObject.length - 1]
            times(mediaBreakPoints.length - propObject.length, () => propObject.push(lastValue))
        }
        return propObject.reduce<any>((res, s, idx): any => css`
                ${res}
                ${MediaQuery[mediaBreakPoints[idx]]`
                    ${func(s, props)}
                `}
            `, undefined)
    }
    return func(propObject, props)
}

const resolveSpaceSingle = (space: SpacingType = SpacingType.None) => css`
    padding: ${p => p.theme.spaces[space]};
`
export const resolveSpace = applyMediaQuery(resolveSpaceSingle, 'space')

const resolveBackgroundColorSingle = (color: string = "unknown") => css`
    background-color: ${p => p.theme.colors[color] || p.theme.colors.unknown};
`
export const resolveBackgroundColor = applyMediaQuery(resolveBackgroundColorSingle, 'backgroundColor')

const resolveAlignItemsSingle = (align: ItemAlignType = ItemAlignType.Center) => css`
    align-items: ${align};
`
export const resolveAlignItems = applySingle(resolveAlignItemsSingle, 'align')

const resolveJustifyItemsSingle = (justify: ItemJustifyType = ItemJustifyType.Stretch) => css`
    justify-content: ${justify};
`
export const resolveJustifyItems = applySingle(resolveJustifyItemsSingle, 'justify')

const resolveItemSpaceSingle = (itemSpace: SpacingType = SpacingType.None) => css`
    & > * {
        margin-right: ${p => p.theme.spaces[itemSpace]};
        &:last-child {
            margin-right: 0;
        }
    }
`
export const resolveItemSpace = applyMediaQuery(resolveItemSpaceSingle, 'itemSpace')

const resolveLineSpaceSingle = (lineSpace: SpacingType = SpacingType.None) => css`
    & > * {
        margin-bottom: ${p => p.theme.spaces[lineSpace]};
    }
`
export const resolveLineSpace = applyMediaQuery(resolveLineSpaceSingle, 'lineSpace')

const buildBorderEntry = (borderPart: string, border: BorderType, borderColor: string) => css`
    ${borderPart}: ${p => p.theme.borders[border]} solid ${p => p.theme.colors[borderColor]};
`

const resolveBorderSingle = (border: BorderType | BorderType[] = BorderType.None, props: { borderColor: string }) => {
    if (Array.isArray(border)) {
        switch (border.length) {
            case 1:
                return buildBorderEntry('border', border[0], props.borderColor)
            case 2:
                return css`
                    ${buildBorderEntry('border-top', border[0], props.borderColor)}
                    ${buildBorderEntry('border-right', border[1], props.borderColor)}
                    ${buildBorderEntry('border-bottom', border[0], props.borderColor)}
                    ${buildBorderEntry('border-left', border[1], props.borderColor)}
                `
            case 3:
                return css`
                    ${buildBorderEntry('border-top', border[0], props.borderColor)}
                    ${buildBorderEntry('border-right', border[1], props.borderColor)}
                    ${buildBorderEntry('border-bottom', border[2], props.borderColor)}
                    ${buildBorderEntry('border-left', border[1], props.borderColor)}
                `
            case 4:
                return css`
                    ${buildBorderEntry('border-top', border[0], props.borderColor)}
                    ${buildBorderEntry('border-right', border[1], props.borderColor)}
                    ${buildBorderEntry('border-bottom', border[2], props.borderColor)}
                    ${buildBorderEntry('border-left', border[3], props.borderColor)}
                `
        }
    } else {
        if (border !== BorderType.None && props.borderColor) {
            return buildBorderEntry('border', border, props.borderColor)
        }
    }
    return null
}
export const resolveBorder = applySingle(resolveBorderSingle, 'border')

const resolveTextColorSingle = (textColor: string = "unknown") => css`
    color: ${p => p.theme.colors[textColor]};
`
export const resolveTextColor = applySingle(resolveTextColorSingle, 'textColor')
