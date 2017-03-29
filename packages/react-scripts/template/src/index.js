import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import { ThemeProvider } from 'styled-components';
import theme from './components/base/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#fff',
    primary2Color: '#fff',
    primary3Color: '#fff',
    accent1Color: '#fff',
    accent2Color: '#fff',
    accent3Color: '#fff',
    textColor: '#fff',
    alternateTextColor: '#fff',
    canvasColor: '#fff',
    borderColor: '#fff',
    pickerHeaderColor: '#fff',
    shadowColor: '#fff',
  },
});
const store = configureStore();
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    {/* for styled components */}
    <ThemeProvider theme={theme}>
      {/* for material design */}
      <MuiThemeProvider>
        <Router>
          <App />
        </Router>
      </MuiThemeProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
