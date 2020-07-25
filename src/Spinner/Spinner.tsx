import * as React from 'react'
import styled, { css } from 'styled-components'
import { SizeProps, SizeType } from 'properties/PropertyTypes'
import { addThemeComponent } from 'theme'
import { StyleHelper } from 'Style'

addThemeComponent(() => ['spinner', {
    sizes: {
        [SizeType.Tiny]: "0.8rem",
        [SizeType.Small]: "1.389rem",
        [SizeType.Medium]: "1.7rem",
        [SizeType.Large]: "5.5rem",
        [SizeType.Huge]: "8.3333rem",
        [SizeType.Massive]: "12.5rem",
    }
}])

interface SpinnerProps extends SizeProps {
    /**
     * color of spinner
     */
    color?: string,
    /**
     * displays spinner as centered absolute element
     */
    absolute?: boolean,
}

const SpinnerWrapper = styled.div<SizeProps & { absolute?: boolean }>`
    width: ${p => p.theme.spinner.sizes[p.size || SizeType.Medium]};
    height: ${p => p.theme.spinner.sizes[p.size || SizeType.Medium]};
    ${p => p.absolute && css`
        ${StyleHelper.centerAbsolute};
    `}
    z-index: 1000;
`

const SpinnerLoader = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    &:before {
        content: '';
        display: block;
        padding-top: 100%;
    }
`

const SpinnerAnimation = styled.svg<SpinnerProps>`
    animation: rotate 2s linear infinite;
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    stroke: ${p => p.theme.colors[p.color || p.theme.colors.unknown]};

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes dash {
        0% {
            stroke-dasharray: 1,200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89,200;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 89,200;
            stroke-dashoffset: -124;
        }
    }
`

const SpinnerCircle = styled.circle`
    stroke-dasharray: 1,200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    stroke-linecap: round;
`

const Spinner: React.FC<SpinnerProps> = ({ color = "text", size = SizeType.Medium, ...rest }: SpinnerProps) => (
    <SpinnerWrapper {...rest} size={size}>
        <SpinnerLoader>
            <SpinnerAnimation viewBox="25 25 50 50" color={color}>
                <SpinnerCircle cx={50} cy={50} r={20} fill="none" strokeWidth={5} />
            </SpinnerAnimation>
        </SpinnerLoader>
    </SpinnerWrapper>
)

export default Spinner