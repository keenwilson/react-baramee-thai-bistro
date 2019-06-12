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
            md={{ span: 24 }}
            lg={{ span: 8 }}
          >
            <img
              className="carosel-image"
              alt="Thailand Grand Palace"
              src="https://s3-media2.fl.yelpcdn.com/bphoto/D-NzQpSllMpoQPCwEBObOg/o.jpg"
            />
            <img
              className="carosel-image"
              alt="Wall art in the dining area"
              src="https://s3-media2.fl.yelpcdn.com/bphoto/Tjv7C4pw0e-u_xbn5fQMkg/o.jpg"
            />
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 16 }}
            style={{ background: '#FFF', padding: '30px' }}
          >
            <p className="describe">
              Our new location is open in January 2019 at the corner of 18th and
              Baltimore Ave in the Crossroads Arts District of Kansas City,
              Missouri. We are excited to bring our cuisine and hospitality to
              this vibrant dining destination.
            </p>

            <Row>
              <Col md={{ span: 24 }} lg={{ span: 12 }}>
                <img
                  className="carosel-image-small"
                  alt="Seating Indoor"
                  src="https://s3-media3.fl.yelpcdn.com/bphoto/SoGFl9P4E-_urs0iRShUJw/o.jpg"
                />
              </Col>
              <Col md={{ span: 24 }} lg={{ span: 12 }}>
                <img
                  className="carosel-image-small"
                  alt="Seating Outdoor"
                  src="https://s3-media2.fl.yelpcdn.com/bphoto/2sycFRbspMl7HKFTkSBMWg/o.jpg"
                />
              </Col>
            </Row>

            <p className="describe">
              The dining room seats approximately 60 diners features the Thai
              artwork that runs floor to ceiling on the restaurant’s north and
              south walls.
            </p>
          </Col>
        </Row>
      </div>

      <div style={{ padding: '30px' }}>
        <Row type="flex" justify="space-around" align="top">
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 8 }}
          >
            <img
              className="carosel-image"
              alt="Guest seating outdoor"
              src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/57221251_433008420799954_3887926008338186240_n.jpg?_nc_cat=110&_nc_oc=AQkIKARN6Monh3jAo2s-VvRb63AlyNFXG9iFiMy6eWu7gL4Fbcc6aTkR3S5bKcB6Y-s&_nc_ht=scontent-dfw5-2.xx&oh=4d35c201289c23f908df32bc26f21269&oe=5D80C5F8"
            />
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 16 }}
            style={{ background: '#FFF', padding: '30px' }}
          >
            <img
              className="carosel-image-insert"
              alt="Staff Sawasdee"
              src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/57504115_433008070799989_3141602421919186944_n.jpg?_nc_cat=110&_nc_oc=AQmsSD2G4eDEBvQ5pajvUeGWcjj6F6shBgnxFhenLqLflwIwsTir3BBwLYlY_BU1oaU&_nc_ht=scontent-dfw5-2.xx&oh=2ba876802826d6a83a37e0c9b252a14b&oe=5D51BB48"
            />
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
      <div style={{ padding: '30px' }}>
        <Row type="flex" justify="space-around" align="top">
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 8 }}
          >
            <img
              className="carosel-image"
              alt="Ladies in Thai Dresses"
              src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/54255295_416369262463870_2891730544716939264_n.jpg?_nc_cat=109&_nc_oc=AQl7Lw68VtqP2QcR0n6bi70nSA2nbM92v1Oev8YM1PzPjcS8Yq9gw7xaWBj6i8NPXNU&_nc_ht=scontent-dfw5-2.xx&oh=1aa766c735cf1c9912b4331a5b9ffac6&oe=5D7C0141"
            />
            <img
              className="carosel-image"
              alt="Blessing Ceremony"
              src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/54433194_416369279130535_9109162731830771712_n.jpg?_nc_cat=109&_nc_oc=AQk-cgY_tJYmVrFGvLj109TEsHE7p8UYTyKfAVTwgne0fqmgy_lRCAoXDNDmB8zZh1w&_nc_ht=scontent-dfw5-2.xx&oh=e56158ef388be9893fef90e18180ce6f&oe=5D82D693"
            />
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 16 }}
            style={{ background: '#FFF', padding: '30px' }}
          >
            <img
              className="carosel-image-large"
              alt="Thai community"
              src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/54210524_416369219130541_7409597469329195008_n.jpg?_nc_cat=104&_nc_oc=AQnQ9D2XtU_ne5qhGZs8l9qUHlxGgDRSnkXJQ0anpv4OYIOy-FOEkYY7FvvJ8LKhCoE&_nc_ht=scontent-dfw5-2.xx&oh=6239c4983952121edbde9a15b30f3d25&oe=5D9BF88F"
            />
            <p className="describe">
              On Sunday, March 18, 2019, we have the special blessing of the
              restaurant. We enjoyed everyone’s company and it is always
              wonderful to see the Thai community come together to enjoy food
              and each other’s company. It makes us happy to see everyone in
              their traditional Thai costumes and sharing our culture with
              everyone. Thank you to our special guest หลวงพี่ Kamron Yaemyuen
              for making the journey from California to perform the blessing.
            </p>
          </Col>
        </Row>
      </div>
    </Carousel>
  )
}

export default WelcomeCarousel
