import {Menu} from '../../../src/menu'
import {mount} from 'enzyme'
import {expect} from 'chai'

describe('Menu', () => {
  it('render test', () => {
    const wrapper = mount(<Menu />)
    expect(wrapper.find('li').length).to.eql(10)
  })
})