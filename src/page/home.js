import React, { Component } from 'react'
import WelcomeCarousel from '../components/WelcomeCarousel'
import ContactRow from '../components/ContactRow'
import InThePress from '../components/InThePress'

class Home extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <WelcomeCarousel />
        <ContactRow />
        <InThePress />
      </React.Fragment>
    )
  }
}

export default Home
