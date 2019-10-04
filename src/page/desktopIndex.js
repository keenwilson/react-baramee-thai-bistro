import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Icon } from 'antd'
import DesktopHeader from './desktopHeader'
import DesktopFooter from './desktopFooter'
import DesktopHome from './desktopHome'
import DesktopLunchIndex from './desktopLunchIndex'
import DesktopDinnerIndex from './desktopDinnerIndex'

const DesktopIndex = () => {
  return (
    <div className="website">
      <DesktopHeader />
      <div className="desktop-content-display">
        <Route exact path={'/'} component={DesktopHome} />
        <Route path={'/menu/lunch'} component={DesktopLunchIndex} />
        <Route path={'/menu/dinner'} component={DesktopDinnerIndex} />
      </div>

      <DesktopFooter />
    </div>
  )
}

export default DesktopIndex
