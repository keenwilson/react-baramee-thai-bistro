import React from 'react'
import { Redirect, Route, Link } from 'react-router-dom'
import { Icon, Button } from 'antd'
import MobileHome from './mobileHome'
import MobileDinner from './mobileDinner'
import MobileLunchIndex from './mobileLunchIndex'

const MobileIndex = () => {
  return (
    <div className="mobile">
      <div className="mobile-header">
        <Link to="/">
          <img
            className="logo"
            alt="Baramee Thai Bistro"
            src="https://i.imgur.com/v9ZgS3o.jpg"
          />{' '}
        </Link>

        <p className="call-us">
          <a href="tel:+1-816-944-4119">
            <Icon type="phone" />
            <span className="phone-number">(816) 442-7070</span>
          </a>
        </p>
      </div>
      <img
        src="https://i.imgur.com/xLYTGIll.jpg"
        alt="Top Place for Thai"
        width="100%"
      />

      <div className="mobile-content-display">
        <Route exact path={'/'} component={MobileHome} />
        <Route path={'/menu/lunch'} component={MobileLunchIndex} />
        <Route path={'/menu/dinner'} component={MobileDinner} />
      </div>

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

export default MobileIndex
