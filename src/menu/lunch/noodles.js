import React from 'react'
import { Row, Col, Divider } from 'antd'
const LunchNoodles = () => {
  return (
    <React.Fragment>
      <Row className="menu-display">
        <Divider className="menu-display-time">Lunch</Divider>
        <h1 className="menu-display-category">Noodles</h1>
      </Row>
      <Row type="flex" justify="center" align="top" className="menu-display">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Menu Name</h1>
          <p className="menu-display-description">Menu 1 Description</p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <h1 className="menu-display-name">Menu Name</h1>
          <p className="menu-display-description">Menu 2 Description</p>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default LunchNoodles
