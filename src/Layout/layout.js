import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme'
import Menu from '../components/Menu'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
  *, *::before, *::after{
    box-sizing: border-box;
  }
`;

const StyledWrapper = styled.div`
  min-height: 100vh;
  font-size:62.5%;
  position: relative;
  display: flex;
  flex-direction:column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.globalBackground};
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledWrapper>
        <Menu />
        {children}
        {children}
        {children}
      </StyledWrapper>
    </>
  </ThemeProvider>
)

export default Layout
