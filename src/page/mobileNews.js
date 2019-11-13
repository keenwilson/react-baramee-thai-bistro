import React, { Component } from 'react'

class MobileNews extends Component {
  state = {}
  render() {
    const {
      logoPath,
      urlPath,
      title,
      press,
      author,
      date,
      introduction,
      featurePicturePath
    } = this.props
    return (
      <div className="mobile-news-card">
        <img width={200} alt={press} src={featurePicturePath} />
        <div className="section">
          <div className="article">
            <div class="row">
              <div class="column _10">
                <img
                  width={50}
                  className="news-avatar"
                  alt={press}
                  src={logoPath}
                />
              </div>
              <div class="column _90">
                <a target="_blank" href={urlPath} rel="noopener noreferrer">
                  <h2 className="title left">{title}</h2>
                </a>
              </div>
            </div>
            <p className="author left">
              {press}, {author}, {date}
            </p>
            <p className="introduction left">{introduction}</p>
          </div>
          <div className="aside"></div>
        </div>
      </div>
    )
  }
}

export default MobileNews
