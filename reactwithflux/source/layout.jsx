import React from 'react'
import Reflux from 'reflux'
import Menu from './components/menu.jsx'
import Footer from './components/footer.jsx'
import Actions from "./actions/products"
import ProductStore from "./stores/products"
import CartStore from "./stores/cart"
import CustomerStore from "./stores/customer"

const Layout = React.createClass({
  getDefaultState(){
    return {
      products: []
    }
  },
  mixins: [
    Reflux.listenTo(ProductStore, 'onFetchProducts'),
    Reflux.listenTo(CartStore, 'onCartUpdated'),
    Reflux.listenTo(CustomerStore, 'onCustomerUpdated')
  ],
  componentDidMount(){
    Actions.FetchProducts()
  },
  onFetchProducts(data){
    this.setState({products: data.products})
  },
  onCartUpdated(data){
    this.setState({cart: data.cart})
  },
  render(){
    return (
      <div>
        <Menu {...this.state} />
        {
          React.cloneElement(this.props.children, this.state)
        }
        <Footer />
      </div>
    )
  }
  
})



module.exports = Layout