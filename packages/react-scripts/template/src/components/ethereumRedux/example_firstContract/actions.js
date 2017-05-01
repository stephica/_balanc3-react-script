import { makeActionCreator } from '../../../utils'

export const $simpleStoreCreated = 'SIMPLE_STORE_CREATED'
export const simpleStoreCreated = makeActionCreator(
  $simpleStoreCreated,
  'hash',
  'contract'
)

export const $simpleStoreInfo = 'SIMPLE_STORE_INFO'
export const simpleStoreInfo = makeActionCreator(
  $simpleStoreInfo,
  'instance',
  'address'
)

export const $createSimpleStore = 'CREATE_SIMPLE_STORE'
export const createSimpleStore = makeActionCreator($createSimpleStore)
