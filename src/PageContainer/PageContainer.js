import React from 'react'
import styled from 'styled-components'

const StyledPage = styled.div`
  min-height: 100vh;
  width: 100%;
  display: block;
  position: relative;
  margin: 80px auto 0 auto;
  @media ${({ theme }) => theme.device.laptopL}{
    /* max-width: 1440px; */
    padding: 0 40px;
  }
  @media ${({ theme }) => theme.device.tablet}{
        padding: 0 20px;
  }
`;

const PageContainer = ({ children }) => {
    return (
        <StyledPage>
            {children}
        </StyledPage>
    );
}

export default PageContainer;