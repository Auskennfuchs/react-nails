import * as React from 'react'
import { Row } from './layout'
export * from './NailsApp'
export * from './layout'
export * from './Responsive'
export * from './theme'

export type Props = { text: string }

export class ExampleComponent extends React.Component<Props> {
  render() {
    const { text } = this.props

    return (
      <Row>
        Example Component: {text}
      </Row>
    )
  }
}