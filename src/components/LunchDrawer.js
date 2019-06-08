import React, { Component } from 'react'
import { Drawer } from 'antd'
import { Link } from 'react-router-dom'

class LunchDrawer extends Component {
  onClose = () => {
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
        <Link to="/" className="menu-type">
          Soups
        </Link>
        <Link to="/" className="menu-type">
          Salads
        </Link>
        <Link to="/" className="menu-type">
          Noodles
        </Link>
        <Link to="/" className="menu-type">
          Fried Rice
        </Link>
        <Link to="/" className="menu-type">
          Sides
        </Link>
        <Link to="/" className="menu-type">
          Desserts
        </Link>
        <Link to="/" className="menu-type">
          Drinks
        </Link>
      </Drawer>
    )
  }
}

export default LunchDrawer
