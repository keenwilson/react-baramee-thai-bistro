import React from 'react'
import { Route, Link } from 'react-router-dom'

const DesktopMenuIndex = () => {
  return (
    <React.Fragment>
      <div className="heading-title underline-60">Our Menu</div>
      <div className="main-menu">
        <div className="flex-box">
          <div className="item-1">
            <Link to="/menu/lunch" className="menu-meal">
              Lunch
            </Link>
          </div>
          <div className="item-2">
            <Link to="/menu/dinner" className="menu-meal">
              Dinner
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default DesktopMenuIndex
