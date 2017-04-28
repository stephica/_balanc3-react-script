import { connect } from 'react-redux'
import FirstContract from './firstContract'
import { getEth, getAccounts } from '../reducers'
import { createSimpleStore } from './actions'
import { dispatch } from '../../../utils'

// CREATED BY TRUFFLE ON DEPLOY OF SIMPLESTORE IN src/truffle/contracts -- this will change each time run
const SimpleStoreAddr = '0x3a5da040ac5a785cb11e1c07fc59a84aab6edc68'
const SimpleStoreBytecode =
  '606060405234610000575b6090806100176000396000f360606040526000357c01000000000000000000000000000000000000000000000000000000009004806360fe47b11460405780636d4ce63c14605a575b6000565b3460005760586004808035906020019091905050607a565b005b3460005760646085565b6040518082815260200191505060405180910390f35b806000819055505b50565b600060005490505b9056'

const mapStateToProps = (state, props) => {
  const eth = getEth(state)
  let simpleStore

  if (eth) {
    // var call = '0x6060604000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002'
    // var res = eth.call({ to: SimpleStoreAddr, data: call });
    // console.log('res',res)
    // res.then((response)=>{
    //   console.log('response',response)
    //   debugger
    // })
    var SimpleStoreABI = [
      {
        constant: false,
        inputs: [{ name: '_value', type: 'uint256' }],
        name: 'set',
        outputs: [],
        payable: false,
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'get',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        type: 'function',
      },
    ]
    var SimpleStore = eth.contract(SimpleStoreABI, SimpleStoreBytecode, {
      from: getAccounts(state)[0],
      gas: 300000,
    })
    var simpleStoreInstance
    dispatch(createSimpleStore())
    // SimpleStore.new({}).then(function(txHash) {
    //   console.log('txHash', txHash);
    //   var checkTransaction = setInterval(
    //     function() {
    //       eth.getTransactionReceipt(txHash).then(function(receipt) {
    //         console.log('receipt', receipt);
    //         if (receipt) {
    //           clearInterval(checkTransaction);
    //           simpleStoreInstance = SimpleStore.at(receipt.contractAddress);
    //         }
    //       });
    //     },
    //     1000
    //   );
    // });
  }
  // TODO: calculate how many rows we actually need -- or create a re-sizing textarea component
  return {
    eth: eth,
    accounts: getAccounts(state),
    simpleStore: simpleStore,
    simpleStoreBytecode: SimpleStoreBytecode,
    abi: JSON.stringify(SimpleStoreABI, null, 4),
    textareaRows: 28,
  }
}

export default connect(mapStateToProps)(FirstContract)
