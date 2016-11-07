import React from 'react'
import { Col, Button } from 'react-bootstrap'
import { Link } from 'react-router'
import CartActions from "../actions/cart";
const RibbonOffering = React.createClass({
  getDefaultProps(){
    return {
      productData: {}
    }
  },
  propTypes:{
    productData: React.PropTypes.object
  },
  render(){
    const title = Object.keys(this.props.productData)
    if(this.props.productData){
      return (<Col md={4} sm={4} xs={12}>
        <Col xs={12}>
        <p>
        <img src={this.props.productData[title].image.replace("{size}","200x80")}/>
        </p>
        </Col>
        <Col xs={12}>
        <Link to={"/item/"+this.props.productData[title].SKU}>
        <h4>{title}</h4>
        </Link>
        <p>
        {this.props.productData[title].description}
        </p>
        <p>
        {this.props.productData[title].price}
        {" "}
        ({this.props.productData[title].savings})
        </p>
        <p>
        <Button bsSize="large" onClick={CartActions.AddToCart.bind(null, this.props.productData)}>Add to cart</Button>
        </p>
        </Col>
        </Col>)
    }else{
      return null
    }
  }
})

module.exports = RibbonOffering