import React, { Component } from 'react'
import { Drawer } from 'antd'
import { Link } from 'react-router-dom'

class DinnerDrawer extends Component {
  onClose = () => {
    this.props.handleOnClose()
  }

  render() {
    return (
      <Drawer
        className="menu-drawer"
        title="Dinner Menu"
        placement="left"
        closable={false}
        onClose={this.onClose}
        visible={this.props.dinnerMenuVisible}
      >
        <ul className="menu-list">
          <li className="menu-title-list" onClick={this.onMenuClick}>
            <Link to="/dinner/appetizers" className="menu-type">
              Appetizers
            </Link>
          </li>
          <li className="menu-title-list" onClick={this.onMenuClick}>
            <Link to="/dinner/house-favorites" className="menu-type">
              House Favorites
            </Link>
          </li>
          <li className="menu-title-list" onClick={this.onMenuClick}>
            <Link to="/dinner/from-the-wok" className="menu-type">
              From the Wok
            </Link>
          </li>
          <li className="menu-title-list" onClick={this.onMenuClick}>
            <Link to="/dinner/noodles" className="menu-type">
              Noodles
            </Link>
          </li>
          <li className="menu-title-list" onClick={this.onMenuClick}>
            <Link to="/dinner/soups-salads" className="menu-type">
              Soups &amp; Salads
            </Link>
          </li>
          <li className="menu-title-list" onClick={this.onMenuClick}>
            <Link to="/dinner/curries" className="menu-type">
              Curries
            </Link>
          </li>
          <li className="menu-title-list" onClick={this.onMenuClick}>
            <Link to="/dinner/desserts-drinks" className="menu-type">
              Desserts &amp;Drinks
            </Link>
          </li>
        </ul>
      </Drawer>
    )
  }
}

export default DinnerDrawer
