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
          <h1 className="menu-display-name">
            Tiger Cry Beef or Chicken as a Salad
          </h1>
          <p className="menu-display-description">
            Enjoy our signature Tiger Cry Beef as a light meal. We add extra
            sliced cabbage and more of our spicy homemade chili sauce for a
            quick and delicious salad.
            <br />
            <Thumbnail
              imagePath="https://bloximages.newyork1.vip.townnews.com/feastmagazine.com/content/tncms/assets/v3/editorial/8/a4/8a409fdc-4501-11e9-b450-f3ae55d79153/5c880ff4caae8.image.jpg"
              imageAlt="Tiger Cry Beef"
            />
            <br />
            Our Tiger Cry Beef is a spicy dish of grilled sirloin of beef,
            thinly sliced and marinated with a hint of garlic, black pepper,
            garnished with cabbage and served with spicy chili homemade sauce.
          </p>
          <p className="menu-price text-align-center">$9.95</p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name" />
          <p className="menu-display-description" />
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default LunchSalads
