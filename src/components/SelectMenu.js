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
      <Row type="flex" justify="center" align="top" className="select-menu">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <p className="menu" onClick={this.handleShowLunchDrawer}>
            LUNCH MENU
          </p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <p className="menu" onClick={this.handleShowDinnerDrawer}>
            DINNER MENU
          </p>
        </Col>
      </Row>
    )
  }
}

export default SelectMenu
