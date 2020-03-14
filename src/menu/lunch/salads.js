import React from 'react'
import { Row, Col, Divider } from 'antd'
import Thumbnail from '../../components/thumbnail'

const LunchSalads = () => {
  return (
    <React.Fragment>
      <Row className="menu-display">
        <Divider className="menu-display-time">Lunch</Divider>
        <h1 className="menu-display-category">Salads</h1>
      </Row>
      <Row type="flex" justify="center" align="top" className="menu-display">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Papaya Salad</h1>
          <p className="menu-display-description">
            Freshly shredded papaya complemented by tomatoes, garlic, chilies
            and roasted peanuts. Made in a tangy fish sauce or vegetarian sweet
            sauce. Served with sticky rice.
            <br />
            <Thumbnail
              imagePath="https://i.imgur.com/95HBgrZ.jpg"
              imageAlt="Papaya Salad"
              isPortrait={false}
            />
          </p>
          <p className="menu-price text-align-center">$12.99</p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Cucumber Salad</h1>
          <p className="menu-display-description">
            Freshly Shredded Cucumber complemented by tomatos, garlic, chillies
            and roasted peanuts. Made in a tangy fish sauce or vegetarian sweet
            sauce. Served with sticky rice.
            <br />
          </p>
          <p className="menu-price text-align-center">$12.99</p>
        </Col>
      </Row>
      <Row type="flex" justify="center" align="top" className="menu-display">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Labb Isaan</h1>
          <p className="menu-display-description">
            Traditional north eastern dish of finely chopped chicken, pork or
            beef mixed together with ground roasted rice, coriander and chili.
            <br />
            <Thumbnail
              imagePath="https://i.imgur.com/s6CZ1lM.jpg"
              imageAlt="Labb Isaan"
              isPortrait={false}
            />
          </p>
          <p className="menu-price text-align-center" />
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        ></Col>
      </Row>
    </React.Fragment>
  )
}

export default LunchSalads
