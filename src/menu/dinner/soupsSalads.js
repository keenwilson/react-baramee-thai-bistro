import React from 'react'
import { Row, Col, Divider } from 'antd'
import Thumbnail from '../../components/thumbnail'

const DinnerSoupsSalads = () => {
  return (
    <React.Fragment>
      <Row className="menu-display">
        <Divider className="menu-display-time">Dinner</Divider>
        <h1 className="menu-display-category">Soups & Salads</h1>
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
            <br />
            <Thumbnail
              imagePath="https://s3-media3.fl.yelpcdn.com/bphoto/0hqoBjSi112Wz52MsHGixw/o.jpg"
              imageAlt="Thai Noodle Soup"
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
          <h1 className="menu-display-name">Tom Yum Soup</h1>
          <p className="menu-display-description">
            A signature Thai soup of straw mushrooms, fresh chilies, kaffir
            leaves, lemongrass, galangal, and a splash of lime juice. Served in
            a spicy broth and topped with a hint of cilantro and spring onions.
            <br />
            <Thumbnail
              imagePath="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/51590804_396250541142409_8780586631196311552_n.jpg?_nc_cat=100&_nc_oc=AQkTfXGk-uZ9M5zFlNrjPqk0VLL6hHdziRU8WVJ64KiKiO3FtlqTaU4fI5ro_UJyaeU&_nc_ht=scontent-dfw5-2.xx&oh=51b8903706ec7279404c83edeab34070&oe=5D9C5461"
              imageAlt="Tom Yum Soup"
              isPortrait={false}
            />
          </p>

          <p className="menu-price text-align-center">
            Bowl $6.95 (Seafood $8.95) <br />
            <br /> Pot $10.95 (Seafood $18.95)
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
            <br />
            <Thumbnail
              imagePath="https://s3-media4.fl.yelpcdn.com/bphoto/h_VfDgWxIZbV0IXvsBEnXQ/o.jpg"
              imageAlt="Tom Kha Soup"
              isPortrait={false}
            />
          </p>

          <p className="menu-price text-align-center">
            Bowl $6.95 (Seafood $8.95) <br />
            <br /> Pot $10.95 (Seafood $18.95)
          </p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Yum Woon Sen</h1>
          <p className="menu-display-description">
            A traditional spicy Thai salad where the meat or Tofu are first
            cooked then tossed together with glass noodles, shallots, tomatoes,
            celery and cilantro.
            <br />
            <Thumbnail
              imagePath="https://i.imgur.com/XRG0wjbl.jpg"
              imageAlt="Yum Woon Sen"
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
              imagePath="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/51366392_393494678084662_2627909008874274816_n.jpg?_nc_cat=106&_nc_oc=AQnvhOo89vT7Qod75Z-DRznSZiZzwiGWXohYf64VpHECvCz4vEphU_6H1qUlduyCYCKTz2-uLdwh-Z9ZRPZzwSWd&_nc_ht=scontent-dfw5-1.xx&oh=cba696737daaef6a2936514619ae2cbd&oe=5D8497F2"
              imageAlt="Papaya Salad"
              isPortrait={true}
            />
          </p>
          <p className="menu-price text-align-center">$10.95</p>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default DinnerSoupsSalads
