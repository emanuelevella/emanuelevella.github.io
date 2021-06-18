import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './features/navbar/Navbar'
import styled, { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from './helpers/themes'

const GlobalStyle = createGlobalStyle`
  body, html  {
    background-color: rgb(255, 255, 255);;
    overflow: hidden;
    height:100vh;
    width: 100vw;
    margin: 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Wrapper>
        <GlobalStyle/>
        <Navbar/>
        <Router>
          <Switch>
              <Route exact path="/">
                <span>Home</span>
              </Route>
              <Route path="/buy">
                BUY
              </Route>
          </Switch>
        </Router>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
