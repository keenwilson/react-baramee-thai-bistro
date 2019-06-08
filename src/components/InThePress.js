import React from 'react'
import { Divider, Card, Row, Col } from 'antd'

const InThePress = () => {
  return (
    <div>
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16}>
          <Col span={24}>
            <h1 className="heading text-align-center">
              Baramee Thai Bistro in the Press
            </h1>
            <Divider />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 12 }}
          >
            <Card
              bordered={false}
              style={{ width: '100%' }}
              cover={
                <img
                  alt="Thai food in Feast Magazine Kansas City "
                  src="https://bloximages.newyork1.vip.townnews.com/feastmagazine.com/content/tncms/assets/v3/editorial/8/0a/80ada776-4501-11e9-a3d2-eb5a151b4e37/5c880fe4bb718.image.jpg"
                />
              }
            >
              <a
                href="https://www.feastmagazine.com/the-feed/kansas_city_news/article_03d13e50-44fe-11e9-8edd-4349b84fcbbe.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  style={{ width: 120 }}
                  src="https://bloximages.newyork1.vip.townnews.com/feastmagazine.com/content/tncms/assets/v3/editorial/b/d5/bd5ed274-2a36-11e5-8e54-27db93223d6e/55a52065194f3.image.jpg?resize=1200%2C927"
                />
              </a>
              <br />
              Tucked in at the corner of 18th and Baltimore Streets, Douglas and
              Nutnisa Hoffman’s new restaurant, Baramee Thai Bistro, has been
              earning steady accolades since it opened in late January. It’s
              easy to understand why: from its high-level service and serene
              environment, to of course, the food, Baramee has a lot to offer
              its customers.
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false} style={{ width: '100%' }}>
              <iframe
                src="https://www.kansascity.com/entertainment/article224963240.html/video-embed"
                width="480"
                height="300"
                frameborder="0"
                allowfullscreen="false"
              />
              <img
                style={{ width: 150 }}
                src="https://www.kansascity.com/wps/build/images/kansascity/logo.svg"
              />
              <br />
              Douglas and Nutnisa Hoffman often head to the City Market to pick
              up the freshest produce for their Lee’s Summit restaurant, Mali
              Thai Bistro. So for their second location, they picked a spot
              close to their vegetable vendors — the former Pizzabella building
              just a few blocks south of the market in the Crossroads. Baramee
              Thai Bistro is now open at 1810 Baltimore Ave.
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default InThePress
