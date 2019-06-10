import React from 'react'

const Thumbnail = props => {
  return (
    <div class="thumbnail">
      <img
        src={props.imagePath}
        className={props.isPortrait ? 'portrait' : ''}
        alt={props.imageAlt ? props.imageAlt : 'Thai food in Kansas City image'}
      />
    </div>
  )
}

export default Thumbnail
