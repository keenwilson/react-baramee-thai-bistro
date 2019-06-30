import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd'
import WelcomeCarousel from '../components/WelcomeCarousel'
import ContactRow from '../components/ContactRow'
import InThePress from '../components/InThePress'
import WelcomeCarouselMobile from '../components/WelcomeCarouselMobile'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { width: 0, height: 0 }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }
  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }
  render() {
    if (this.state.width > 480)
      return (
        <React.Fragment>
          <Row>
            <Col>
              <WelcomeCarousel />
            </Col>
          </Row>

          <Row className="contact-display">
            <Col>
              <ContactRow />
            </Col>
          </Row>

          <Row className="press-display-row">
            <Col className="press-display-col">
              <InThePress className="press-display" />
            </Col>
          </Row>
        </React.Fragment>
      )
    if (this.state.width <= 480)
      return (
        <React.Fragment>
          <Row>
            <Col>
              <WelcomeCarouselMobile />
            </Col>
          </Row>

          <Row className="contact-display">
            <Col>
              <ContactRow />
            </Col>
          </Row>

          <Row className="press-display-row">
            <Col className="press-display-col">
              <InThePress className="press-display" />
            </Col>
          </Row>
        </React.Fragment>
      )
  }
}

export default Home
