import React from 'react'
import { Row, Col, Divider } from 'antd'
import Thumbnail from '../../components/thumbnail'

const DinnerNoodles = () => {
  return (
    <React.Fragment>
      <Row className="menu-display">
        <Divider className="menu-display-time">Dinner</Divider>
        <h1 className="menu-display-category">Noodles</h1>
      </Row>
      <Row type="flex" justify="center" align="top" className="menu-display">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Pad Sew Eaew</h1>
          <p className="menu-display-description">
            Stir-fried flat noodles in dark, rich and sweet soy sauce with
            broccoli and Gai lan. <br />
            <Thumbnail
              imagePath="https://s3-media2.fl.yelpcdn.com/bphoto/kZGaVheivp0Aea4H8U1UFw/o.jpg"
              imageAlt="Pad Sew Eaew"
              isPortrait={true}
            />
          </p>
          <p className="menu-price text-align-center">
            Chicken, Pork, or Tofu $11.95 <br /> Beef or Shrimp $14.95
            <br /> Seafood $18.95
          </p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Pad Thai</h1>
          <p className="menu-display-description">
            Famous rice noodle dish stir-fried with meat or tofu, egg, bean
            sprouts, spring onion and cabbages with added tamarind sauce for a
            tangy after taste. Served with ground peanuts.
            <br />
            <Thumbnail
              imagePath="https://s3-media2.fl.yelpcdn.com/bphoto/Rw5tUfUDPfl0M4uouSZjBw/o.jpg"
              imageAlt="Pad Thai"
              isPortrait={true}
            />
          </p>
          <p className="menu-price text-align-center">
            Chicken, Pork, or Tofu $11.95 <br /> Beef or Shrimp $14.95
            <br /> Seafood $18.95
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
          <h1 className="menu-display-name">Pad Key Maw</h1>
          <p className="menu-display-description">
            A spicy noodle dish, stir-fried flat noodles with fresh chili,
            garlic, bell pepper, and basil leaves.
            <br />
            <Thumbnail
              imagePath="https://s3-media1.fl.yelpcdn.com/bphoto/AxXIauad_2G8STN0Dir0Ag/o.jpg"
              imageAlt="Pad Key Maw"
              isPortrait={false}
            />
          </p>
          <p className="menu-price text-align-center">
            Chicken, Pork, or Tofu $11.95 <br /> Beef or Shrimp $14.95
            <br /> Seafood $18.95
          </p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Pad Woon Sen</h1>
          <p className="menu-display-description">
            Stir-fried glass noodle with meats or tofu, bean sprouts, spring
            onion and cabbage. <br />
            <Thumbnail
              imagePath="https://s3-media3.fl.yelpcdn.com/bphoto/7qrGRuBYl1JP-lb6vVmWMw/o.jpg"
              imageAlt="Pad Woon Sen"
              isPortrait={false}
            />
          </p>
          <p className="menu-price text-align-center">
            Chicken, Pork, or Tofu $11.95 <br /> Beef or Shrimp $14.95
            <br /> Seafood $18.95
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
          <h1 className="menu-display-name">Rad Na Talay</h1>
          <p className="menu-display-description">
            Wide rice noodles with vegetables and your choice of protein,
            stir-fried in a dark soy sauce and covered with a thick, savory
            sauce. A favorite lunch item in Thailand.
            <br />
            <Thumbnail
              imagePath="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/61573622_457587998341996_5238509063322468352_n.jpg?_nc_cat=108&_nc_oc=AQmpJaftYyYDbsxQ7epsOQ4rfDb7kpHi_JW29tk3MFVNWM9bVyW1tQztJrOqYfhrKlY&_nc_ht=scontent-dfw5-2.xx&oh=09f9a158b58c7fb00655b02cf97de0fb&oe=5D9A9737"
              imageAlt="Rad Na Talay"
              isPortrait={false}
            />
          </p>
          <p className="menu-price text-align-center">$18.95</p>
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

export default DinnerNoodles