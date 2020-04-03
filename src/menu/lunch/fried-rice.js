import React from 'react'
import { Row, Col, Divider } from 'antd'
import Thumbnail from '../../components/thumbnail'

const LunchFriedRice = () => {
  return (
    <React.Fragment>
      <Row className="menu-display">
        <Divider className="menu-display-time">Lunch</Divider>
        <h1 className="menu-display-category">Fried Rice</h1>
      </Row>
      <Row type="flex" justify="center" align="top" className="menu-display">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Thai Fried Rice</h1>
          <p className="menu-display-description">
            Stir-fried rice with egg, onion, spring onions and your choice of
            meat.
            <br />
            <Thumbnail
              imagePath="https://s3-media4.fl.yelpcdn.com/bphoto/QIykuSu7EGpwGtbhkgE1eQ/o.jpg"
              imageAlt="Basil Fried Rice"
              isPortrait={false}
            />
          </p>

          <p className="menu-price text-align-center">
            Chicken, Pork, or Tofu $10.99 <br /> Beef or Shrimp $13.99
            <br /> Seafood $15.99
          </p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Basil Fried Rice</h1>
          <p className="menu-display-description">
            Stir-fried rice with egg, onion, spring onions, basil and your
            choice of meats.
            <br />
            <Thumbnail
              imagePath="https://s3-media3.fl.yelpcdn.com/bphoto/-KE_cRryFO1x4FwHGDuTqw/o.jpg"
              imageAlt="Basil Fried Rice"
              isPortrait={false}
            />
          </p>
          <p className="menu-price text-align-center">
            Chicken, Pork, or Tofu $10.99 <br /> Beef or Shrimp $13.99
            <br /> Seafood $15.99
          </p>
        </Col>
      </Row>
      <Row type="flex" justify="center" align="top" className="menu-display">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Vegetable Fried Rice</h1>
          <p className="menu-display-description">
            Stir-fried rice with egg, and mixed vegetables.
            <br />
            <Thumbnail
              imagePath="https://i.imgur.com/xjD9dpv.jpg"
              imageAlt="Vegetable Fried Rice with Beef"
              isPortrait={false}
            />
          </p>
          <p className="menu-price text-align-center">
            Chicken, Pork, or Tofu $10.99 <br /> Beef or Shrimp $13.99
            <br /> Seafood $15.99
          </p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Pineapple Fried Rice</h1>
          <p className="menu-display-description">
            Fried rice with shrimp, egg and pineapple combined with cashew nuts
            and raisins.
            <br />
            <Thumbnail
              imagePath="https://s3-media4.fl.yelpcdn.com/bphoto/6mJLfJaOrt1xS6F88HSczA/o.jpg"
              imageAlt="Pineapple Fried Rice"
              isPortrait={true}
            />
          </p>
          <p className="menu-price text-align-center">
            Chicken, Pork, or Tofu $12.99 <br /> Beef or Shrimp $13.99
            <br /> Seafood $15.99
          </p>
        </Col>
      </Row>
      <Row type="flex" justify="center" align="top" className="menu-display">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Crab Fried Rice</h1>
          <p className="menu-display-description">
            Stir-fried rice with crab meat, egg, onion and spring onions.
            <br />
          </p>

          <p className="menu-price text-align-center">$15.99</p>
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

export default LunchFriedRice
