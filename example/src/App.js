import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Types, NailsApp, BodyReset, Inline, Box, Column, Filler, Icon, Text } from 'react-nails'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faChevronUp, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add({ faCoffee, faChevronUp, faTimes })

const { SpacingType, ItemJustifyType, BorderType, ItemAlignType, TextSizeType, TextWeightType } = Types

const FullScreenContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

const HeaderBar = styled(Box)`
    background-color: ${p => p.theme.colors.brandColor};
`

export default class App extends Component {
    render() {
        return (
            <NailsApp theme={{ font: { baseFontSize: "12px" }, colors: { yellow: "#ff0" }, spaces: { large: "3em" } }}>
                <BodyReset />
                <FullScreenContainer>
                    <HeaderBar textColor="white" space={SpacingType.Medium}>
                        <Row align={ItemAlignType.Center}>
                            <Filler>
                                Headerlogo
                            </Filler>
                            <Icon icon="coffee" />
                        </Row>
                    </HeaderBar>
                    <Filler stretchChild>
                        <div>
                            <Row space={SpacingType.Medium} itemSpace={SpacingType.Large} align={ItemAlignType.Center}>
                                <div>
                                    {SpacingType.Small}
                                </div>
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
                        </div>
                    </Filler>
                </FullScreenContainer>
            </ NailsApp >
        )
    }
}
