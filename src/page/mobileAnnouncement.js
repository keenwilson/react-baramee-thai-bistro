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
              Our Dining Room is now open. We ask that everyone will please
              follow the new dine-in guidelines posted by the city. With new
              capacity limits, which includes our staff, we will only be allowed
              18 customers inside at a time. If we have 18 customers dining,
              customers waiting for a table will, unfortunately, have to wait
              outside. Thank you to everyone for your patience.
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
            <div className="team-announcement">Baramee Thai Bistro Team</div>
          </Card>
        )}
      </div>
    )
  }
}

export default MobileAnnouncement
