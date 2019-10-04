import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import SelectMenu from '../components/SelectMenu'
import LunchDrawer from '../components/LunchDrawer'
import DinnerDrawer from '../components/DinnerDrawer'
import ContactFooter from '../components/ContactFooter'
import LunchSoups from '../menu/lunch/soups'
import LunchSalads from '../menu/lunch/salads'
import LunchNoodles from '../menu/lunch/noodles'
import LunchFriedRice from '../menu/lunch/fried-rice'
import LunchSides from '../menu/lunch/sides'
import LunchDesserts from '../menu/lunch/desserts'
import LunchDrinks from '../menu/lunch/drinks'
import LunchAppetizers from '../menu/lunch/appetizers'
import LunchCurries from '../menu/lunch/curries'
import LunchFromTheWok from '../menu/lunch/fromTheWok'
import DinnerAppetizers from '../menu/dinner/appetizers'
import DinnerFromTheWok from '../menu/dinner/fromTheWok'
import DinnerNoodles from '../menu/dinner/noodles'
import DinnerSoupsSalads from '../menu/dinner/soupsSalads'
import DinnerCurries from '../menu/dinner/curries'
import DinnerDessertsDrinks from '../menu/dinner/dessertsDrinks'
import DinnerHouseFavorites from '../menu/dinner/houseFavorites'
import DesktopHeader from './desktopHeader'
import Thumbnail from '../components/thumbnail'

const { Content, Footer } = Layout

class DesktopHome extends Component {
  state = { dinnerMenuVisible: false, lunchMenuVisible: false }

  showDinnerDrawer = () => {
    this.setState({
      dinnerMenuVisible: true
    })
  }
  onDinnerDrawerClose = () => {
    this.setState({
      dinnerMenuVisible: false
    })
  }

  showLunchDrawer = () => {
    this.setState({
      lunchMenuVisible: true
    })
  }

  onLunchDrawerClose = () => {
    this.setState({
      lunchMenuVisible: false
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="intro-gallery">
          <Thumbnail
            className="images"
            imagePath="https://i.imgur.com/lL6qo8n.jpg"
            imageAlt="Best Thai restaurant in Kansas City - Wall Paintingå"
            isPortrait={false}
          />
          <Thumbnail
            className="images"
            imagePath="https://i.imgur.com/xLYTGIll.jpg"
            imageAlt="Best Thai restaurant in Kansas City - Northeastern Thai"
            isPortrait={false}
          />
          <Thumbnail
            className="images"
            imagePath="https://s3-media2.fl.yelpcdn.com/bphoto/FGHH7p9ZL40ogeMl0vPJbA/o.jpg"
            imageAlt="Best Thai restaurant in Kansas City - Pad Ka Prao"
            isPortrait={false}
          />
          <Thumbnail
            className="images"
            imagePath="https://s3-media3.fl.yelpcdn.com/bphoto/SoGFl9P4E-_urs0iRShUJw/o.jpg"
            imageAlt="Seating Indoor"
            isPortrait={false}
          />
          <Thumbnail
            className="images"
            imagePath="https://s3-media2.fl.yelpcdn.com/bphoto/nYrLq2A6VNlWHPWOglnqig/o.jpg"
            imageAlt="Best Thai restaurant in Kansas City - Baramee Thai Platters"
            isPortrait={false}
          />
          <Thumbnail
            className="images"
            imagePath="https://s3-media2.fl.yelpcdn.com/bphoto/Rw5tUfUDPfl0M4uouSZjBw/o.jpg"
            imageAlt="Best Thai restaurant in Kansas City - Pad Thai"
            isPortrait={true}
          />
          <Thumbnail
            className="images"
            imagePath="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/57331473_433008480799948_266372282560020480_n.jpg?_nc_cat=106&_nc_oc=AQlWzZ9pKl0K4FwyJ2maBgwKkUY7Tzxn8ewJSiJ4zlXZGqQgI1q_uGI6dmsZqZSeG9hN0lS9yUcgHFpe6RY8MPIt&_nc_ht=scontent-dfw5-1.xx&oh=a4814497c2d1b75b4921c454216406bd&oe=5DC4B712"
            imageAlt="Seating Outdoor: Red Umbrella"
            isPortrait={true}
          />
          <Thumbnail
            className="images"
            imagePath="https://s3-media1.fl.yelpcdn.com/bphoto/YiX9_BAtBmSUV9iFYfZRyw/o.jpg"
            imageAlt="Best Thai restaurant in Kansas City - Red Curries"
            isPortrait={false}
          />

          <Thumbnail
            className="images"
            imagePath="https://i.imgur.com/qw2szPHl.jpg"
            imageAlt="Best Thai restaurant in Kansas City - Satey"
            isPortrait={false}
          />
          <Thumbnail
            className="images"
            imagePath="https://i.imgur.com/WL2blEul.jpg"
            imageAlt="Best Thai restaurant in Kansas City - Interior"
            isPortrait={false}
          />
          <Thumbnail
            className="images"
            imagePath="https://i.imgur.com/lGZgLXfl.jpg"
            imageAlt="Best Thai restaurant in Kansas City - Sticky Rice Mango"
            isPortrait={false}
          />
        </div>
        <div className="desktop-narrative">
          <h1>Baramee Thai Bistro</h1>
          <p>
            Since opening in January 2019 ‘Baramee’ - meaning fulfilling
            yourself by making others happy in ‘Thai’ language, a Thai native
            and chef-owner, Nutnisa Hoffman and her partner, co-owner, Doug
            Hoffman, offers a taste of Northeastern Thai dishes and from-the-wok
            Thai-style cooking with the freshest produce from the City Market
            and locally grown ingredients alongside vegetarian options in the
            Kansas City's Crossroads Arts district.
          </p>
        </div>
        <div className="drawer-activation">
          <SelectMenu
            showLunchDrawer={this.showLunchDrawer}
            showDinnerDrawer={this.showDinnerDrawer}
          />
        </div>
        <DinnerDrawer
          dinnerMenuVisible={this.state.dinnerMenuVisible}
          handleOnClose={this.onDinnerDrawerClose}
        />
        <LunchDrawer
          lunchMenuVisible={this.state.lunchMenuVisible}
          handleOnClose={this.onLunchDrawerClose}
        />
        =
      </React.Fragment>
    )
  }
}

export default DesktopHome
