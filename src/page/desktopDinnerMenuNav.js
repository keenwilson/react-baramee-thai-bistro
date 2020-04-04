import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

const DesktopDinnerMenuNav = () => {
  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['1']}
      mode="inline"
    >
      <Menu.Item key="1">
        <Link to="/menu/dinner/appetizers" className="menu-meal">
          Appetizers
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/menu/dinner/house-favorites" className="menu-meal">
          House Favorites
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/menu/dinner/from-the-wok" className="menu-meal">
          From the Wok
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/menu/dinner/soups-salads" className="menu-meal">
          Soups and Salads
        </Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/menu/dinner/noodles" className="menu-meal">
          Noodles
        </Link>
      </Menu.Item>
      <Menu.Item key="6">
        <Link to="/menu/dinner/curries" className="menu-meal">
          Curries
        </Link>
      </Menu.Item>
      <Menu.Item key="7">
        <Link to="/menu/dinner/desserts-drinks" className="menu-meal">
          Desserts and Drinks
        </Link>
      </Menu.Item>
    </Menu>
  )
}

export default DesktopDinnerMenuNav
