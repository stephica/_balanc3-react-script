import { connect } from 'react-redux';
import InitializeEthereum from './initializeEthereum';
import { getEth, getAccounts } from '../reducers';

const mapStateToProps = (state, props) => ({
  eth: getEth(state),
  accounts: getAccounts(state),
});

const mapActionsToProps = {
  // actions
};

export default connect(mapStateToProps, mapActionsToProps)(InitializeEthereum);
