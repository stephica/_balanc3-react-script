// import { createLogic } from 'redux-logic'

export function registerSimpleStore() {
  console.log('store', store)
  store.dispatch(createSimpleStore())
  console.log('test')
}
