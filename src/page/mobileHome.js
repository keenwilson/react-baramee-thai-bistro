import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

const MobileHome = () => {
  return (
    <div className="narrative">
      <h1>Baramee Thai Bistro</h1>
      <p className="text">
        Since opening in January 2019 ‘Baramee’ - meaning fulfilling yourself by
        making others happy in ‘Thai’ language, a Thai native and chef-owner,
        Nutnisa Hoffman and her partner, co-owner, Doug Hoffman, offers a taste
        of Northeastern Thai dishes and from-the-wok Thai-style cooking with the
        freshest produce from the City Market and locally grown ingredients
        alongside vegetarian options in the Kansas City's Crossroads Arts
        district.
      </p>

      <Button block className="menu-button">
        <Link to="/menu/lunch" className="menu-meal">
          Lunch Menu
        </Link>
      </Button>

      <Button block className="menu-button">
        <Link to="/menu/dinner" className="menu-meal">
          Dinner Menu
        </Link>
      </Button>
    </div>
  )
}

export default MobileHome
