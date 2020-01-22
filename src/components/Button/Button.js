import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledButton = styled(Link)`
  background-color: ${({ primary }) => primary ?
        ({ theme }) => theme.colors.buttonBackgroundPrimary :
        ({ theme }) => theme.colors.buttonBackgroundSecondary};
  color: ${({ theme }) => theme.colors.fontBright};
  width: fit-content;
  padding: 5px 15px;
  border-radius: 15px;
  text-decoration: none;
  margin: 5px 0;
  font-size: ${({ big }) => big ? '1.5em' : '1.2em'};
  transition: all .3s;
  &:hover{
      background-color: ${({ theme }) => theme.colors.buttonBackgroundOnHover};
  }
`;

const Button = ({ children, primary, big, to }) => {
    return (
        <StyledButton primary={primary} big={big} to={to}>{children}</StyledButton>
    );
}

export default Button;