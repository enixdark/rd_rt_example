import Reflux from 'reflux'

const CartActions = {
  AddToCart: Reflux.createAction("AddToCart"),
  RemoveFromCart: Reflux.createAction("RemoveFromCart"),
  ClearCart: Reflux.createAction("ClearCart")
}

module.exports = CartActions