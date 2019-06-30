import React from 'react'
import { Card, Row, Col } from 'antd'

const InThePress = () => {
  return (
    <div>
      <div className="press-display-card">
        <Row gutter={16}>
          <Col span={24} className="press-title-col">
            <h1 className="press-title">Baramee Thai Bistro in the Press</h1>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 8 }}
          >
            <Card
              bordered={false}
              style={{ width: '100%' }}
              cover={
                <img
                  alt="Thai food in 435 Magazine Kansas City "
                  src="https://www.435mag.com/wp-content/uploads/2019/05/Baramee-Thai-Bistro-435-20190430-95-1024x683.jpg"
                />
              }
            >
              <a
                href="https://www.435mag.com/the-crossroads-7-of-our-favorite-restaurants/?fbclid=IwAR3NTLr64dqrFGG2DPrAmhiF2kR0Nfl9ME-jXo93F_1G_4b6JiEQsyXe0Mo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  style={{ width: 120 }}
                  alt="435 Magazine Logo"
                  src="https://pbs.twimg.com/profile_images/910950747566510080/KMoJhykk.jpg"
                />
              </a>
              <br />
              <h1 className="press-headline">
                The Crossroads: 7 of our favorite restaurants
              </h1>
              <p className="press-description">
                If you’re looking for a cure — to your cold, allergies, hangover
                or ennui — go for the tom kha soup at Baramee Thai Bistro. When
                you taste the coconut broth infused with lemongrass, kaffir
                leaves, fresh chili and galangal (a citrusy root similar to
                ginger), you are tasting joy. And the flavor explosion doesn’t
                stop there. This menu is packed with plenty of the Thai classics
                you’re used to (plus a few that might surprise you), and we’re
                happy to report that, should you be craving a spicy seafood pad
                Thai with a side of crispy spring rolls, Baramee will satisfy.
              </p>
            </Card>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 8 }}
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
              <h1 className="press-headline">
                Baramee Thai Bistro Brings Northeastern Thai Cuisine to the
                Crossroads
              </h1>
              <p className="press-description">
                Tucked in at the corner of 18th and Baltimore Streets, Douglas
                and Nutnisa Hoffman’s new restaurant, Baramee Thai Bistro, has
                been earning steady accolades since it opened in late January.
                It’s easy to understand why: from its high-level service and
                serene environment, to of course, the food, Baramee has a lot to
                offer its customers.
              </p>
            </Card>
          </Col>

          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 8 }}
          >
            <Card
              bordered={false}
              style={{ width: '100%' }}
              cover={
                <img src="https://external-dfw5-2.xx.fbcdn.net/safe_image.php?d=AQC45_ys9S4lzjZ3&w=540&h=282&url=https%3A%2F%2Fcf-images.us-east-1.prod.boltdns.net%2Fv1%2Fstatic%2F5502557046001%2F20eff4ed-ce9e-47bd-85a5-59cc93a0e2ad%2Fd7fc947f-a331-4589-b3c4-239e94ee27dd%2F1280x720%2Fmatch%2Fimage.jpg&cfs=1&upscale=1&fallback=news_d_placeholder_publisher&_nc_hash=AQCt1c8-OKvHZHA1" />
              }
            >
              <a
                href="https://www.kansascity.com/news/business/biz-columns-blogs/cityscape/article224915875.html?fbclid=IwAR0Oh6iNud4Wm8kAvJyn9YGH0WMv8l4Qo18n5aZknK1Gmj3DIJyk-SABwEI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  style={{ width: 200 }}
                  className="press-logo"
                  src="https://www.kansascity.com/wps/build/images/kansascity/logo.svg"
                />{' '}
              </a>
              <br />
              <h1 className="press-headline">
                New Crossroads Thai restaurant serves up Tom Yum, Thai iced
                coffee and curry
              </h1>
              <p className="press-description">
                Douglas and Nutnisa Hoffman often head to the City Market to
                pick up the freshest produce for their Lee’s Summit restaurant,
                Mali Thai Bistro. So for their second location, they picked a
                spot close to their vegetable vendors — the former Pizzabella
                building just a few blocks south of the market in the
                Crossroads. <br /> <br />
                “Baramee is a Buddhist word. Basically it means fulfilling
                yourself by making others happy,” Douglas Hoffman said. The
                couple do that through Nutnisa’s cuisine from her native
                Northeastern Thailand.
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default InThePress
