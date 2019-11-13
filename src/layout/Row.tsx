import styled, { css } from 'styled-components'
import { times } from 'lodash'
import MediaQuery from './MediaQuery'

export enum SpacingType {
    Small = "small",
    Medium = "medium",
    Large = "large",
}

interface Spacing {
    /**
     * space set padding for inner elements to own border
     * [none, small, medium, large]
     */
    space?: SpacingType | SpacingType[]
}

const singleSpace = (space?: SpacingType) => css`
    ${space === SpacingType.Small && css`
        padding: 1em;
    `}
    ${space === SpacingType.Medium && css`
        padding: 1.5em;
    `}
`

const singleBackgroundColor = (color?: string) => css`
    background-color: ${p => p.theme.colors[color || "unknown"]};
`

type MediaQueryFunc = (value?: any) => any

const applyMediaQuery = (func: MediaQueryFunc, propName: string): any => (props: any) => {
    const spaceOrder: string[] = Object.keys(SpacingType)
    const propObject: any = props[propName]
    if (!propObject) {
        return null
    }
    if (Array.isArray(propObject)) {
        if (propObject.length > 0 && propObject.length < spaceOrder.length) {
            const lastValue: any = propObject[propObject.length - 1]
            times(spaceOrder.length - propObject.length, () => propObject.push(lastValue))
        }
        return propObject.reduce<any>((res, s, idx): any => css`
           ${MediaQuery[spaceOrder[idx]]`
                ${func(s)}
            `}
            ${res}
            `, undefined)
    }
    return func(propObject)
}

const space = applyMediaQuery(singleSpace, 'space')

const backgroundColor = applyMediaQuery(singleBackgroundColor, 'backgroundColor')

interface RowProps extends Spacing {
    /**
     * inline makes Row only as long as needed
     */
    inline?: boolean,
    /**
     * defines background color for element
     */
    backgroundColor?: string,
}

export const Row = styled.div<RowProps>`
    display: ${ p => p.inline ? "inline-flex" : "flex"};
    ${space}
    ${backgroundColor}
`