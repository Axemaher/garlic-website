import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from "gatsby"

const StyledPageTitleWithBackground = styled(BackgroundImage)`
  width: 100%;
  height: 130px;
  color: ${({ primaryColor, theme }) => primaryColor && theme.colors.fontPrimary};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media ${({ theme }) => theme.device.tablet}{
    height: 230px;
  }
`;

const StyledPageTitle = styled.h2`
  font-size: 6em;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.fontBright};
  margin-bottom: 0px;
`;

const PageTitle = ({ children, colorFilter }) => {

  const data = useStaticQuery(graphql`
    query {
      titleBG: file(relativePath: { eq: "pageTitle.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const titleBG = data.titleBG.childImageSharp.fluid


  return (
    <StyledPageTitleWithBackground fluid={titleBG}>
      <StyledPageTitle>{children}</StyledPageTitle>
    </StyledPageTitleWithBackground>
  );
}

export default PageTitle;