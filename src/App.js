import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Order from './pages/order/Order'
import NotFound from './pages/notFound/NotFound'
import Navbar from './features/navbar/Navbar'
import styled, { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from './helpers/themes'
import { useSelector } from 'react-redux';
import { selectIsToggled } from './features/toggle/switchDarkMode/switchDarkModeSlice';


const GlobalStyle = createGlobalStyle`
  body, html  {
    background-color: ${ props => props.theme.background };
    transition: background-color 200ms linear;
    height:100vh;
    width: 100vw;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: ${ props => props.theme.text }
  }


  .responsive-table {
    li {
      border-radius: 3px;
      padding: 25px 30px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;
    }
    .table-header {
      background-color: #95a5a6;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }
    .table-row {
      background-color: #ffffff;
      box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
    }
    .col-1 {
      flex-basis: 10%;
    }
    .col-2 {
      flex-basis: 40%;
    }
    .col-3 {
      flex-basis: 25%;
    }
    .col-4 {
      flex-basis: 25%;
    }

    @media all and (max-width: 767px) {
      .table-header {
        display: none;
      }
      .table-row {
      }
      li {
        display: block;
      }
      .col {
        flex-basis: 100%;
      }
      .col {
        display: flex;
        padding: 10px 0;
        &:before {
          color: #6c7a89;
          padding-right: 10px;
          content: attr(data-label);
          flex-basis: 50%;
          text-align: right;
        }
      }
    }
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
                <Home/>
              </Route>
              <Route path="/buy">
                <Order/>
              </Route>
              <Route component={NotFound}/>
          </Switch>
        </Router>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
