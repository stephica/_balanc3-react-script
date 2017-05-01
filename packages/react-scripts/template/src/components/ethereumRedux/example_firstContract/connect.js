import { connect } from 'react-redux'
import SimpleStore from './simpleStore'
import { createSimpleStore, simpleStoreInfo } from './actions'
import {
  getSimpleStoreHash,
  getSimpleStoreContract,
  getSimpleStoreInstance,
} from './reducers'
import { getEth, getAccounts } from '../reducers'
import { dispatch } from '../../../utils'
import { SimpleStoreAddr, SimpleStoreBytecode, SimpleStoreABI } from './logic'

const mapStateToProps = (state, props) => {
  const simpleStoreHash = getSimpleStoreHash(state)
  let simpleStoreInstance = getSimpleStoreInstance(state)
  const eth = getEth(state)
  if (!simpleStoreHash) {
    dispatch(createSimpleStore())
  } else if (eth && !simpleStoreInstance) {
    eth.getTransactionReceipt(simpleStoreHash).then(function(receipt) {
      if (receipt) {
        const SimpleStoreContract = getSimpleStoreContract(state)
        simpleStoreInstance = SimpleStoreContract.at(receipt.contractAddress)
        dispatch(simpleStoreInfo(simpleStoreInstance, receipt.contractAddress))
      }
    })
  }
  // TODO: calculate how many rows we actually need -- or create a re-sizing textarea component
  return {
    eth: eth,
    accounts: getAccounts(state),
    simpleStoreBytecode: SimpleStoreBytecode,
    abi: JSON.stringify(SimpleStoreABI, null, 4),
    textareaRows: 28,
  }
}

export default connect(mapStateToProps)(SimpleStore)
