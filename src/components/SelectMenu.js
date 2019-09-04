import React, { Component } from 'react'
import { Row, Col, Icon } from 'antd'

class SelectMenu extends Component {
  handleShowLunchDrawer = () => {
    this.props.showLunchDrawer()
  }

  handleShowDinnerDrawer = () => {
    this.props.showDinnerDrawer()
  }
  render() {
    return (
      <div className="row-menu-bar">
        <div className="cell">
          <div className="lunch">
            <p className="menu" onClick={this.handleShowLunchDrawer}>
              LUNCH MENU
            </p>
          </div>
        </div>
        <div className="cell">
          <div className="dinner">
            <p className="menu" onClick={this.handleShowDinnerDrawer}>
              DINNER MENU
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default SelectMenu
