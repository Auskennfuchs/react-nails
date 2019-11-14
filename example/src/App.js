import React, { Component } from 'react'
import { Row, Layout, NailsApp, BodyReset, Inline, Box } from 'react-nails'

const { SpacingType } = Layout

export default class App extends Component {
    render() {
        return (
            <NailsApp theme={{ colors: { unknown: "#ff0" }, borderRadius: "10px" }}>
                <BodyReset />
                <Row space={SpacingType.Medium}>
                    <Inline space={SpacingType.Medium} backgroundColor="positiveLight">
                        <div>
                            {SpacingType.Small}
                        </div>
                        <div>
                            {SpacingType.Medium}<br />
                            Test
                        </div>
                    </Inline>
                </Row>
                <Row backgroundColor={["positive", "positiveLight", "negative", "unknown"]} space={["small", "small", "medium"]}>
                    Test
                </Row>
                <Box space={SpacingType.Large} backgroundColor="negativeLight" rounded>
                    <Inline space={SpacingType.Medium} backgroundColor="positiveLight" lineSpace={SpacingType.XSmall}>
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
            </ NailsApp>
        )
    }
}
