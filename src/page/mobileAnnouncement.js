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
              Due to the recent outbreak of COVID-19 and the latest city
              mandates restricting capacity, we will only be offering to carry
              out services at Baramee Thai Bistro for the immediate future. We
              apologize for any inconvenience.
            </div>

            <div className="body-announcement">
              For dine-in service, please visit us at our sister location,
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.phikulthaibistro.com/"
              >
                Phikul Thai Bistro
              </a>{' '}
              in the River Market. We have an equally talented kitchen staff to
              cook all of your favorites and an extensive dining area that will
              allow us to really spread everyone out. Hop on the streetcar, and
              it will drop you right at our door.
            </div>

            <div className="body-announcement">
              Thank you to everyone for making us the #1 Thai food destination
              in Kansas City. We love our little Bistro and our small dining
              room's extraordinary energy and atmosphere when it is full. We
              will look forward to seeing all of our wonderful Thai food friends
              after this wave of COVID-19 passes. Be safe out there.
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
