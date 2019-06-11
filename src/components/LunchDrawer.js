import React, { Component } from 'react'
import { Drawer } from 'antd'
import { Link } from 'react-router-dom'

class LunchDrawer extends Component {
  onClose = () => {
    this.props.handleOnClose()
  }

  onMenuClick = () => {
    this.props.handleOnClose()
  }

  render() {
    return (
      <Drawer
        className="menu-drawer"
        title="Lunch Menu"
        placement="left"
        closable={false}
        onClose={this.onClose}
        visible={this.props.lunchMenuVisible}
      >
        <ul className="menu-list">
          <li className="menu-title-list" onClick={this.onMenuClick}>
            <Link to="/lunch/appetizers" className="menu-type">
              Appetizers
            </Link>
          </li>
          <li className="menu-title-list" onClick={this.onMenuClick}>
            <Link to="/lunch/soups" className="menu-type">
              Soups
            </Link>
          </li>
          <li className="menu-title-list" onClick={this.onMenuClick}>
            <Link to="/lunch/salads" className="menu-type">
              Salads
            </Link>
          </li>
          <li className="menu-title-list" onClick={this.onMenuClick}>
            <Link to="/lunch/noodles" className="menu-type">
              Noodles
            </Link>
          </li>
          <li className="menu-title-list" onClick={this.onMenuClick}>
            <Link to="/lunch/fried-rice" className="menu-type">
              Fried Rice
            </Link>
          </li>
          <li className="menu-title-list" onClick={this.onMenuClick}>
            <Link to="/lunch/curries" className="menu-type">
              Curries
            </Link>
          </li>
          <li className="menu-title-list" onClick={this.onMenuClick}>
            <Link to="/lunch/from-the-wok" className="menu-type">
              From the Wok
            </Link>
          </li>
          <li className="menu-title-list" onClick={this.onMenuClick}>
            <Link to="/lunch/sides" className="menu-type">
              Sides
            </Link>
          </li>
          <li className="menu-title-list" onClick={this.onMenuClick}>
            <Link to="/lunch/desserts" className="menu-type">
              Desserts
            </Link>
          </li>
          <li className="menu-title-list" onClick={this.onMenuClick}>
            <Link to="/lunch/drinks" className="menu-type">
              Drinks
            </Link>
          </li>
        </ul>
      </Drawer>
    )
  }
}

export default LunchDrawer
