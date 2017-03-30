import { connect } from 'react-redux';
import { getEth, getAccounts } from '../reducers';

const mapStateToProps = (state, props) => {
  // create an equiviland to formValueSelector from redux-form
  return {
    eth: getEth(state),
    accounts: getAccounts(state),
  };
};

export default connect(mapStateToProps)(({ accounts, eth, children }) =>
  children({ accounts, eth }));
