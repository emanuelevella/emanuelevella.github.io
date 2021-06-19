import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from './pages/notFound/NotFound'
import Navbar from './features/navbar/Navbar'
import styled, { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from './helpers/themes'
import { useSelector } from 'react-redux';
import { selectIsToggled } from './features/Switch/switchDarkMode/switchDarkModeSlicer';


const GlobalStyle = createGlobalStyle`
  body, html  {
    background-color: ${ props => props.theme.background };
    transition: background-color 200ms linear;
    overflow: hidden;
    height:100vh;
    width: 100vw;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: ${ props => props.theme.text }
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

function App() {
  const isToggled = useSelector(selectIsToggled)

  return (
    <ThemeProvider theme={isToggled ? darkTheme : lightTheme}>
      <Wrapper>
        <GlobalStyle/>
        <Router>
        <Navbar/>
          <Switch>
              <Route exact path="/">
                <span>Home</span>
              </Route>
              <Route path="/buy">
                BUY
              </Route>
              <Route component={NotFound}/>
          </Switch>
        </Router>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
