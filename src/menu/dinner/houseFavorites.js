import React from 'react'
import { Row, Col, Divider } from 'antd'
import Thumbnail from '../../components/thumbnail'

const DinnerHouseFavorites = () => {
  return (
    <React.Fragment>
      <Row className="menu-display">
        <Divider className="menu-display-time">Dinner</Divider>
        <h1 className="menu-display-category">House Favorites</h1>
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
          <h1 className="menu-display-name">Labb Isaan</h1>
          <p className="menu-display-description">
            Traditional north eastern dish of finely chopped chicken, pork or
            beef mixed together with ground roasted rice, coriander and chili.
            <br />
            <Thumbnail
              imagePath="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/51112798_392899898144140_70817684224212992_n.jpg?_nc_cat=102&_nc_oc=AQkPtLuv8zIua57P1NHUbSc6-WpLokNuUI8pqTRZ-v8BVRwa6q42QgA4KN_y30Wi5xEcEe3znWmsHWUvtPbQW5KA&_nc_ht=scontent-dfw5-1.xx&oh=d525f99cb599362d4daba4594039122c&oe=5D97EFCD"
              imageAlt="Labb Isaan"
            />
          </p>
          <p className="menu-price text-align-center" />
        </Col>
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
              imagePath="https://i.imgur.com/y94QolW.jpg"
              imageAlt="Papaya Salad"
              isPortrait={false}
            />
          </p>
          <p className="menu-price text-align-center">$10.95</p>
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
          <h1 className="menu-display-name">Panang Curry</h1>
          <p className="menu-display-description">
            Our most popular curry. Our delicious coconut milk and peanut panang
            sauce garnished with kaffir lime leaves.
            <br />
            <Thumbnail
              imagePath="https://bloximages.newyork1.vip.townnews.com/feastmagazine.com/content/tncms/assets/v3/editorial/8/7d/87dfd320-4501-11e9-a570-63bd13e0d3af/5c880ff0cd1fd.image.jpg"
              imageAlt="Panang Curry"
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
          <h1 className="menu-display-name">What’s The Difference?</h1>
          <p className="menu-display-description">
            Labb or Larb is a type of meat salad eaten in northeast Thailand and
            Laos. Laab is made of minced meat lightly poached in broth, then
            dressed with chiles, fresh herbs, and roasted rice powder, and eaten
            with sticky rice. <br /> <br /> Papaya salad is a spicy salad made
            from shredded unripe green papaya. Probably originating from ethnic
            Lao people, it is also eaten throughout Southeast Asia.
          </p>
          <p className="menu-price text-align-center" />
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default DinnerHouseFavorites
