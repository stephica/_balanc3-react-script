import React from 'react';
import { compose } from 'recompose';

const Ethereum = compose()(({ accounts, eth, children }) =>
  children({ accounts, eth }));

export default Ethereum;
