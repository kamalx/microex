import React, { Component } from 'react'
import './App.css'
import './styles.css'

import {Grid,Row,Col} from 'react-bootstrap'

import Logo from 'images/automte-white.svg'
import EthereumAutomteLogo from 'images/ethereum-automte-logo.svg'
import HowTo from 'components/HowTo'
import BigAssEtherLogo from 'components/BigAssEtherLogo'
import EtherToRs from 'components/EtherToRs'
import VerifyAccountContainer from 'components/VerifyAccount/VerifyAccountContainer'
import MarketingMessage from 'components/MarketingMessage'


class App extends Component {
  render () {
    return (
      <div className="App">
        <header>
          <Grid>
            <Row>
              <Col md={7}>
                <img className="brand" src={Logo} alt="Automte logo" />
              </Col>
              <Col md={5}>
                <div className="ethereum-wallet-id">
                  <VerifyAccountContainer web3={this.props.web3}/>
                </div>
              </Col>
            </Row>
          </Grid>
        </header>
        <section>
          <Grid>
            <Row>
              <Col md={8}>
                <div className="usp">
                  <MarketingMessage />
                </div>
                <div className="help-link">
                  <HowTo />
                </div>
              </Col>
              <Col md={4}>
                <div className="ethereum-automte">
                  <img src={EthereumAutomteLogo} alt=""/>
                </div>
                <div className="conversion-rate">
                  <EtherToRs />
                </div>
              </Col>
            </Row>
          </Grid>
        </section>
      </div>
    )
  }
}

export default App
