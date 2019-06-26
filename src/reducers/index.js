import { combineReducers } from 'redux'

import counter from './counter'
import characters from './characters'
import themes from './themes'
// defini les clé present dans la state de redux
export default combineReducers({
  counter,
  characters,
  themes
})
