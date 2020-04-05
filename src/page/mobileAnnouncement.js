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
            <div className="mobile-title">
              Dear Values Customers and Friends,
            </div>
            <div className="body-announcement">
              Thank you to all of our wonderful customers that made our carry
              out service a success. We appreciate each and everyone of you and
              the love you have shown for our food and our team. We will
              continue with the carry out and curbside service but we will
              adjust our hours. For the time being we will keep our full menu,
              but may have to change if ingredients become unavailable.
              <br />
              <div className="hours">
                Our temporary hours during this crisis will be as follows.
                <br />
                Monday - Thursday 11:00 AM - 8:00 PM <br /> Friday - Saturday
                11:00 AM - 9.00 PM <br /> Sunday Closed <br />
                Orders will be taken up to closing time. Please pick up orders
                within 15 minutes after closing.
              </div>
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
              Thank you !!! We look forward to see you soon. <br />
              Baramee Thai Bistro Team
            </div>
          </Card>
        )}
      </div>
    )
  }
}

export default MobileAnnouncement
