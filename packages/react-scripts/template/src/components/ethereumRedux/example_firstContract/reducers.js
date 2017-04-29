import { $simpleStoreCreated, $createSimpleStore } from './actions'

export default (state = {}, action) => {
  switch (action.type) {
    case $simpleStoreCreated:
      return {
        ...state,
        address: action.address,
      }
    default:
      return state
  }
}

export const getSimpleStoreHash = state => state.simpleStore.address || null
