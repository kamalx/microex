import React, { Component } from 'react'
import './App.css'

import {Grid,Row,Col} from 'react-bootstrap'

import Logo from 'components/Logo'
import HowTo from 'components/HowTo'
import BigAssEtherLogo from 'components/BigAssEtherLogo'
import EtherToRs from 'components/EtherToRs'
import VerifyAccountContainer from 'components/VerifyAccount/VerifyAccountContainer'
import MarketingMessage from 'components/MarketingMessage'


class App extends Component {
  render () {
    return (
      <div className="App">
        <Grid>
        <Row>
          <Col sm={2} xs={2}>
            <Logo />
          </Col>
        <Col sm={2} xs={2} xsOffset={3}>
          <HowTo />
        </Col>
        <Col sm={2} xs={2} xsOffset={3}>
          <VerifyAccountContainer web3={this.props.web3}/>
        </Col>
        </Row>
        <Row>
        <Col>
          <MarketingMessage />
        </Col>
        <Col>
          <BigAssEtherLogo />
          <EtherToRs />
        </Col>
        </Row>
        </Grid>
      </div>
    )
  }
}

export default App
