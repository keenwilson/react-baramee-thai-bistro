import React from 'react'
import { Row, Col, Divider } from 'antd'
import Thumbnail from '../../components/thumbnail'

const DinnerDessertsDrinks = () => {
  return (
    <React.Fragment>
      <Row className="menu-display">
        <Divider className="menu-display-time">Dinner</Divider>
        <h1 className="menu-display-category">Desserts & Drinks</h1>
      </Row>
      <Row type="flex" justify="center" align="top" className="menu-display">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Sweet Mango Sticky Rice</h1>
          <p className="menu-display-description">
            Mango sticky rice is a traditional Thai dessert made with glutinous
            rice, sweet mango and coconut milk.
            <br />
            <Thumbnail
              imagePath="ttps://i.imgur.com/lGZgLXfl.jpg"
              imageAlt="Sweet Mango Sticky Rice"
              isPortrait={false}
            />
          </p>
          <p className="menu-price text-align-center">$7.00</p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Taro Ice Cream</h1>
          <p className="menu-display-description">
            <Thumbnail
              imagePath="https://s3-media2.fl.yelpcdn.com/bphoto/ldh9i3L2lOA9agp35V9Dlw/o.jpg"
              imageAlt="Taro Ice Cream"
              isPortrait={false}
            />
          </p>
          <p className="menu-price text-align-center">$4.00</p>
        </Col>
      </Row>
      <Row type="flex" justify="center" align="top" className="menu-display">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Mango Ice Cream</h1>
          <p className="menu-price text-align-center">$4.00</p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Coconut Ice Cream</h1>
          <p className="menu-price text-align-center">$4.00</p>
        </Col>
      </Row>
      <Row type="flex" justify="center" align="top" className="menu-display">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Fried Banana with Ice Cream</h1>
          <p className="menu-price text-align-center">$5.50</p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">
            Thai Iced Tea / Thai Iced Coffee
          </h1>
          <p className="menu-display-description">
            <Thumbnail
              imagePath="https://s3-media4.fl.yelpcdn.com/bphoto/j-_yGtrE1cBH260pxGD3rA/o.jpg"
              imageAlt="Thai Iced Coffee"
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
          <h1 className="menu-display-name">Fountain Drinks / Coke Products</h1>
          <p className="menu-display-description">
            Coke, Diet Coke, Coke Zero, Dr. Pepper, Minute Maid Lemonade,
            Sprite, Orange Fanta, Barq's Root Beer
          </p>
          <p className="menu-price text-align-center">$2.99</p>
        </Col>
      </Row>

      <Row type="flex" justify="center" align="top" className="menu-display">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Hot Coffee</h1>
          <p className="menu-display-description" />
          <p className="menu-price text-align-center">$2.99</p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Hot Tea, Iced Tea</h1>
          <p className="menu-display-description" />
          <p className="menu-price text-align-center">$2.99</p>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default DinnerDessertsDrinks
