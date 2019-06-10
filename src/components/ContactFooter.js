import React from 'react'
import { Row, Col, Icon } from 'antd'

const ContactFooter = () => {
  return (
    <Row gutter={16}>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 24 }}
        lg={{ span: 8 }}
      >
        <p className="text-align-center footer-block">
          1810 Baltimore Avenue <br />
          Kansas City, MO 64108 <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://goo.gl/maps/CyMK6AsboFsqGcTj7"
          >
            Get Directions
          </a>
        </p>
      </Col>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 24 }}
        lg={{ span: 8 }}
      >
        <p className="text-align-center footer-block">
          Monday - Thursday | 11 am - 9pm <br />
          Friday - Saturday | 11 am - 10pm
          <br />
          Sunday | Closed
        </p>
      </Col>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 24 }}
        lg={{ span: 8 }}
      >
        <p className="text-align-center footer-block">
          (816) 442-7070 <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/barameethaibistro/"
          >
            Send <Icon type="facebook" /> Message
          </a>
          <br />
        </p>
      </Col>
    </Row>
  )
}

export default ContactFooter
