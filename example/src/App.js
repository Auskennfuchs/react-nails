import React, { Component } from 'react'
import { ExampleComponent, Row, SpacingType, baseTheme } from 'react-nails'
import { ThemeProvider } from 'styled-components'

export default class App extends Component {
    render() {
        return (
            <ThemeProvider theme={baseTheme}>
                <Row inline space={["small"]}>
                    <ExampleComponent text='Modern React component module' />
                    <div>
                        Test: {SpacingType.Small}
                    </div>
                </Row>
                <Row backgroundColor={["positive", "positiveLight", "negative"]}>
                    Test
                </Row>
            </ThemeProvider>
        )
    }
}
