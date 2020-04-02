import React, { Component } from 'react'
import { Icon, Card, Button } from 'antd'

class DesktopAnnouncement extends Component {
  state = {
    display: true
  }
  handleClick = e => {
    this.setState({
      display: false
    })
  }
  render() {
    return (
      <div className="special-announcement">
        {this.state.display && (
          <Card className="info-annoucemnet">
            <Button className="close-announcement" onClick={this.handleClick}>
              <Icon type="close" />
            </Button>
            <div className="header">Dear Values Customers and Friends,</div>
            <div className="body">
              Thank you for being patient with us during these difficult times.
              Thank you to everyone for all of the online requests for our food.
              After two weeks of confinement, our staff feel comfortable to get
              back to doing what they do best and they are ready to cook
              delicious thai food for you. We wish we could visit with you in
              the dining room and look forward to doing that soon, but for now,
              it looks like carry out only. Starting Tuesday, March 31 we will
              be open for curbside and carry out service only.
            </div>

            <div className="facebook-link">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/barameethaibistro/"
              >
                Follow our <Icon type="facebook" style={{ fontSize: '18px' }} />{' '}
                for status update
              </a>
            </div>
            <div className="ending">
              Thank you !!! We look forward to see you soon.
              <div className="team-announcement">Baramee Thai Bistro Team</div>
            </div>
          </Card>
        )}
      </div>
    )
  }
}

export default DesktopAnnouncement
