import Reflux from 'reflux'
import Request from 'superagent'
import Actions from '../actions/customer'

const CustomerStore = Reflux.createStore({

  init(){
    this.listenTo(Actions.FetchCustomer, this.onFetchCustomer)
  },

  onFetchCustomer(){
    Request.get('http://localhost:3000/products.json')
           .end((err, res) => {
             this.trigger(JSON.parse(res.text))
           })
  }
})


module.exports = CustomerStore