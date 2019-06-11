import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd'
import WelcomeCarousel from '../components/WelcomeCarousel'
import ContactRow from '../components/ContactRow'
import InThePress from '../components/InThePress'

class Home extends Component {
  state = {}
  render() {
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

        <Row>
          <Col>
            <InThePress />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Home
