import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'

const DesktopFooter = () => {
  return (
    <div className="footer">
      <div className="row-footer">
        <div className="cell">
          <p className="address">
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
        </div>

        <div className="cell">
          <p className="hours">
            Monday - Thursday | 11 am - 9pm <br />
            Friday - Saturday | 11 am - 10pm
            <br />
            Sunday | Closed
          </p>
        </div>
        <div className="cell">
          <p className="phone-number">
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
      <p className="copyright">
        Copyright © 2019 Baramee Thai Bistro | All rights reserved
      </p>
    </div>
  )
}

export default DesktopFooter
