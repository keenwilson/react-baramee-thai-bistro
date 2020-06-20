import React, { Component } from 'react'
import { Icon, Card, Button } from 'antd'

class MobileAnnouncement extends Component {
  state = {
    display: true,
  }
  handleClick = (e) => {
    this.setState({
      display: false,
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

            <div className="body-announcement">
              Your health and the health of our employees are our priorities. As
              we reopen, we're making updates to our dining room and the way we
              serve you to create an environment that is safe for everyone. We
              appreciate your understanding as we work to do so.
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
            <div className="team-announcement">
              Thank you !!! We look forward to seeing you soon.
              <br />
              Baramee Thai Bistro Team
            </div>
          </Card>
        )}
      </div>
    )
  }
}

export default MobileAnnouncement
