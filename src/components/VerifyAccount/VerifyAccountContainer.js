import React, { Component } from 'react'

import MetaCoin from 'contracts/MetaCoin.sol';

class VerifyAccountContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      accounts: [],
      coinbase: '',
      loggedin:false
    }

    this._verifyAccount = this._verifyAccount.bind(this)
  }

  componentWillMount(){
    MetaCoin.setProvider(this.props.web3.currentProvider);    
  }

  _verifyAccount() {
    var sha3 = this.props.web3.sha3("buyether.automte")
    var component = this
    if (!this.state.loggedin) {
      this.props.web3.eth.sign(this.props.web3.eth.accounts[0],sha3, function(value){
        component.setState({coinbase:component.props.web3.eth.accounts[0]})
        //change the contents of the verifyAccount
      })
    } else {
      //TODO create a pop up modal to confirm they are signing out
      console.log("confirm the user wants to sign out")
    }
    this.setState({loggedin:!this.state.loggedin})
  }

  render() {
    var account = this.state.coinbase
    var accountDislay = ''
    if (this.state.loggedin) {
      accountDislay = account
    } else {
      accountDislay = "Verify Account"
    }

    return (
      <div className="verifyAccount" onClick={this._verifyAccount.bind(this)}>
        {accountDislay}
      </div>
    )
  }
}

export default VerifyAccountContainer