import React from 'react'
import { Row, Col, Divider } from 'antd'
import Thumbnail from '../../components/thumbnail'
const LunchSoups = () => {
  return (
    <React.Fragment>
      <Row className="menu-display">
        <Divider className="menu-display-time">Lunch</Divider>
        <h1 className="menu-display-category">Soups</h1>
      </Row>
      <Row type="flex" justify="center" align="top" className="menu-display">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Thai Noodle Soup</h1>
          <p className="menu-display-description">
            Rice noodles and vegetables in a savory broth.
            <Thumbnail
              imagePath="https://i.imgur.com/T06AlIul.jpg"
              imageAlt="Thai Noodle Soup"
            />
          </p>

          <p className="menu-price text-align-center">
            Chicken, Pork, or Tofu $9.95 <br /> Beef or Shrimp $12.95
            <br /> Seafood $13.95
          </p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Tom Yum Soup</h1>
          <p className="menu-display-description">
            A signature Thai soup of straw mushrooms, fresh chilies, kaffir
            leaves, lemongrass, galangal, and a splash of lime juice. Served in
            a spicy broth and topped with a hint of cilantro and spring onions.
            <Thumbnail
              imagePath="https://i.imgur.com/1ezdXZZl.jpg"
              imageAlt="Tom Yum Soup"
              isPortrait={true}
            />
          </p>

          <p className="menu-price text-align-center">
            Chicken, Pork, or Tofu $9.95 <br /> Beef or Shrimp $12.95
            <br /> Seafood $13.95
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
          <h1 className="menu-display-name">Tom Kha Soup</h1>
          <p className="menu-display-description">
            A rich coconut milk broth flavored with lemongrass, kaffir leaves,
            fresh chilies, galangal, and sprinkled with cilantro and spring
            onions.
            <Thumbnail
              imagePath="https://s3-media3.fl.yelpcdn.com/bphoto/nogZf_rtBoUExsw8vhlusw/o.jpg"
              imageAlt="Tom Kha Soup"
              isPortrait={true}
            />
          </p>

          <p className="menu-price text-align-center">
            Chicken, Pork, or Tofu $9.95 <br /> Beef or Shrimp $12.95
            <br /> Seafood $13.95
          </p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name" />
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default LunchSoups
