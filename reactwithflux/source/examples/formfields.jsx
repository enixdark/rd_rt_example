import React, { Component } from 'react'
import ClassNames from 'classnames'
import { Input, FormGroup, FormControl, InputGroup, ButtonInput } from 'react-bootstrap'

class FormFields extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
  }

  validateEmail(){
    let length = this.state.email.length
    let validEmail = this.state.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    if (validEmail) return 'success'
    else if (length > 5) return 'warning'
    else if (length > 0) return 'error'
  }

  validatePassword(){
    let pw = this.state.password
    if(pw.length < 5) return null
    let containsNumber = pw.match(/[0-9]/)
    let hasCapitalLetter = pw.toLowerCase() !== pw
    return containsNumber && hasCapitalLetter ? 'success' : 'error'
  }

  handlePasswordChange(){
    this.setState({password: this.refs.inputPassword.getValue()})
  }

  handleEmailChange(){
    this.setState({email: this.refs.inputEmail.getValue()})
  }

  validateForm(){
    return this.validateEmail() === this.validatePassword()
  }

  render(){
    return (
      <form>
        <Input type="text" label="Name" placeholder="Enter your name"/>
        <Input type="email" label="Email Address" placeholder="Enter your email"
          onChange={this.handleEmailChange.bind(this)}
          ref="inputEmail"
          bsStyle={this.validateEmail()}/>
        <Input type="password"
          label="Password"
          onChange={ this.handlePasswordChange.bind(this) }
          ref="inputPassword"
          bsStyle={ this.validatePassword() }/>
        <ButtonInput type="submit"
          value="Submit this form"
          disabled={ !(this.validateForm()) }/>
      </form>
    )
  }
}

export default FormFields