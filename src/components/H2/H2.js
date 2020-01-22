import React from 'react'
import styled from 'styled-components'

const StyledH2 = styled.h2`
  font-size: 4em;
  padding-bottom: 40px;
`;

const H2 = ({ children }) => {
    return (
        <StyledH2>{children}</StyledH2>
    );
}

export default H2;