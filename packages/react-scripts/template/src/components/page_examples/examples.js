import React from 'react';
import Buffer from '../buffer';
import StyledLink from '../styled_link';
import FirstContract from '../ethereumRedux/example_firstContract';

export default () => (
  <div>
    <Buffer>
      <h2>Ethereum Examples</h2>
      <p>
        Here are examples of using Ethereum.  Based entirely on
        {' '}
        <StyledLink to="https://github.com/SilentCicero">
          Nick Dodson
        </StyledLink>
        's
        <StyledLink to="http://ethjs-examples.surge.sh/">
          {' '}Ethjs Examples{' '}
        </StyledLink>
      </p>
      <FirstContract />
    </Buffer>
  </div>
);
