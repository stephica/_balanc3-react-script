import { compose, lifecycle, withState } from 'recompose';

const Ethereum = compose(
  withState('accounts', 'setAccounts', []),
  lifecycle({
    componentDidMount() {
      if (window.web3) {
        window.setTimeout(
          () => {
            this.props.setAccounts(window.web3.eth.accounts);
          },
          1000
        );
      }
    },
  })
)(({ accounts, children }) => children(accounts));

export default Ethereum;
