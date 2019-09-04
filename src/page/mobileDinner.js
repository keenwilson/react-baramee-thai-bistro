import React from 'react'
import { Redirect, Route, Link } from 'react-router-dom'
import { Breadcrumb, Icon } from 'antd'

const MobileDinner = () => {
  return (
    <React.Fragment>
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item>
          <Link to="/">
            <Icon type="home" />
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span>Menu</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Dinner</Breadcrumb.Item>
      </Breadcrumb>
      <div className="narrative">
        <h1>Dinner Menu</h1>
      </div>
    </React.Fragment>
  )
}

export default MobileDinner
