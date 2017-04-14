import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import { ThemeProvider } from 'styled-components';
import theme from './components/base/theme';
import { InitializeEthereum } from './components/ethereumRedux';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const store = configureStore();
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    {/* for styled components */}
    <ThemeProvider theme={theme}>
      {/* for material design */}
      <MuiThemeProvider>
        {/* adds ethereum info */}
        <InitializeEthereum store={store} useLocalFile>
          <Router>
            <App />
          </Router>
        </InitializeEthereum>
      </MuiThemeProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
