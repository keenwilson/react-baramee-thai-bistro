import React from 'react'
import { Row, Col, Icon } from 'antd'

const ContactFooter = () => {
  return (
    <Row gutter={16}>
      <Col span={8}>
        <div className="footer-block">
          <h3 className="h3-block text-align-center">Location</h3>
          <p className="text-align-center footer-detail">
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
        </div>
      </Col>
      <Col span={8}>
        <div className="footer-block">
          <h3 className="h3-block text-align-center">Hours</h3>
          <p className="text-align-center footer-detail">
            Monday - Thursday | 11 am - 9pm <br />
            Friday - Saturday | 11 am - 10pm
            <br />
            Sunday | Closed
          </p>
        </div>
      </Col>
      <Col span={8}>
        <div className="footer-block">
          <h3 className="h3-block text-align-center">Contact</h3>
          <p className="text-align-center footer-detail">
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
        </div>
      </Col>
    </Row>
  )
}

export default ContactFooter
