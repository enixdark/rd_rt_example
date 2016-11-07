import SearchService from './search'
import { Config } from '../config'

exports.searchService = new SearchService(Config.urls.search)

