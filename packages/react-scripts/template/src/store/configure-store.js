import people from '../components/peopleContainer/reducers'
import ethereum from '../components/ethereumRedux/reducers'
import simpleStore
  from '../components/ethereumRedux/example_firstContract/reducers'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import simpleStoreLogic
  from '../components/ethereumRedux/example_firstContract/logic'

const logicMiddleware = createLogicMiddleware(simpleStoreLogic)
const middleware = applyMiddleware(logicMiddleware)

const rootReducer = combineReducers({
  people,
  ethereum,
  simpleStore,
})

// TRIAL
const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

const enhancer = composeEnhancers(
  middleware
  // other store enhancers if any
)

export default initialState => {
  // return createStore(
  //   rootReducer,
  //   initialState,
  //   middleware
  // )
  return createStore(rootReducer, initialState, enhancer)
}
