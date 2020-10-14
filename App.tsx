import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import './App.css';
import Routes from './routes';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

const App: React.FC = () => (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
);

export default App;
