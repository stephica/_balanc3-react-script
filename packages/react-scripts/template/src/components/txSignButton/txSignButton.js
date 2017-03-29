import React from 'react';
import styled from 'styled-components';

const Button = styled('button')`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.gray100};
  outline: none;
  border: none;
`;

const onclick = () => {
  var msg = '0x879a053d4800c6354e76c7985a865d2922c82fb5b3f4577b2fe08b998954f2e0';
  var from = web3.eth.accounts[0];
  web3.eth.sign(from, msg, function(err, result) {
    if (err) return console.error(err);
    console.log('SIGNED:' + result);
  });
};

const TxSignButton = () => {
  return <Button onClick={onclick}>sign example transation</Button>;
};

export default TxSignButton;
