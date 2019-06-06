import React from 'react'
import { Card } from 'antd'

const { Meta } = Card

const PictureCard = props => {
  return (
    <Card
      hoverable
      style={{ width: 240, height: 240 }}
      cover={<img alt={props.title} src={props.imagePath} />}
    >
      <Meta title={props.title} description={props.description} />
    </Card>
  )
}

export default PictureCard
