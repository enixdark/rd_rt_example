import React from 'react'
import { Proptypes } from 'react'
import { Grid } from 'react-bootstrap'
import Offerings from './offerings.jsx'



const Products = React.createClass({
  propTypes:{
    products: React.PropTypes.object
  },
  getDefaultProps(){
    return {
      products:{
        main_offering: [],
        sale_offerings: []
      }
    }
  },
  render(){
    return (
      <Grid>
        <Offerings productData={this.props.products.main_offering} type={"main"} maxProducts={1}/>
        <Offerings productData={this.props.products.sale_offerings} type={"ribbon"} maxProducts={3}/>
      </Grid>
      )
  }
})

module.exports = Products