import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Icon } from 'antd'
import MobileHome from './mobileHome'
import MobileLunchIndex from './mobileLunchIndex'
import MobileDinnerIndex from './mobileDinnerIndex'

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
          <a href="tel:+1-816-442-7070">
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
        <Route path={'/menu/dinner'} component={MobileDinnerIndex} />
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
        </p>{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.orderbarameethai.com/"
        >
          <p className="text-align-center footer-block">Order Online</p>
        </a>
        <br />
        <p className="text-align-center footer-block">
          (816) 442-7070 <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/barameethaibistro/"
          >
            Follow our <Icon type="facebook" style={{ fontSize: '18px' }} /> for
            status update
          </a>
          <br />
        </p>
        <p className="text-align-center footer-block curb-side">
          Seating at Baramee Thai Bistro is available on a walk-in basis only.
        </p>
      </div>
    </div>
  )
}

export default MobileIndex
