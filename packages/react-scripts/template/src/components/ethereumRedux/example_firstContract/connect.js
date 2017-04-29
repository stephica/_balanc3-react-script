import { connect } from 'react-redux'
import SimpleStore from './simpleStore'
import { createSimpleStore } from './actions'
import { getSimpleStoreHash } from './reducers'
import { getEth, getAccounts } from '../reducers'
import { dispatch } from '../../../utils'
import { SimpleStoreAddr, SimpleStoreBytecode, SimpleStoreABI } from './logic'

const mapStateToProps = (state, props) => {
  const simpleStoreHash = getSimpleStoreHash(state)
  const eth = getEth(state)
  console.log('simpleStore re-rendered')
  if (!simpleStoreHash) {
    debugger
    dispatch(createSimpleStore())
  } else if (eth) {
    console.log('simpleStoreHash', simpleStoreHash)
    var checkTransaction = setInterval(function() {
      eth.getTransactionReceipt(txHash).then(function(receipt) {
        console.log('receipt', receipt)
        if (receipt) {
          clearInterval(checkTransaction)
          simpleStoreInstance = SimpleStore.at(receipt.contractAddress)
        }
      })
    }, 1000)
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
