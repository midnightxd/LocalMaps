import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import NewPage from './pages/New';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const theme = {
    font_primary: '#4989D2',
    font_secondary: '#4CB9B5',
    background_light: '#F0F0F5',
    background_dark: '#1C1D20',
    background_new: '#171B23',
    fields_background: '#1A1B24',
    bg_teal: 'teal',
    text: '#6C6C80',
    white: '#fff',
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/new">
            <NewPage />
          </Route>
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
