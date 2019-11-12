/**
 * @class ExampleComponent
 */

import * as React from 'react'
import { Row } from './layout'
export * from './layout'

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
