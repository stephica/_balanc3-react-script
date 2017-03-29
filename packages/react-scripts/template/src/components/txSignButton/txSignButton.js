import React from 'react';
import Button from '../button';

const onclick = () => {
  if (window.web3) {
    var msg = '0x879a053d4800c6354e76c7985a865d2922c82fb5b3f4577b2fe08b998954f2e0';
    var from = window.web3.eth.accounts[0];
    window.web3.eth.sign(from, msg, function(err, result) {
      if (err) return console.error(err);
      console.log('SIGNED:' + result);
    });
  } else {
    console.warn('Something went wrong, no instance of Web3 found');
  }
};

const TxSignButton = () => {
  return <Button primary onClick={onclick}>Sign</Button>;
};

export default TxSignButton;
