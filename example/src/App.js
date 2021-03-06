import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Types, NailsApp, BodyReset, Inline, Box, Column, Filler, Icon, Text, addIcon, FullScreenContainer, MediaQuery, Grid, ThemeProps, Input, svgIconResolver } from 'react-nails'
import { faCoffee, faChevronUp, faTimes } from '@fortawesome/free-solid-svg-icons'
import Dropdown from './Dropdown'
import { ReactComponent as LogoSvg } from './react-nails-logo.svg'

addIcon([faCoffee, faChevronUp, faTimes])

addIcon({ id: "react-nails-logo", resolver: svgIconResolver, svg: LogoSvg })

const { SpacingType, ItemJustifyType, BorderType, ItemAlignType, TextSizeType, TextWeightType } = Types

const HeaderBar = styled(Box)`
    background-color: ${p => p.theme.colors.brand};

    ${MediaQuery.small`
        background-color: #f0f;
    `}
`

const ColorBox = styled(Box).attrs(() => ({ flex: true }))`
    min-height: 8em;
    align-items: stretch;
    & > * {
        height: 100%;
    }
`

export default class App extends Component {
    render() {
        console.log('LogoSvg', LogoSvg)
        return (
            <NailsApp theme={{ font: { baseFontSize: "18px" }, colors: { yellow: "#ff0" }, spaces: { large: "3em" } }}>
                <BodyReset />
                <FullScreenContainer>
                    <HeaderBar textColor="white" space={SpacingType.Medium}>
                        <Row align={ItemAlignType.Center} itemSpace="medium">
                            <Filler>
                                Headerlogo
                            </Filler>
                            <Icon icon="times" size="medium" />
                            <Icon icon="react-nails-logo" size="massive" />
                        </Row>
                    </HeaderBar>
                    <Filler stretchChild>
                        <Box>
                            <Row space={SpacingType.Medium} itemSpace={SpacingType.Large} align={ItemAlignType.Center}>
                                <Text>
                                    {SpacingType.Small}
                                </Text>
                                <Filler>
                                    Filler
                                </Filler>
                                <Icon icon="coffee" />
                                <Icon icon="chevron-up" />
                                <div>
                                    {SpacingType.Small}<br />
                                    Test
                                </div>
                            </Row>
                            <Row space={SpacingType.Medium} align="center" itemSpace="xxlarge">
                                <Input placeholder="TEst" suffix="€" prefix={<Icon icon="times" color="negative" size="small" />} textAlign="right" />
                                <Dropdown />
                            </Row>
                            <Row>
                                <Input placeholder="TEst" suffix="€" prefix={<Icon icon="times" color="negative" size="small" />} textAlign="right" as="textarea" fluid />
                            </Row>
                            <Row space={SpacingType.Medium} itemSpace={SpacingType.Large} justify={ItemJustifyType.Stretch}>
                                <div>
                                    {SpacingType.Small}
                                </div>
                                <div>
                                    Test
                                </div>
                                <div>
                                    {SpacingType.Small}<br />
                                    Test
                                </div>
                            </Row>
                            <Column lineSpace={SpacingType.Large}>
                                <Box backgroundColor={["positive", "positiveLight", "negative", "unknown"]} space={[SpacingType.Small, SpacingType.Small, SpacingType.Medium]}>
                                    <Text textColor="white" textSize={TextSizeType.Large} textWeight={TextWeightType.Bold}> Test</Text>
                                </Box>
                                <Box space={SpacingType.Medium} backgroundColor="negativeLight" rounded inline>
                                    <Inline itemSpace={SpacingType.Medium} backgroundColor="positiveLight" lineSpace={SpacingType.XSmall}>
                                        <Box backgroundColor="primary" space={SpacingType.Small} rounded>
                                            <Inline align={ItemAlignType.Center} itemSpace={SpacingType.XSmall}>
                                                <Text textWeight={TextWeightType.Bold}>Badge</Text>
                                                <Text textSize={TextSizeType.Small}><Icon icon="times" /></Text>
                                            </Inline>
                                        </Box>
                                        <Box backgroundColor="positiveLight" space={SpacingType.XSmall}>
                                            {SpacingType.Medium}
                                        </Box>
                                        <Box backgroundColor="positiveLight" space={SpacingType.XSmall}>
                                            {SpacingType.Large}
                                        </Box>
                                        <Box backgroundColor="positiveLight" space={SpacingType.XSmall}>
                                            {SpacingType.Small}
                                        </Box>
                                        <Box backgroundColor="positiveLight" space={SpacingType.XSmall}>
                                            {SpacingType.Small}
                                        </Box>
                                        <Box backgroundColor="blue" space={SpacingType.XSmall}>
                                            {SpacingType.Small}
                                        </Box>
                                        <Box backgroundColor="positiveLight" space={SpacingType.XSmall}>
                                            {SpacingType.Small}
                                        </Box>
                                        <Box backgroundColor="blue" space={SpacingType.XSmall}>
                                            {SpacingType.Small}
                                        </Box>
                                        <Box backgroundColor="positiveLight" space={SpacingType.XSmall}>
                                            {SpacingType.Small}
                                        </Box>
                                        <Box backgroundColor="positiveLight" space={SpacingType.XSmall}>
                                            {SpacingType.Small}
                                        </Box>
                                        <Box backgroundColor="yellow" space={SpacingType.XSmall}>
                                            {SpacingType.Small}
                                        </Box>
                                        <Box backgroundColor="blue" space={SpacingType.XSmall}>
                                            {SpacingType.Large}
                                        </Box>
                                    </Inline>
                                    <div>Test</div>
                                </Box>
                            </Column>
                            <Box space={SpacingType.Large} backgroundColor="positiveLight">
                                <div>Test</div>
                            </Box>
                            <Column space={SpacingType.Medium} lineSpace={SpacingType.Medium}>
                                <div>Col1</div>
                                <Filler>Fill</Filler>
                                <div>Col2</div>
                            </Column>
                            <Box border={BorderType.Thick} borderColor="negativeLight" backgroundColor="positive" rounded>
                                BorderBox
                            </Box>
                            <Box border={[BorderType.None, BorderType.Thin, BorderType.Thin]} borderColor="negative" inline space={SpacingType.Small}>
                                BorderBox
                                <Icon icon="coffee" />
                            </Box>
                            <Box space="large">
                                <Grid columns={12} itemSpace={["small", "medium"]} lineSpace={["small", "medium"]}>
                                    <Grid.Row>
                                        <ThemeProps>
                                            {(theme) => (
                                                Object.entries(theme.colors).map(([col, value]) =>
                                                    <Grid.Column width={[6, 3, 2]} key={col}>
                                                        <ColorBox backgroundColor={col} space="medium" textColor={col === "textColor" ? "textColorInvert" : "textColor"} rounded>
                                                            <Filler stretchChild>
                                                                <Column>
                                                                    <Text textWeight="bold">{col}</Text>
                                                                    <Filler align={ItemAlignType.Bottom} stretchChild>
                                                                        <Text textAlign="right" block>{value}</Text>
                                                                    </Filler>
                                                                </Column>
                                                            </Filler>
                                                        </ColorBox>
                                                    </Grid.Column>
                                                )
                                            )}
                                        </ThemeProps>
                                    </Grid.Row>
                                </Grid>
                            </Box>
                        </Box>
                    </Filler>
                </FullScreenContainer>
            </ NailsApp >
        )
    }
}
