import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/fontawesome-free-solid';

import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/Themes';
import Home from './pages/home';
import Button from './components/Button';

const App = () => {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    // eslint-disable-next-line no-unused-expressions
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <ThemeButton handleClick={themeToggler} text={<FontAwesomeIcon icon={faLightbulb} />} />
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;

const ThemeButton = styled(Button)`
  border: 2px solid black;
  background: ${({ theme }) => theme.bulbBg};
  color: ${({ theme }) => theme.bulb};
  border-color: ${({ theme }) => theme.secondary};
  position: fixed;
  right: 80px;
  bottom: 80px;
  padding: 10px;
  border-radius: 100px;
  z-index: 11;
  width: 60px;
  height: 60px;
`;
