import React, { Component } from 'react'
import { Row, SpacingType, NailsApp, BodyReset } from 'react-nails'

export default class App extends Component {
    render() {
        return (
            <NailsApp theme={{ colors: { unknown: "#ff0" } }}>
                <BodyReset />
                <Row inline space={["small"]} backgroundColor="positiveLight">
                    <div>
                        Test: {SpacingType.Small}
                    </div>
                </Row>
                <Row backgroundColor={["positive", "positiveLight", "negative", "unknown"]} space={["small", "small", "medium"]}>
                    Test
                </Row>
            </NailsApp>
        )
    }
}
