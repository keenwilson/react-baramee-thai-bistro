import React from 'react'
import { Route } from 'react-router-dom'
import DesktopHeader from './desktopHeader'
import DesktopFooter from './desktopFooter'
import DesktopHome from './desktopHome'
import DesktopLunchIndex from './desktopLunchIndex'
import DesktopDinnerIndex from './desktopDinnerIndex'
import DesktopMenuIndex from './desktopMenuIndex'

const DesktopIndex = () => {
  return (
    <div className="website">
      <DesktopHeader />
      <div className="desktop-content-display">
        <Route exact path={'/'} component={DesktopHome} />
        <Route path={'/menu'} component={DesktopMenuIndex} />
        <Route path={'/menu/lunch'} component={DesktopLunchIndex} />
        <Route path={'/menu/dinner'} component={DesktopDinnerIndex} />
      </div>

      <DesktopFooter />
    </div>
  )
}

export default DesktopIndex
