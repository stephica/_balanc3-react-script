import { makeActionCreator } from '../../../utils'

export const $simpleStoreCreated = 'SIMPLE_STORE_CREATED'
export const simpleStoreCreated = makeActionCreator(
  $simpleStoreCreated,
  'address'
)

export const $createSimpleStore = 'CREATE_SIMPLE_STORE'
export const createSimpleStore = makeActionCreator($createSimpleStore)
