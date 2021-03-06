import React from 'react'
import { Link } from 'react-router-dom'
import { Alert, Button } from 'antd'
import MobileAnnouncement from './mobileAnnouncement'

const MobileHome = () => {
  var dateFrom = '07/19/2021'
  var dateTo = '07/21/2021'
  var from = Date.parse(dateFrom)
  var to = Date.parse(dateTo)
  var check = Date.now()
  const showAlert = check <= to && check >= from ? true : false
  return (
    <div>
      <div className="narrative">
        {showAlert && (
          <Alert
            message="We will closed from Monday July19 thru Wednesday, July 21 for a team retreat. We will be back to serve delicious Thai food on Thursday the 22nd."
            type="info"
          />
        )}
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
        <h1 className="underline-60">Dine-in and take-out</h1>
        <p className="text">
          Our Dining Room is now open. You can also place your carryout order
          online.
        </p>
        <Button block className="menu-button">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.orderbarameethai.com/"
          >
            Order Online
          </a>
        </Button>
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
