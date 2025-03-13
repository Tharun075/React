import { legacy_createStore } from 'redux'
import { todoReducer } from './todoReducer'

const store = legacy_createStore(todoReducer)

export default store