import React from 'react';
import PeopleContainer from '../peopleContainer';
import Buffer from '../buffer';

export default () => (
  <div className="App">
    <Buffer>
      <div className="App-header">
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        {' '}
        To get started, edit
        {' '}
        <code>src/App.js</code>
        {' '}
        and save to reload.
        {' '}
      </p>
      <PeopleContainer />
    </Buffer>
  </div>
);
