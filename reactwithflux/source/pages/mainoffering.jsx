import React from 'react'
import { Col, Button } from 'react-bootstrap'
import { Link } from 'react-router'
import CartActions from "../actions/cart";
const MainOffering = React.createClass({
  propTypes: {
    productData: React.PropTypes.object
  },
  render(){
    const title = Object.keys(this.props.productData)

    if(this.props.productData[title]){
      return (<Col xs={12}>
        <Col md={3} sm={4} xs={12}>
         <p>
          <img src={this.props.productData[title].image.replace("{size}", "200x150")} />
         </p>
        </Col>
        <Col md={9} sm={8} xs={12}>
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
        </Col>
      )
    }
    else{
      return null

    }
  }
})

module.exports = MainOffering