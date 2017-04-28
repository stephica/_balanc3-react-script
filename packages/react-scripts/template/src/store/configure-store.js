import people from '../components/peopleContainer/reducers'
import ethereum from '../components/ethereumRedux/reducers'
import { createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
  people,
  ethereum
})

export default initialState => {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}
