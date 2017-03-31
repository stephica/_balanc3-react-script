import { PropTypes } from 'react';
import { compose, lifecycle, setPropTypes } from 'recompose';
import { web3Found } from '../actions';
import Eth from 'ethjs';

export default compose(
  setPropTypes({
    store: PropTypes.object.isRequired,
  }),
  lifecycle({
    componentDidMount() {
      let {
        store,
        accounts,
        eth,
        occurance = 0,
      } = this.props;
      /*
      // Check periodically for new identity, stop after 100
      */
      const checkForWeb3 = function() {
        if (occurance < 100) {
          occurance++;
          if (typeof window.web3 !== 'undefined') {
            if (
              !eth ||
              accounts.toString() !== window.web3.eth.accounts.toString()
            ) {
              // eth doesn't exist || new accounts
              console.log('Ethereum Redux - updating from Mist or Meta Mask');
              accounts = window.web3.eth.accounts;
              eth = new Eth(window.web3.currentProvider);
              store.dispatch(web3Found(accounts, true, eth));
            }
          } else if (!eth) {
            console.log('Fall back to Infura');
            eth = new Eth(new Eth.HttpProvider('https://mainnet.infura.io'));
            store.dispatch(web3Found(accounts, false, eth));
          }
          window.setTimeout(checkForWeb3, 10 * 300); // checks every 5 seconds
        }
      };
      checkForWeb3();
    },
  })
)(({ children }) => children);
