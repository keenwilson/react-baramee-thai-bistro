import React, { Component } from 'react'
import { Drawer } from 'antd'

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
        <p className="menu-type">Soups</p>
        <p className="menu-type">Salads</p>
        <p className="menu-type">Noodles</p>
        <p className="menu-type">Fried Rice</p>
        <p className="menu-type">Sides</p>
        <p className="menu-type">Desserts</p>
        <p className="menu-type">Drinks</p>
      </Drawer>
    )
  }
}

export default LunchDrawer
