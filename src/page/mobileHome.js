import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BackTop, Icon } from 'antd'
import { WhiteSpace } from 'antd-mobile'

class MobileHome extends Component {
  state = {}
  render() {
    return (
      <div className="mobile">
        <BackTop />
        <div className="mobile-header">
          <Link to="/">
            <img
              className="logo"
              alt="Baramee Thai Bistro"
              src="https://i.imgur.com/v9ZgS3o.jpg"
            />{' '}
          </Link>
          <p className="location">Kansas City, MO.</p>
        </div>
        <img
          src="https://i.imgur.com/xLYTGIll.jpg"
          alt="Top Place for Thai"
          width="100%"
        />
        <WhiteSpace size="md" />
        <div className="narrative">
          <p>
            Since opening ‘Baramee’ - meaning fulfilling yourself by making
            others happy in Thai language - in January 2019, a Thai native and
            chef-owner, Nutnisa Hoffman and her partner, co-owner, Doug Hoffman,
            offers a taste of Northeastern Thai dishes and from-the-wok cooking,
            alongside vegetarian options.
          </p>
        </div>
        <WhiteSpace size="md" />
        <div className="contact">
          <p className="text-align-center footer-block">
            1810 Baltimore Avenue <br />
            Kansas City, MO 64108 <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://goo.gl/maps/CyMK6AsboFsqGcTj7"
            >
              Get Directions
            </a>
          </p>
          <p className="text-align-center footer-block">
            Monday - Thursday | 11 am - 9pm <br />
            Friday - Saturday | 11 am - 10pm
            <br />
            Sunday | Closed
          </p>
          <p className="text-align-center footer-block">
            (816) 442-7070 <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/barameethaibistro/"
            >
              Send <Icon type="facebook" /> Message
            </a>
            <br />
          </p>
        </div>
      </div>
    )
  }
}

export default MobileHome
