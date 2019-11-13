import React, { Component } from 'react'
import { ExampleComponent, Row, SpacingType, NailsApp } from 'react-nails'

export default class App extends Component {
    render() {
        return (
            <NailsApp>
                <Row inline space={["small"]}>
                    <ExampleComponent text='Modern React component module' />
                    <div>
                        Test: {SpacingType.Small}
                    </div>
                </Row>
                <Row backgroundColor={["positive", "positiveLight", "negative", "grey2"]}>
                    Test
                </Row>
            </NailsApp>
        )
    }
}
