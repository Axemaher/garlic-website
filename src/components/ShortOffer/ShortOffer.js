import React from 'react'
import styled from 'styled-components'
import H2 from '../H2/H2'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Button from '../Button/Button'

const StyledSectionShortOffer = styled.section`
  padding: 100px 0 100px 0;
  background-color: ${({ theme }) => theme.colors.sectionBackground2};
  text-align: center;
`;

const StyledOfferWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  @media ${({ theme }) => theme.device.tablet}{
    display: flex;
    justify-content: space-around;
  }
`;

const StyledOfferElementWithBackground = styled(BackgroundImage)`
  min-height: 200px;
  background-position: center;
  margin: 0 10px 30px 10px;
  &::before, &::after{
    filter: brightness(
      ${({ darken }) => darken ? '60%' : '100%'}
    )
  }
  @media ${({ theme }) => theme.device.tablet}{
    width: 500px;
  }
`

const StyledOfferDescriptionWrapper = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.shortOfferDescriptionBackground};
  display: flex;
  flex-direction: column;
  text-align: left;
`;


const StyledOfferTitle = styled.span`
  font-size: 2em;
  font-weight: bold;
  padding: 10px 0;
`;

const StyledOfferDescription = styled.span`
  font-size: 1.2em;
`;

const ShortOffer = () => {
  const data = useStaticQuery(graphql`
    query images {
      shortOffer1: file(relativePath: { eq: "shortOffer1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shortOffer2: file(relativePath: { eq: "shortOffer2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const shortOffer1Bg = data.shortOffer1.childImageSharp.fluid
  const shortOffer2Bg = data.shortOffer2.childImageSharp.fluid

  return (
    <StyledSectionShortOffer>
      <H2>NAJLEPSZE PRODUKTY</H2>
      <StyledOfferWrapper>

        <StyledOfferElementWithBackground fluid={shortOffer1Bg} >
          <StyledOfferDescriptionWrapper>
            <StyledOfferTitle>Czosnek niedźwiedzi</StyledOfferTitle>
            <StyledOfferDescription>Najlepszy do potraw</StyledOfferDescription>
            <Button primary="true" big="true" to={'/offer'}>zobacz więcej</Button>
          </StyledOfferDescriptionWrapper>
        </StyledOfferElementWithBackground>

        <StyledOfferElementWithBackground fluid={shortOffer2Bg} >
          <StyledOfferDescriptionWrapper>
            <StyledOfferTitle>Czosnek niedźwiedzi</StyledOfferTitle>
            <StyledOfferDescription>Najlepszy do potraw</StyledOfferDescription>
            <Button primary="true" big="true" to={'/offer'}>Zobacz więcej</Button>
          </StyledOfferDescriptionWrapper>
        </StyledOfferElementWithBackground>

      </StyledOfferWrapper>
    </StyledSectionShortOffer>
  );
}

export default ShortOffer;
