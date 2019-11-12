import React, { Component } from 'react'
import { ExampleComponent, Row, SpacingType } from 'react-nails'
import { ThemeProvider } from 'styled-components'

export default class App extends Component {
    render() {
        return (
            <ThemeProvider theme={{ t: SpacingType.Small }}>
                <Row inline space={['small']}>
                    <ExampleComponent text='Modern React component module' />
                    <div>
                        Test: {SpacingType.Small}
                    </div>
                </Row>
            </ThemeProvider>
        )
    }
}
