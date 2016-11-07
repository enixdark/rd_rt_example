import Reflux from 'reflux'
import { searchService } from '../service/index'
let _history = {}

let actions = {
  performSearch: Reflux.createAction('performSearch'),
  emitSearchData: Reflux.createAction('emitSearchData'),
  hideResults: Reflux.createAction('hideResults'),
  showResults: Reflux.createAction('showResults')
}

actions.performSearch.listen( (query) => {
  if(_history[JSON.stringify(query)]){
    
    actions.emitSearchData({query: query, response: _history[JSON.stringify(query)]})
  }
  else{
    searchService.get(query).then( response => {
      _history[JSON.stringify(query)]=response
      actions.emitSearchData({query: query, response: response})
    }).catch( err => {

    })
  }
})
export default actions