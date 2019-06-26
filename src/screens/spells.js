import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import posed from 'react-pose'

import Layout from './layout'

// width: ${props => (props.size ? `${props.size}px` : '40px')}
const Circle = styled.div`
  width: ${props => (props.size ? `${props.size}px` : '40px')};
  height: ${props => (props.size ? `${props.size}px` : '40px')};
  background-color: ${props =>
    props.color ? props.color : props.theme.color.circle};
  margin: 30px;
  border-radius: ${props => (props.size ? `${props.size / 2}px` : '20px')};
`
const Square = styled.div`
  width: ${props => (props.size ? `${props.size}px` : '40px')};
  height: ${props => (props.size ? `${props.size}px` : '40px')};
  background-color: ${props =>
    props.theme.color[props.themeColor]
      ? props.theme.color[props.themeColor]
      : props.theme.color.circle};
  margin: 30px;
`

const CircleAnimated = posed(Circle)({
  visible: { opacity: 1, scale: 4, transition: { duration: 2000 } },
  hidden: { opacity: 0.2, scale: 1, transition: { duration: 2000 } }
})

const CircleAnimatedDrag = posed(Circle)({
  hoverable: true,
  draggable: 'x',
  dragBounds: { left: '-100%', right: '100%' },
  init: { scale: 1 },
  hover: { scale: 1.9 },
  drag: { scale: 1.1 }
})

export default class Spells extends Component {
  static propTypes = {}

  state = {
    circleAnimation: 'visible'
  }

  componentDidMount() {
    this.animationInterval = setInterval(() => {
      this.setState({
        circleAnimation:
          this.state.circleAnimation === 'visible' ? 'hidden' : 'visible'
      })
    }, 2000)
  }

  componentWillUnmount() {
    clearInterval(this.animationInterval)
  }

  render() {
    return (
      <Layout>
        <CircleAnimated pose={this.state.circleAnimation} />
        <CircleAnimatedDrag />
      </Layout>
    )
  }
}
