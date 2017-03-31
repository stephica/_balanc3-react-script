import { connect } from 'react-redux';
import FirstContract from './firstContract';
import { getEth, getAccounts } from '../reducers';

const SimpleStoreBytecode = '606060405234610000575b6090806100176000396000f360606040526000357c01000000000000000000000000000000000000000000000000000000009004806360fe47b11460405780636d4ce63c14605a575b6000565b3460005760586004808035906020019091905050607a565b005b3460005760646085565b6040518082815260200191505060405180910390f35b806000819055505b50565b600060005490505b9056';
const SimpleStoreABI = [
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
];

const mapStateToProps = (state, props) => {
  const eth = getEth(state);
  let simpleStore;
  if (eth) {
    simpleStore = eth.contract(SimpleStoreABI, SimpleStoreBytecode, {
      from: getAccounts(state)[0],
      gas: 300000,
    });
  }
  return {
    eth: eth,
    accounts: getAccounts(state),
    simpleStore: simpleStore,
  };
};

export default connect(mapStateToProps)(FirstContract);
