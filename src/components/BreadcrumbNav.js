import React from 'react'
import { Breadcrumb, Icon } from 'antd'
import { Link } from 'react-router-dom'

const BreadcrumbNav = ({ content, meal, linkto, dish }) => {
  return (
    <Breadcrumb className="breadcrumb">
      <Breadcrumb.Item>
        <Link to="/">
          <Icon type="home" />
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to="/">
          <span>{content}</span>
        </Link>
      </Breadcrumb.Item>
      <Link to={linkto}>
        <Breadcrumb.Item>
          <span>{meal}</span>
        </Breadcrumb.Item>
      </Link>
      <Breadcrumb.Item>{dish}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default BreadcrumbNav
