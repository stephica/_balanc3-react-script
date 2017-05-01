pragma solidity ^0.4.4;

contract SimpleStore {
  function set(uint _value) {
    value = _value;
  }

  function get() constant returns (uint) {
    return value;
  }

  uint value;
}