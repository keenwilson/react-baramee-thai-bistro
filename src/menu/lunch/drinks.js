import React from 'react'
import { Row, Col, Divider } from 'antd'
import Thumbnail from '../../components/thumbnail'

const LunchDrinks = () => {
  return (
    <React.Fragment>
      <Row className="menu-display">
        <Divider className="menu-display-time">Lunch</Divider>
        <h1 className="menu-display-category">Drinks</h1>
      </Row>
      <Row type="flex" justify="center" align="top" className="menu-display">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Bubble Drinks</h1>
          <p className="menu-display-description">
            <Thumbnail
              imagePath="https://s3-media2.fl.yelpcdn.com/bphoto/Bx7ObqljtFXWnnE8I3T_-g/o.jpg"
              imageAlt="Bubble Drinks"
              isPortrait={true}
            />
          </p>
          <p className="menu-price text-align-center">$4.00</p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Thai Iced Tea/ Thai Iced Coffee</h1>
          <p className="menu-display-description">
            <Thumbnail
              imagePath="https://s3-media4.fl.yelpcdn.com/bphoto/j-_yGtrE1cBH260pxGD3rA/o.jpg"
              imageAlt="Thai Iced Tea"
              isPortrait={true}
            />
          </p>
          <p className="menu-price text-align-center">$3.50</p>
        </Col>
      </Row>

      <Row type="flex" justify="center" align="top" className="menu-display">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Coke Product Fountain Drinks</h1>
          <p className="menu-display-description">
            Coke, Diet Coke, Coke Zero, Dr. Pepper, Minute Maid Lemonade,
            Sprite, Orange Fanta, Barq's Root Beer
          </p>
          <p className="menu-price text-align-center">$2.99</p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Hot Tea, Iced Tea, Hot Coffee</h1>
          <p className="menu-display-description" />
          <p className="menu-price text-align-center">$2.99</p>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default LunchDrinks
