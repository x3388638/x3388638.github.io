import React from 'react'
import About from '../About'
// import Loading from '../Loading'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// import fetch from 'isomorphic-fetch'

Enzyme.configure({ adapter: new Adapter() })

describe('About component', () => {
  test('render', () => {
    const wrapper = shallow(<About />)
    expect(wrapper.exists()).toBe(true)
  })

  test('loading spinner', () => {
    // TODO
  })
})
