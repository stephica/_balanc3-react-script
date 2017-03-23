import React, { Component } from 'react';
import baseStyles from './components/base/base-styles';
import { Route } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';

const _home = () => <div>Test content</div>;

class App extends Component {
  render() {
    baseStyles();
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={_home} />
      </div>
    );
  }
}

export default App;
