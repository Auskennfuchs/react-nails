import * as React from 'react'
import { useEffect, useState } from 'react'
import styled, { css } from "styled-components"
import { resolveSpace, resolveBackgroundColor, applySingle, resolveBorder, resolveTextColor, resolveTextAlign, applyMediaQuery } from "../properties/PropertyResolver"
import { addThemeComponent } from "../theme"
import { SpacingProps, BackgroundColorProps, BorderProps, TextColorProps, TextAlignProps } from "../properties/PropertyTypes"

addThemeComponent((theme: { borderRadius: string }) => (['box', {
    borderRadius: theme.borderRadius,
}]))


export interface NailsBoxProps extends SpacingProps, BackgroundColorProps, BorderProps, TextColorProps, TextAlignProps {
    /**
     * rounded border
     */
    rounded?: boolean,

    /**
     * inlines element
     */
    inline?: boolean,

    /**
     * sets display mode flex for element
     */
    flex?: boolean,

    /**
     * expand the element to 100% of height and width
     */
    stretch?: boolean,

    /**
     * set Box to position:relative
     */
    relative?: boolean,
}

export interface BoxProps extends NailsBoxProps {
    /**
     * rendering element
     */
    as?: typeof React.Component | React.FunctionComponent | any,
    /**
     * width of box inside container. Has to be a ratio or list of ratios, e.g "1/2"
     */
    width?: string | string[],
}

type WidthType = string | string[] | null | (string | null)[]
type WidthInputType = string | string[] | null

const resolveRounded = (rounded: boolean = false) => rounded && css`
    border-radius: ${p => p.theme.box.borderRadius};
`

const resolveInline = (inline: boolean = false) => inline && css`
    display: inline-block;
`

const resolveFlex = (flex: boolean = false) => flex && css`
    display: flex;
`

const resolveStretch = (stretch: boolean = false) => stretch && css`
    width: 100%;
    height: 100%;
`

const resolveWidth = (boxWidth: string) => `
    width: ${boxWidth};
`

const resolveRelative = (relative: boolean) => relative && css`
    position: relative;
`

export const NailsBox = styled.div<NailsBoxProps & { boxWidth: WidthType }>`
    overflow: hidden;
    ${applySingle(resolveInline, 'inline')}
    ${applySingle(resolveFlex, 'flex')}
    ${resolveSpace}
    ${resolveBackgroundColor}
    ${applySingle(resolveRounded, 'rounded')}
    ${resolveBorder}
    ${resolveTextColor}
    ${resolveTextAlign}
    ${applyMediaQuery(resolveWidth, 'boxWidth')}
    ${applySingle(resolveStretch, 'stretch')}
    ${applySingle(resolveRelative, 'relative')}
`

const Box: React.FC<BoxProps> = ({ as: Element = NailsBox, width, innerRef, ref, ...rest }: BoxProps) => {

    const [boxWidth, setBoxWidth] = useState<WidthType>(null)

    const resolveWidthEntry = (width: string): string | null => {
        const parts = width.split("/")
        if (parts.length !== 2) {
            return width
        }
        const n1 = Number(parts[0])
        const n2 = Number(parts[1])
        if (isNaN(n1) || isNaN(n2)) {
            return null
        }
        return `${n1 / n2 * 100}%`
    }

    const convertBoxWidth = (width: WidthInputType | undefined): WidthType => {
        if (!width || !(typeof width === "string" || Array.isArray(width))) {
            return null
        }

        if (Array.isArray(width)) {
            return width.map(w => resolveWidthEntry(w))
        } else {
            return resolveWidthEntry(width)
        }
    }

    useEffect(() => {
        setBoxWidth(convertBoxWidth(width))
    }, [width])

    return (
        <Element boxWidth={boxWidth} {...rest} ref={innerRef || ref} />
    )
}

export default Box