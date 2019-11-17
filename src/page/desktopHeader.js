import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'

const DesktopHeader = () => {
  return (
    <div className="row-header">
      <div className="cell">
        <Link to="/" className="the-restaurant-logo">
          <img
            className="logo"
            alt="Baramee Thai Bistro"
            src="https://i.imgur.com/v9ZgS3o.jpg"
          />
        </Link>
      </div>

      <div className="cell">
        <p className="call-the-restaurant">
          <a href="tel:+1-816-442-7070">
            <Icon type="phone" />
            <span className="phone-number">(816) 442-7070</span>
          </a>
        </p>
      </div>
    </div>
  )
}

export default DesktopHeader
