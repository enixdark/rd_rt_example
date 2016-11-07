import React from 'react'
import Layout from './layout.jsx'
import { Router, Route, browserHistory } from 'react-router'

import Products from "./pages/products.jsx"
import Home from "./pages/home.jsx"
import Company from "./pages/company.jsx"
import Item from "./pages/item.jsx"
import Checkout from "./pages/checkout.jsx"
import Receipt from "./pages/receipt.jsx"


const Routes = (
  <Router history={browserHistory}>
  <Route handler={Layout} component={Layout}>
    <Route name="home" path="/" component={Home} handler={Home}/>
    <Route name="company" path="/company" component={Company} handler={Company}/>
    <Route name="products" path="/products" component={Products} handler={Products}/>
    <Route name="item" path="/item:id" component={Item} handler={Item}/>
    <Route name="checkout" path="/checkout" component={Checkout} handler={Checkout}/>
    <Route name="receipt" path="/receipt" component={Receipt} handler={Receipt}/>
  </Route>
  </Router>
)

// const Routes = (
//   <Router history={browserHistory}>
//     <Route path="/" handler={Company} component={Company}>
//     </Route>
//   </Router>
// )


module.exports = Routes



