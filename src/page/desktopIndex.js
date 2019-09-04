import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Icon } from 'antd'
import DesktopHeader from './desktopHeader'
import DesktopFooter from './desktopFooter'
import DesktopHome from './desktopHome'

const DesktopIndex = () => {
  return (
    <div className="website">
      <DesktopHeader />
      <DesktopHome />
      <DesktopFooter />
    </div>
  )
}

export default DesktopIndex
