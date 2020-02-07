import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

const MobileHome = () => {
  return (
    <div>
      <div className="narrative">
        <h1 className="underline-60">Baramee Thai Bistro</h1>
        <p className="text">
          Since opening in January 2019 ‘Baramee’ - meaning fulfilling yourself
          by making others happy in ‘Thai’ language, a Thai native and
          chef-owner, Nutnisa Hoffman and her partner, co-owner, Doug Hoffman,
          offers a taste of Northeastern Thai dishes and from-the-wok Thai-style
          cooking with the freshest produce from the City Market and locally
          grown ingredients alongside vegetarian options in the Kansas City's
          Crossroads Arts district.
        </p>
        <h1 className="underline-60">Menu</h1>
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

      <div className="chef">
        <h1 className="underline-60">Our Chef</h1>
        <img
          className="chef-picture"
          src="https://i.imgur.com/wGBMQgN.jpg"
          alt="Chef Nutnisa Hoffman"
          width="100%"
        />
        <p className="chef-quote">
          “I want to share our Thai food, share our Thai culture, meet new
          people, and be proud to represent Thai food in America.”
        </p>
        <p className="chef-title">
          <span className="chef-name">Nutnisa Hoffman</span>, the owner of Mali
          Thai Bistro in Lee’s Summit and Baramee Thai Bistro in the Crossroads
        </p>
      </div>
    </div>
  )
}

export default MobileHome
