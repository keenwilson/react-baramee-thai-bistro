import React from 'react'
import { Row, Col, Divider } from 'antd'
import Thumbnail from '../../components/thumbnail'

const LunchCurries = () => {
  return (
    <React.Fragment>
      <Row className="menu-display">
        <Divider className="menu-display-time">Lunch</Divider>
        <h1 className="menu-display-category">Curries</h1>
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
              imagePath="https://i.imgur.com/2w60mPj.jpg"
              imageAlt="Panang Curry"
              isPortrait={false}
            />
          </p>

          <p className="menu-price text-align-center">
            Chicken, Pork, or Tofu $10.99 <br /> Beef or Shrimp $12.99
            <br /> Seafood $15.99
          </p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Green Curry</h1>
          <p className="menu-display-description">
            A well know medium hot Thai curry with meat or Tofu, egg plant,
            cooked in green curry paste and coconut milk, garnished with Thai
            basil leaves.
            <br />
            <Thumbnail
              imagePath="https://www.spar.co.uk/media/11988/thaigreencurry.jpg"
              imageAlt="Green Curry"
              isPortrait={false}
            />
          </p>
          <p className="menu-price text-align-center">
            Chicken, Pork, or Tofu $10.99 <br /> Beef or Shrimp $12.99
            <br /> Seafood $15.99
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
          <h1 className="menu-display-name">Red Curry</h1>
          <p className="menu-display-description">
            A medium hot Thai red curry dish with meat or Tofu and young bamboo
            shoot and bell pepper cooked in red curry paste and coconut milk,
            flavored with Thai basil leaves.
            <br />
            <Thumbnail
              imagePath="https://i.imgur.com/WJJpeg4.jpg"
              imageAlt="Red Curry"
              isPortrait={false}
            />
          </p>
          <p className="menu-price text-align-center">
            Chicken, Pork, or Tofu $10.99 <br /> Beef or Shrimp $12.99
            <br /> Seafood $15.99
          </p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Gang Ka Ree</h1>
          <p className="menu-display-description">
            Yellow curry powder with chunk potatoes, carrots, yellow onion, and
            topped with dry garlic.
            <br />
            <Thumbnail
              imagePath="https://www.sabadublin.com/wp-content/uploads/2017/05/GAENG-KAREE-FUKTONG-GFSFSL-200x300.jpg"
              imageAlt="Gang Ka Ree"
              isPortrait={true}
            />
          </p>
          <p className="menu-price text-align-center">
            Chicken, Pork, or Tofu $10.99 <br /> Beef or Shrimp $12.99
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
          <h1 className="menu-display-name">Gang Massaman</h1>
          <p className="menu-display-description">
            Traditional mild curry dish, meat or tofu cooked slowly with
            potatoes, yellow onions and roasted peanuts.
            <br />
            <Thumbnail
              imagePath="https://i.imgur.com/PIjij92.jpg"
              imageAlt="Gang Massaman"
              isPortrait={false}
            />
          </p>
          <p className="menu-price text-align-center">
            Chicken, Pork, or Tofu $10.99 <br /> Beef or Shrimp $12.99
            <br /> Seafood $15.99
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
            It is the color of the chili that imparts each signature hue to the
            paste, and each curry paste has its own distinct flavor.
            <br />
            <br /> Green Curry is made with green chilies, coriander (cilantro),
            kaffir lime leaf, and basil. Green curry is more savory and more
            liquid than Panang curry or Gang Massaman.
            <br />
            <br /> Red Curry is made with several red chilies for a fiery hot
            dish. It is hotter than yellow curry, but has less heat than green
            curry, that uses hotter green chilies.
            <br />
            <br /> Gang Ka Ree is made with Yellow Curry which typically uses a
            lot of Indian spices. It has a mild, somewhat sweet taste with a
            little bit of spice.
            <br />
            <br /> Panang Curry is richer and sweeter, yet drier than the other
            curries. Panang curry also has coconut cream and peanuts as core
            ingredients, thus making it sweeter than other Thai curries. <br />
            <br />
            Gang Massaman is a rich, thick sauce with a relatively mild Thai
            curry, slightly sweet with flavours of coconut milk, lemongrass,
            cloves and cinnamon.
          </p>
          <p className="menu-price text-align-center" />
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default LunchCurries
