import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from "gatsby"

const StyledPageTitleWrapper = styled.div`
  width: 100%;
  height: 130px;
  margin-bottom: 50px;
  background-color: ${({ colorFilter }) => colorFilter};
  letter-spacing: 5px;
  @media ${({ theme }) => theme.device.tablet}{
    height: 230px;
    margin-bottom: 50px;
  }
`;

const StyledPageTitleWithBackground = styled(BackgroundImage)`
  width: 100%;
  height: 130px;
  color: ${({ primaryColor, theme }) => primaryColor && theme.colors.fontPrimary};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  /* &::before, &::after{
    filter: opacity(
      ${({ darken }) => darken ? '60%' : '.2'}
    )
  } */
  @media ${({ theme }) => theme.device.tablet}{
    height: 230px;
    margin-bottom: 50px;
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
    <StyledPageTitleWrapper colorFilter={colorFilter}>
      <StyledPageTitleWithBackground fluid={titleBG}>
        <StyledPageTitle>{children}</StyledPageTitle>
      </StyledPageTitleWithBackground>
    </StyledPageTitleWrapper>
  );
}

export default PageTitle;