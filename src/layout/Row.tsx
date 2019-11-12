import styled, { css } from 'styled-components'
import MediaQuery from './MediaQuery'
import { times } from 'lodash'

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
    ${space === SpacingType.Small ? css`
        padding: 1em;
    `: ''}
    ${space === SpacingType.Medium && css`
        padding: 1.5em;
    `}
`

type MediaQueryFunc = (space?: SpacingType) => any

const applyMediaQuery = (func: MediaQueryFunc): any => ({ space }: Spacing) => {
    const spaceOrder: string[] = Object.keys(SpacingType)
    if (Array.isArray(space)) {
        if (space.length > 0 && space.length < spaceOrder.length) {
            const lastValue: SpacingType = space[space.length - 1]
            times(spaceOrder.length - space.length, () => {
                space.push(lastValue)
            })
        }
        return space.reduce<any>((res, s, idx): any => css`
           ${res}
           ${MediaQuery[spaceOrder[idx]]`
                ${func(s)}
            `}
        `, undefined)
    }
    return func(space)
}

const space = applyMediaQuery(singleSpace)

interface RowProps extends Spacing {
    /**
     * inline makes Row only as long as needed
     */
    inline?: boolean,
}

export const Row = styled.div<RowProps>`
    display: ${ p => p.inline ? "inline-flex" : "flex"};
    ${space}
`