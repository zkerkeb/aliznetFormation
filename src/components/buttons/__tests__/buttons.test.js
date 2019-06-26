import React from 'react'
import { MenuButtons } from '../index'

import { shallow } from 'enzyme'

let spy

// afterEach(() => {
//   spy.mockClear()
// })

it('should match the snapshot', () => {
  const component = shallow(<MenuButtons />)
  expect(component).toMatchSnapshot()
})

it('should have one span', () => {
  const component = shallow(<MenuButtons />)
  // .find retourne un tableau
  const spanElement = component.find('span')
  expect(spanElement.length).toEqual(1)
})

it('should have one div with a className called menuButton', () => {
  const component = shallow(<MenuButtons />)
  const divElement = component.find('div.menuButton')
  expect(divElement.length).toEqual(1)
})

it('should have text in span that matches the label props', () => {
  const component = shallow(<MenuButtons label="coco" />)
  const span = component.find('span')
  // retourne le text entre les div
  expect(span.text()).toBe('coco')
})

it('should call onClick function when the button is clicked', () => {
  const onClickMock = jest.fn()

  const component = shallow(<MenuButtons onClick={onClickMock} label="coco" />)
  component.find('div').simulate('click')

  expect(onClickMock).toHaveBeenCalled()
})

it('component did mount must be called once', () => {
  spy = jest.spyOn(MenuButtons.prototype, 'componentDidMount')
  const component = shallow(<MenuButtons />)
  expect(spy).toHaveBeenCalledTimes(1)
})
