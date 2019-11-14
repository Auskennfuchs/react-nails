import React, { Component } from 'react'
import { Row, Types, NailsApp, BodyReset, Inline, Box, Column, Filler } from 'react-nails'

const { SpacingType, ItemJustifyType, BorderType } = Types

export default class App extends Component {
    render() {
        return (
            <NailsApp theme={{ font: { baseFontSize: "12px" } }}>
                <BodyReset />
                <Row space={SpacingType.Medium} itemSpace={SpacingType.Large}>
                    <div>
                        {SpacingType.Small}
                    </div>
                    <Filler>
                        Filler
                    </Filler>
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
                <Box backgroundColor={["positive", "positiveLight", "negative", "unknown"]} space={["small", "small", "medium"]}>
                    Test
                </Box>
                <Box space={SpacingType.Large} backgroundColor="negativeLight" rounded inline>
                    <Inline itemSpace={SpacingType.Medium} backgroundColor="positiveLight" lineSpace={SpacingType.XSmall}>
                        <Box backgroundColor="positiveLight" space={SpacingType.XSmall}>
                            {SpacingType.Small}
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
                        <Box backgroundColor="positiveLight" space={SpacingType.XSmall}>
                            {SpacingType.Small}
                        </Box>
                        <Box backgroundColor="blue" space={SpacingType.XSmall}>
                            {SpacingType.Large}
                        </Box>
                    </Inline>
                    <div>Test</div>
                </Box>
                <Box space={SpacingType.Large} backgroundColor="positiveLight">
                    <div>Test</div>
                </Box>
                <Column space={SpacingType.Medium} lineSpace={SpacingType.Medium}>
                    <div>Col1</div>
                    <Filler>
                        Fill
                    </Filler>
                    <div>Col2</div>
                </Column>
                <Box border={BorderType.Thick} borderColor="negativeLight" backgroundColor="positive" rounded>
                    BorderBox
                </Box>
                <Box border={[BorderType.None, BorderType.Thin, BorderType.Thin]} borderColor="negative" inline space={SpacingType.Small}>
                    BorderBox
                </Box>
            </ NailsApp>
        )
    }
}
