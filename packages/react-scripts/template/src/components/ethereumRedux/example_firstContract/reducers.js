import { $simpleStoreCreated, $createSimpleStore } from './actions'

export default (state = {}, action) => {
  switch (action.type) {
    case $simpleStoreCreated:
      return {
        ...state,
        address: action.accounts,
      }
    default:
      return state
  }
}

export const getAddress = state => state.simpleStore.address
