import React from 'react';
import Buffer from '../buffer';
import StyledLink from '../styled_link';
import Button from '../button';
import { Ethereum } from '../ethereumRedux';
import TxSignButton from '../txSignButton';
import styled from 'styled-components';

const Box = styled('div')`
  padding: 20px;
  max-width: 600px;
  border: 3px solid;
  border-radius: 5px;
  word-wrap: break-word;
`;

const GoodBox = styled(Box)` border-color: ${props => props.theme.primary} `;
const BadBox = styled(Box)` border-color: ${props => props.theme.danger} `;

export default () => (
  <Buffer>
    <h2>React Ethereum Starter</h2>

    <Ethereum>
      {({ accounts = [], eth }) => {
        const account = accounts.length ? accounts[0] : null;
        return (
          <div>
            {account &&
              <GoodBox>
                Awesome! Ethereum is detected on your browser with accounts:
                {' '}
                {account}
                <p>
                  Go ahead and press the button to sign an example transaction.
                </p>
                <div style={{ display: 'block' }}>
                  <TxSignButton />
                </div>
              </GoodBox>}
            {!account &&
              <BadBox>
                Web3 instance of Ethereum not detected, consider downloading
                {' '}
                <StyledLink to="https://metamask.io/">Ethereum</StyledLink>
                {' '}
                and using the
                {' '}
                <StyledLink
                  to="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                >
                  {' '}chrome extension{' '}
                </StyledLink>
                {' '}
                in order to get the most out of this starter kit.
                <div style={{ display: 'block', marginTop: 20 }}>
                  <Button
                    href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                    primary
                  >
                    Download
                  </Button>
                </div>
              </BadBox>}
          </div>
        );
      }}
    </Ethereum>
    <p>
      The box above box is an example of a "styled component" that detects an Ethereum account, most likely from Meta Mask. Next is a React Router link that will take you to a
      {' '}
      <StyledLink to="/redux">redux example</StyledLink>
      {' '}
      .
    </p>
    <p>
      This repo is meant to be slightly opinionated,
      containing commonly used react tools such as:
    </p>
    <ul>
      <li>
        <StyledLink to="https://github.com/ethjs/ethjs">ethjs</StyledLink>
      </li>
      <li><StyledLink to="http://redux.js.org/">redux</StyledLink></li>
      <li>
        <StyledLink to="https://github.com/acdlite/recompose">
          recompose
        </StyledLink>
      </li>
      <li>
        <StyledLink to="http://www.material-ui.com/">material-ui</StyledLink>
      </li>
      <li>
        <StyledLink to="https://github.com/reacttraining/react-router">
          react router
        </StyledLink>
      </li>
      <li>
        <StyledLink to="https://styled-components.com/">
          styled-components
        </StyledLink>
      </li>
    </ul>
    <p>
      Oh yeah, one more thing.  This repo is a personal project that I make no promises about maintaining.  If you've somehow stumbled upon this and want to reach me, email me at
      {' '}
      <StyledLink to="mailto:johndangerstorey@gmail.com">
        johndangerstorey@gmail.com
      </StyledLink>
    </p>
  </Buffer>
);
