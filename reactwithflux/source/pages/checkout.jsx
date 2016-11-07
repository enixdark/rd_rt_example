import React from 'react'
import { Grid, Wells, FormGroup, FormControl,
         InputGroup, Button } from 'react-bootstrap'

import CartActions from '../actions/cart'
import CustomerActions from "../actions/customer"
import clone from 'lodash/clone'
import { LinkContainer } from "react-router-bootstrap"

const CustomerData = React.createClass({
  getDefaultProps(){
    return {
      customer: {
        address: {},
        validAdress: false
      }
    }
  },
  getInitState(){
    return {
      customer:{
        name: this.props.customer.address.name ?
        this.props.customer.address.name : "",
        address: this.props.customer.address.address ?
        this.props.customer.address.address : "",
        zipCode: this.props.customer.address.zipCode ?
        this.props.customer.address.zipCode : "",
        city: this.props.customer.address.city ?
        this.props.customer.address.city : ""
      },
      validAddress: this.props.customer.validAddress ?
      this.props.customer.validAddress : false
    }
  },
  validationStateName() {
    if (this.state.customer.name.length > 5)
      return "success"
    else if (this.state.customer.name.length > 2)
      return "warning"
    else
      return "error"
  },
  handleChangeName(event){
    let customer = clone(this.state.customer)
    customer.name = event.target.form[0].value
    this.setState({
      customer,
      validAddress: this.checkAllValidations()
    })
    CustomerActions.SaveAddress(this.state)
  },
  validationStateAddress(){
    if (this.state.customer.address.length > 5)
      return "success"
    else if (this.state.customer.address.length > 2)
      return "warning"
    else
      return "error"
  },
  handleChangeAddress(event){
    let customer = clone(this.state.customer)
    customer.address = event.target.form[0].value
    this.setState({
      customer,
      validAddress: this.checkAllValidations()
    })
    CustomerActions.saveAddress(this.state)
  },
  validationStateZipCode(){
    if (this.state.customer.zipCode.length > 5)
      return "success"
    else if (this.state.customer.zipCode.length > 2)
      return "warning"
    else
      return "error"
  },
  handleChangeZipCode(event){
    let customer = clone(this.state.customer)
    customer.zipCode = event.target.form[2].value;
    this.setState({
      customer,
      validAddress: this.checkAllValidations()
    });
    CustomerActions.SaveAddress(this.state)
  },
  validationStateCity() {
    if (this.state.customer.city.length > 5)
      return "success"
    else if (this.state.customer.city.length > 2)
      return "warning"
    else
      return "error"
  },
  handleChangeCity(event) {
    let customer = clone(this.state.customer);
    customer.city =
    event.target.form[3].value
    this.setState({
      customer,
      validAddress: this.checkAllValidations()
    });
    CustomerActions.SaveAddress(this.state)
  },
  checkAllValidations() {
    return ("success" == this.validationStateName() &&
      "success" == this.validationStateAddress() &&
      "success" == this.validationStateZipCode() &&
      "success" == this.validationStateCity())
  },
  render(){
    return (
      <div>
        <form>
          <FormGroup>
            <FormControl 
                        type="text" value={this.state.customer.address.name}
                        placeholder="Enter Your Name"
                        label="Name"
                        bsStyle={this.validationStateName()}
                        hasFeedback
                        onChange={this.handleChangeName}
            />
          </FormGroup>

          <FormGroup>
            <FormControl
                        type="text"
                        value={ this.state.customer.address }
                        placeholder="Enter your street address"
                        label="Street "
                        bsStyle={ this.validationStateAddress() }
                        hasFeedback
                        onChange={ this.handleChangeAddress } />
          </FormGroup>

          <FormGroup>
            <FormControl
                        type="text"
                        value={ this.state.customer.address }
                        placeholder="Enter your street address"
                        label="Street "
                        bsStyle={ this.validationStateAddress() }
                        hasFeedback
                        onChange={ this.handleChangeAddress } />
          </FormGroup>

          <FormGroup>
            <FormControl
                        type="text"
                        value={ this.state.customer.city }
                        placeholder="Enter your city"
                        label="City"
                        bsStyle={this.validationStateCity()}
                        hasFeedback
                        onChange={this.handleChangeCity}/>
          </FormGroup>
        </form>
      </div>
    )
  }
})
const CartElement = React.createClass({
  render(){
    const title = Object.keys(this.props.productData)
    if(title){
      return (
        <tr>
          <td>{title}</td>
          <td>{this.props.productData[title].price}</td>
          <td>
            <Button bsSize="xsmaill" bsStyle="danger" 
             onClick={CartActions.RemoveFormCart.bind(null, this.props.productData)}>
              Remove
            </Button>
          </td>
        </tr>
      )
    }
    else{
      return null
    }
  }
})

const Cart = React.createClass({
  propTypes:{
    cart: React.PropTypes.array
  },
  render(){
    let total = 0
    this.props.cart.forEach( data => {
      total += parseFloat(data[Object.keys(data)].price.replace("$", ""))
    })

    let tableData = this.props.cart.map( (data, idx) => {
      return (<CartElement productData={data} key={idx} />)
    })

    if(!tableData.length){
      tableData = (<tr>
        <td colSpan="3">Your cart is</td>
      </tr>
      )
    }

    return (
      <Table striped condensed>
      <thead>
      <tr>
      <th width="40%">Name</th>
      <th width="30%">Price</th>
      <th width="30%"></th>
      </tr>
      </thead>
      <tbody>
      {tableData}
      <tr className="summary" border>
      <td><strong>Order total:</strong></td>
      <td><strong>${total}</strong></td>
      <td>
      {tableData.length ? <Button bsSize="xsmall" bsStyle="danger" onClick={CartActions.ClearCart}> Clear Cart </Button> : null}
        </td>
        </tr>
        </tbody>
      </Table>
      )
  }
})

const Checkout = React.createClass({
  propTypes:{
    cart: React.PropTypes.array,
    customer: React.PropTypes.object
  },
  getDefaultProps(){
    return {
      cart: [],
      customer:{
        address: {},
        validAdress: false
      }
    }
  },
  render(){
    let checkoutEnabled = (this.props.customer.validAdress && this.props.cart.length > 0)
    return (
      <Grid>
        <Wells bzSize="small">
          <p>Please confirm your order and checkout your cart</p>
        </Wells>

        <Cart {...this.props} />

        <CustomerData {...this.props} />

        <LinkContainer to="/receipt">
          <Button disabled={!CheckoutEnabled} bsStyle= {CheckoutEnabled ? "success" : "default"}>
          Proceed to checkout
          </Button>
        </LinkContainer>
      </Grid>
    )
  }
})

module.exports = Checkout