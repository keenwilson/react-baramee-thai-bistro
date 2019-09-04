import React, { Component } from 'react'
import PropTypes from 'prop-types'
import throttle from 'lodash.throttle'
import DesktopHome from './desktopHome'
import TabletHome from './tabletHome'
import MobileIndex from './mobileIndex'

class ResponsiveHome extends Component {
  state = {
    viewportWidth: 0
  }

  componentDidMount() {
    this.saveViewportDimensions()
    window.addEventListener('resize', this.saveViewportDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.saveViewportDimensions)
  }

  saveViewportDimensions = throttle(() => {
    this.setState({
      viewportWidth: window.innerWidth
    })
  }, this.props.applyViewportChange)

  render() {
    if (this.state.viewportWidth > this.props.tabletBreakPoint) {
      return <DesktopHome />
    }

    if (
      this.state.viewportWidth > this.props.mobileBreakPoint &&
      this.state.viewportWidth <= this.props.tabletBreakPoint
    ) {
      return <TabletHome />
    }

    return <MobileIndex />
  }
}

ResponsiveHome.propTypes = {
  mobileBreakPoint: PropTypes.number,
  tabletBreakPoint: PropTypes.number,
  applyViewportChange: PropTypes.number
}

ResponsiveHome.defaultProps = {
  mobileBreakPoint: 576,
  tabletBreakPoint: 1024,
  applyViewportChange: 250
}
export default ResponsiveHome
