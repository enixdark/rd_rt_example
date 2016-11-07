import Reflux from 'reflux'
import CartAction from '../actions/cart'

let _cart = {cart: []}

const CartStore = Reflux.createStore({
  init(){
    this.listenTo(CartAction.AddToCart, this.onAddToCart)
    this.listenTo(CartAction.RemoveFromCart, this.onRemoveFromCart)
    this.listenTo(CartAction.ClearCart, this.onClearCart)
  },
  onAddToCart(item){
    _cart.cart.push(item)
    this.emit()
  },
  inRemove(item){
    _cart.cart.filter( c => c !== item)
    this.emit
  },
  onClearCart(){
    _cart.cart = []
    this.emit()
  },
  emit(){
    this.trigger(_cart)
  }

})

module.exports = CartStore