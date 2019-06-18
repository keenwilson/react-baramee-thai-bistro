import React from 'react'
import { Row, Col, Divider } from 'antd'
import Thumbnail from '../../components/thumbnail'

const LunchFromTheWok = () => {
  return (
    <React.Fragment>
      <Row className="menu-display">
        <Divider className="menu-display-time">Lunch</Divider>
        <h1 className="menu-display-category">From the Wok</h1>
      </Row>
      <Row type="flex" justify="center" align="top" className="menu-display">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Pad Ka Prao (House Favorites)</h1>
          <p className="menu-display-description">
            Stir-fried meat with sweet basil leaves, fresh chili and garlic.
            Served over rice with a pan fried egg.
            <br />
            <Thumbnail
              imagePath="https://s3-media2.fl.yelpcdn.com/bphoto/FGHH7p9ZL40ogeMl0vPJbA/o.jpg"
              imageAlt="Pad Ka Prao"
              isPortrait={false}
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
          <h1 className="menu-display-name">Thai Cashew Nuts</h1>
          <p className="menu-display-description">
            Meat or Tofu stir-fried with chili oil and roasted cashew nuts,
            onion, broccoli, fresh carrot and bell peppers.
            <br />
            <Thumbnail
              imagePath="https://i.imgur.com/hwXPb1Il.jpg"
              imageAlt="Thai Cashew Nuts"
              isPortrait={false}
            />
          </p>
          <p className="menu-price text-align-center">
            Chicken, Pork, or Tofu $9.95 <br /> Beef or Shrimp $12.95
            <br /> Seafood $13.95
          </p>
        </Col>
      </Row>{' '}
      <Row type="flex" justify="center" align="top" className="menu-display">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Garlic and Pepper</h1>
          <p className="menu-display-description">
            A delicious stir-fried with garlic and ground black pepper,
            presented in bed of cabbages.
            <br />
            <Thumbnail
              imagePath="https://s3-media2.fl.yelpcdn.com/bphoto/tAgn1W9CJrAtx1h9A3Q8SQ/o.jpg"
              imageAlt="Garlic and Pepper"
              isPortrait={false}
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
          <h1 className="menu-display-name">Green Bean Chicken</h1>
          <p className="menu-display-description">
            Sautéed with green beans in a spicy curry sauce.
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
          <h1 className="menu-display-name">Pad Pak Rom</h1>
          <p className="menu-display-description">
            Stir-fried mixed vegetable with homemade garlic brown sauce.
            <br />
            <Thumbnail
              imagePath="https://s3-media1.fl.yelpcdn.com/bphoto/EfvXh4yo48pXRLVh-W4o2w/o.jpg"
              imageAlt="Pad Pak Rom"
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
          <h1 className="menu-display-name">Pad Khing</h1>
          <p className="menu-display-description">
            Meat or Tofu Stir fried with fresh ginger root, chinese mushroom,
            onion, scallion and bell pepper.
            <br />
            <Thumbnail
              imagePath="https://s3-media1.fl.yelpcdn.com/bphoto/1aXmOe2NSVJQLIFa9aA3kQ/o.jpg"
              imageAlt="Pad Khing"
              isPortrait={false}
            />
          </p>
          <p className="menu-price text-align-center">
            Chicken, Pork, or Tofu $9.95 <br /> Beef or Shrimp $12.95
            <br /> Seafood $13.95
          </p>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default LunchFromTheWok
