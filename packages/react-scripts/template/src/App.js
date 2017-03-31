import React, { Component } from 'react';
import baseStyles from './components/base/base-styles';
import ReduxExample from './components/page_reduxExample';
import Examples from './components/page_examples';
import { Route } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';

class App extends Component {
  render() {
    baseStyles();
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/redux" component={ReduxExample} />
        <Route exact path="/examples" component={Examples} />
      </div>
    );
  }
}

export default App;
