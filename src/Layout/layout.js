import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme'
import Menu from '../components/Menu/Menu'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'francois one', sans-serif;
  }
  *, *::before, *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const StyledWrapper = styled.div`
  font-size:62.5%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.globalBackground};
  @media ${({ theme }) => theme.device.tablet}{
        /* margin-top: 80px; */
  }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledWrapper>
        <Menu />
        {children}
      </StyledWrapper>
    </>
  </ThemeProvider>
)

export default Layout
