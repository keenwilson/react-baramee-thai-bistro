import React from 'react'
import { Row, Col, Divider } from 'antd'
import Thumbnail from '../../components/thumbnail'

const LunchAppetizers = () => {
  return (
    <React.Fragment>
      <Row className="menu-display">
        <Divider className="menu-display-time">Lunch</Divider>
        <h1 className="menu-display-category">Appetizers</h1>
      </Row>
      <Row type="flex" justify="center" align="top" className="menu-display">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Crab Rangoon (8 Pcs)</h1>
          <p className="menu-display-description">
            Fried wonton wrapped and filled with blend of cream-cheese,
            imitation crab meat and garlic flavored seasoning served with
            homemade sweet chili sauce.
            <br />
            <Thumbnail
              imagePath="https://s3-media4.fl.yelpcdn.com/bphoto/ifQoR3a1A_Xq7sFvdkOgiA/o.jpg"
              imageAlt="Crab Rangoon"
              isPortrait={true}
            />
          </p>

          <p className="menu-price text-align-center">$6.95</p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Chicken Satay (4 Skewers)</h1>
          <p className="menu-display-description">
            Skewers of tender marinated chicken barbecued over charcoal and
            served with peanut sauce and cucumber dip.
            <br />
            <Thumbnail
              imagePath="https://s3-media1.fl.yelpcdn.com/bphoto/ErIJAxHbciSrDdNpaKR5yA/o.jpg"
              imageAlt="Chicken Satay"
              isPortrait={false}
            />
          </p>
          <p className="menu-price text-align-center">$8.95</p>
        </Col>
      </Row>
      <Row type="flex" justify="center" align="top" className="menu-display">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Crispy Sping Roll (3 Pcs)</h1>
          <p className="menu-display-description">
            Deep fried spring rolls stuff with minced chicken or only
            vegetables, egg, glass noodle and mixed vegetable, served with
            homemade sweet chili sauce.
            <br />
            <Thumbnail
              imagePath="https://s3-media3.fl.yelpcdn.com/bphoto/Pwx74lme9XoPeLmuYRFPnQ/o.jpg"
              imageAlt="Crispy Sping Roll "
              isPortrait={false}
            />
          </p>
          <p className="menu-price text-align-center">$6.95</p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Soft Sping Roll (3 Pcs)</h1>
          <p className="menu-display-description">
            Fresh spring rolls made with chicken or only vegetables, noodles,
            bean sprouts, and lettuce wrapped in rice paper. Served with sweet
            chili sauce and crushed roasted peanuts.
            <br />
            <Thumbnail
              imagePath="https://s3-media3.fl.yelpcdn.com/bphoto/Ji_6x-VqwNoGw46r4U-Sqg/o.jpg"
              imageAlt="Soft Sping Roll"
              isPortrait={false}
            />
          </p>
          <p className="menu-price text-align-center">$6.95</p>
        </Col>
      </Row>
      <Row type="flex" justify="center" align="top" className="menu-display">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Baramee Thai Roll (3 Pcs)</h1>
          <p className="menu-display-description">
            Crab meat, cream-cheese, cucumber, green leaf lettuce, bean sprout,
            and carrot wrapped in rice paper served with sweet chili sauce and
            crushed roasted peanuts.
            <br />
            <Thumbnail
              imagePath="https://s3-media1.fl.yelpcdn.com/bphoto/KNdNUOne1Fh5GUvJbiHy8w/o.jpg"
              imageAlt="Baramee Thai Roll"
              isPortrait={false}
            />
          </p>

          <p className="menu-price text-align-center">$8.95</p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Tiger Cry Beef</h1>
          <p className="menu-display-description">
            Spicy dish of grilled sirloin of beef, thinly sliced and marinated
            with a hint of garlic, black pepper, garnished with cabbage and
            served with spicy chili homemade sauce.
            <br />
            <Thumbnail
              imagePath="https://bloximages.newyork1.vip.townnews.com/feastmagazine.com/content/tncms/assets/v3/editorial/8/a4/8a409fdc-4501-11e9-b450-f3ae55d79153/5c880ff4caae8.image.jpg"
              imageAlt="Tiger Cry Beef"
              isPortrait={false}
            />
          </p>
          <p className="menu-price text-align-center">$9.95</p>
        </Col>
      </Row>
      <Row type="flex" justify="center" align="top" className="menu-display">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Crispy Tofu</h1>
          <p className="menu-display-description">
            Delicately fried, and complemented with a homemade chili sauce.
            <br />
            <Thumbnail
              imagePath="https://s3-media4.fl.yelpcdn.com/bphoto/BWiUC7nLxeUHyXyYX-JuSA/o.jpg"
              imageAlt="Crispy Tofu"
              isPortrait={true}
            />
          </p>
          <p className="menu-price text-align-center">$7.95</p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Golden Calamari</h1>
          <p className="menu-display-description">
            Crispy tempura style calamari with a hint of spices and green
            onions. Served with sriracha dipping sauce.
            <br />
            <Thumbnail
              imagePath="https://s3-media1.fl.yelpcdn.com/bphoto/XujKMQlM5oiQ97VUjAfcfA/o.jpg"
              imageAlt="Golden Calamari"
              isPortrait={true}
            />
          </p>
          <p className="menu-price text-align-center">$8.95</p>
        </Col>
      </Row>
      <Row type="flex" justify="center" align="top" className="menu-display">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Baramee Thai Wings</h1>
          <p className="menu-display-description">
            Marinated in a spicy garlic sauce with fresh basil. Deep fried to
            perfection.
            <br />
            <Thumbnail
              imagePath="https://s3-media2.fl.yelpcdn.com/bphoto/SjWn40m4EUCmJM94yDt-dg/o.jpg"
              imageAlt="Baramee Thai Wings"
              isPortrait={false}
            />
          </p>
          <p className="menu-price text-align-center">$8.95</p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Spring Roll Deluxe</h1>
          <p className="menu-display-description">
            Two of our soft spring rolls and two of our crispy spring rolls.
          </p>
          <p className="menu-price text-align-center">$8.95</p>
        </Col>
      </Row>
      <Row type="flex" justify="center" align="top" className="menu-display">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Baramee Thai Platter</h1>
          <p className="menu-display-description">
            A delicious of Thai mixed appetizers with Crab Rangoon (4 Pcs), Soft
            Spring Roll (2 Pcs) and Crispy Spring roll (2 Pcs)
            <br />
            <Thumbnail
              imagePath="https://s3-media2.fl.yelpcdn.com/bphoto/nYrLq2A6VNlWHPWOglnqig/o.jpg"
              imageAlt="Baramee Thai Platter"
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
          <h1 className="menu-display-name">Edamame</h1>
          <p className="menu-display-description">
            Lightly salted and steamed soy beans.
            <br />
            <Thumbnail
              imagePath="https://s3-media1.fl.yelpcdn.com/bphoto/tqero_VtxfKOaGO93MrjtA/o.jpg"
              imageAlt="Edamame"
              isPortrait={false}
            />
          </p>
          <p className="menu-price text-align-center">$5.95</p>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default LunchAppetizers
