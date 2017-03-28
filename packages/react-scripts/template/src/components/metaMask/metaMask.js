import { findDOMNode } from 'react-dom';
import { compose, lifecycle, withState, withProps } from 'recompose';

const Ethereum = compose(
  withState('accounts', 'setAccounts', []),
  lifecycle({
    componentDidMount() {
      if (web3) {
        window.setTimeout(
          () => {
            this.props.setAccounts(web3.eth.accounts);
          },
          100
        );
      }
    },
  })
)(({ accounts, children }) => children(accounts));

export default Ethereum;
