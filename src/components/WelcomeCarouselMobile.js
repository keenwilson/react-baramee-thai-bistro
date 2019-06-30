import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile'

class WelcomeCarouselMobile extends Component {
  state = {
    data: [],
    imgHeight: 176
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          {
            alt: 'Wall art in the dining area',
            src:
              'https://bloximages.newyork1.vip.townnews.com/feastmagazine.com/content/tncms/assets/v3/editorial/8/44/8449b23a-4501-11e9-9777-43d54a9b2620/5c880feac8edd.image.jpg'
          },
          {
            alt: 'Customers in the dining area',
            src:
              'https://s3-media3.fl.yelpcdn.com/bphoto/25J2DAog7vXWFRm2dP3K_A/o.jpg'
          },
          {
            alt: 'Seating Outdoor',
            src:
              'https://s3-media3.fl.yelpcdn.com/bphoto/SoGFl9P4E-_urs0iRShUJw/o.jpg'
          },
          {
            alt: 'Staff Sawasdee',
            src:
              'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/57504115_433008070799989_3141602421919186944_n.jpg?_nc_cat=110&_nc_oc=AQmsSD2G4eDEBvQ5pajvUeGWcjj6F6shBgnxFhenLqLflwIwsTir3BBwLYlY_BU1oaU&_nc_ht=scontent-dfw5-2.xx&oh=2ba876802826d6a83a37e0c9b252a14b&oe=5D51BB48'
          },
          {
            alt: 'Ladies in Thai Dresses',
            src:
              'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/54255295_416369262463870_2891730544716939264_n.jpg?_nc_cat=109&_nc_oc=AQl7Lw68VtqP2QcR0n6bi70nSA2nbM92v1Oev8YM1PzPjcS8Yq9gw7xaWBj6i8NPXNU&_nc_ht=scontent-dfw5-2.xx&oh=1aa766c735cf1c9912b4331a5b9ffac6&oe=5D7C0141'
          },
          {
            alt: 'Blessing Ceremony',
            src:
              'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/54433194_416369279130535_9109162731830771712_n.jpg?_nc_cat=109&_nc_oc=AQk-cgY_tJYmVrFGvLj109TEsHE7p8UYTyKfAVTwgne0fqmgy_lRCAoXDNDmB8zZh1w&_nc_ht=scontent-dfw5-2.xx&oh=e56158ef388be9893fef90e18180ce6f&oe=5D82D693'
          },
          {
            alt: 'Thai community',
            src:
              'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/54210524_416369219130541_7409597469329195008_n.jpg?_nc_cat=104&_nc_oc=AQnQ9D2XtU_ne5qhGZs8l9qUHlxGgDRSnkXJQ0anpv4OYIOy-FOEkYY7FvvJ8LKhCoE&_nc_ht=scontent-dfw5-2.xx&oh=6239c4983952121edbde9a15b30f3d25&oe=5D9BF88F'
          }
        ]
      })
    }, 100)
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) =>
            console.log(`slide from ${from} to ${to}`)
          }
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <img
              src={val.src}
              alt={val.alt}
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'))
                this.setState({ imgHeight: 'auto' })
              }}
            />
          ))}
        </Carousel>
      </WingBlank>
    )
  }
}

export default WelcomeCarouselMobile
