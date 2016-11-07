import Reflux from 'reflux'
import SearchActions from '../actions/search'
import { searchService } from '../service/index'

let _history = {}

const SearchStore = Reflux.createStore({
  init(){
    this.listenTo(SearchActions.emitSearchData, this.emitSearchResults),
    this.listenTo(SearchActions.performSearch, this.performSearch)
  },
  emitSearchResults(results){
    if(!_history[JSON.stringify(results.query)])
      _history[JSON.stringify(results.query)] = results.response
    this.trigger(_history[JSON.stringify(results.query)])
  },

  performSearch(){
    console.log(findDOMNode(this.refs.searchInput).value);
  }
})

// class SearchStore extends Reflux.Store{
//   constructor(){
//     this.listenables = SearchActions
//     this.state = {}  // <-- the store's default state
//   }
// }

export default SearchStore

