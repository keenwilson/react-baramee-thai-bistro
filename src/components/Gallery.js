import React from 'react'
import { Row, Col } from 'antd'
import PictureCard from './PictureCard'

const Gallery = () => {
  return (
    <Row gutter={32}>
      <Col span={6}>
        <PictureCard
          title="Food"
          description="1"
          imagePath="https://i.imgur.com/XSsFAEnl.jpg"
        />
      </Col>
      <Col span={6}>
        <PictureCard
          title="Seating"
          description="2"
          imagePath="https://i.imgur.com/et4jkYdl.jpg"
        />
      </Col>
      <Col span={6}>
        <PictureCard
          title="Ambience"
          description="3"
          imagePath="https://i.imgur.com/Mzge3sLl.jpg"
        />
      </Col>
      <Col span={6}>
        <PictureCard
          title="Community"
          description="4"
          imagePath="https://i.imgur.com/swqRUSXl.jpg"
        />
      </Col>
    </Row>
  )
}

export default Gallery
