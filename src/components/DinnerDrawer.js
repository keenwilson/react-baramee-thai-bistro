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
        <Link to="/" className="menu-type">
          Appetizers
        </Link>
        <Link to="/" className="menu-type">
          House Favorites
        </Link>
        <Link to="/" className="menu-type">
          From the Wok
        </Link>
        <Link to="/" className="menu-type">
          Noodles
        </Link>
        <Link to="/" className="menu-type">
          Soups &amp; Salads
        </Link>
        <Link to="/" className="menu-type">
          Curries
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

export default DinnerDrawer
