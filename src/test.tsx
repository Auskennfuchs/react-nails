import * as React from 'react'
import { shallow, configure } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

import { Row, SpacingType } from './layout'

configure({ adapter: new Adapter() })

describe('Row', () => {
  it('is truthy', () => {
    expect(Row).toBeTruthy()
  })
})

test('small row', () => {
  const smallRow = shallow(<Row space={[SpacingType.Small, SpacingType.Medium]} ><span>Hello</span></Row>).contains(<span>Hello</span>)
  expect(smallRow).toBeTruthy()
})