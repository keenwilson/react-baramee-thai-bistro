import React, { Component } from 'react'
import './desktopNews.less'

class DesktopNews extends Component {
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
      <div className="main underline-800">
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
          <div className="aside">
            <img width={272} alt={press} src={featurePicturePath} />
          </div>
        </div>
      </div>
    )
  }
}

export default DesktopNews
