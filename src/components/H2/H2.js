import React from 'react'
import styled from 'styled-components'

const StyledH2 = styled.h2`
  font-size: 4em;
  padding: 0 10px 40px 10px;
  color: ${({ primaryColor, theme }) => primaryColor && theme.colors.fontPrimary};
`;

const H2 = ({ children, primaryColor }) => {
  return (
    <StyledH2 primaryColor={primaryColor}>{children}</StyledH2>
  );
}

export default H2;