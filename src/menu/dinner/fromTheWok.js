import React from 'react'
import { Row, Col, Divider } from 'antd'
import Thumbnail from '../../components/thumbnail'

const DinnerFromTheWok = () => {
  return (
    <React.Fragment>
      <Row className="menu-display">
        <Divider className="menu-display-time">Dinner</Divider>
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
            Chicken, Pork, or Tofu $11.95 <br /> Beef or Shrimp $14.95
            <br /> Seafood $18.95
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
          <h1 className="menu-display-name">Crab Fried Rice</h1>
          <p className="menu-display-description">
            Stir-fried rice with crab meat, egg, onion and spring onions.
            <br />
          </p>

          <p className="menu-price text-align-center">
            Lunch $13.95 <br />
            <br /> Dinner $15.95
          </p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Yellow Curry Fried Rice</h1>
          <p className="menu-display-description">
            Traditional fried rice with onions, cabbage, napa and scallions and
            the addition of a wonderful yellow curry flavor.
          </p>
          <p className="menu-price text-align-center">
            Lunch $13.95 <br />
            <br /> Dinner $15.95
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
          <h1 className="menu-display-name">Green Bean Chicken</h1>
          <p className="menu-display-description">
            Sautéed with green beans in a spicy curry sauce.
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
          <h1 className="menu-display-name">Fried Rice Seafood</h1>
          <p className="menu-display-description">
            Our signature fried rice made with jumbo shrimp, scallops, imatation
            crab meat and squid.
          </p>
          <p className="menu-price text-align-center">
            Lunch $13.95 <br />
            <br /> Dinner $18.95
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
          <h1 className="menu-display-name">Crispy Garlic Shrimp</h1>
          <p className="menu-display-description">
            Jumbo shrimp flash fried and then sautéed in our delicious garlic
            sauce. Served over a bed of steamed vegetables.
            <br />
            <Thumbnail
              imagePath="https://i.imgur.com/Qsq3xhal.jpg"
              imageAlt="Crispy Garlic Shrimp"
              isPortrait={true}
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
          <h1 className="menu-display-name">Pad Pong Karee Rom</h1>
          <p className="menu-display-description">
            Combination of seafood (Jumbo Shrimp, Scallop, Squid, Crab meat)
            stir-fried with yellow curry powder, egg, onion, celery, bell
            pepper, spring onion and napa.
            <br />
            <Thumbnail
              imagePath="https://s3-media1.fl.yelpcdn.com/bphoto/EfvXh4yo48pXRLVh-W4o2w/o.jpg"
              imageAlt="Pad Pak Rom"
              isPortrait={true}
            />
          </p>
          <p className="menu-price text-align-center">
            Lunch $13.95 <br />
            <br /> Dinner $18.95
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
            Chicken, Pork, Tofu, or Vegan $14.95 <br /> Beef or Shrimp $15.95
            <br /> Seafood $18.95
          </p>
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

export default DinnerFromTheWok
