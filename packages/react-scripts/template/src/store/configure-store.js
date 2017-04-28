import people from '../components/peopleContainer/reducers'
import ethereum from '../components/ethereumRedux/reducers'
import { createStore, combineReducers } from 'redux'

export let store

const rootReducer = combineReducers({
  people,
  ethereum,
})

export default initialState => {
  store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}
