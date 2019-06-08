import React from 'react'
import { Carousel, Row, Col } from 'antd'

function onChange(a, b, c) {
  console.log(a, b, c)
}

const WelcomeCarousel = () => {
  return (
    <Carousel afterChange={onChange} className="carousel">
      <div style={{ padding: '30px' }}>
        <Row type="flex" justify="space-around" align="top">
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <img
              className="carosel-image"
              src="https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-9/57882422_433008147466648_8673613478482673664_n.jpg?_nc_cat=111&_nc_oc=AQmkK1FIdXJLUBX2v85IM9I7R4YETUHP1AWukd2BssVHPYlU3XTNOQUd3TM2_tp5zig&_nc_ht=scontent-msp1-1.xx&oh=d9d262bdcfe8c9e052df854f9a20b9c0&oe=5D53FAE1"
            />
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 14 }}
            style={{ background: '#FFF', padding: '30px' }}
          >
            <p className="describe">
              Our new location is open in January 2019 at the corner of 18th and
              Baltimore Ave in the Crossroads Arts District of Kansas City,
              Missouri. We are excited to bring our cuisine and hospitality to
              this vibrant dining destination.
            </p>
            <p className="describe">
              The dining room seats approximately 60 diners features the Thai
              artwork that runs floor to ceiling on the restaurant’s north and
              south walls.
            </p>
            <p className="describe">
              ‘Baramee’ means fulfilling yourself by making others happy. As a
              sister restaurant to Mali Thai Bistro in Lee’s Summit, Missouri,
              Chef Nutnisa Hoffman continues to create a unique Northeastern
              Thai-style dishes with the freshest produce from the City Market
              and locally grown ingredients.
            </p>
          </Col>
        </Row>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </Carousel>
  )
}

export default WelcomeCarousel
