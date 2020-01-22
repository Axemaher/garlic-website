import React from "react"
import Layout from '../Layout/layout'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from "gatsby"
import QualityTiles from '../components/QualityTiles/QualityTiles'
import ShortOffer from '../components/ShortOffer/ShortOffer'
import Button from '../components/Button/Button'

const StyledSectionWithBackground = styled(BackgroundImage)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-height: 1000px;
  &::before, &::after{
    filter: brightness(
      ${({ darken }) => darken ? '60%' : '0%'}
    )
  }
  text-align: center;
  color: ${({ theme }) => theme.colors.fontBright};
`;

const StyledH1 = styled.h1`
  font-size: 5em;
`;

const StyledHomeInfoGroup = styled.ul`
  list-style: none;
  margin: 0;
  padding: 20px 0;
`;

const StyledHomeInfoElement = styled.li`
  font-size: 2em;
`;

const StyledLinkGroup = styled.span`
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSeparator = styled.span`
  margin: 0 20px;
`;

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      homeBG: file(relativePath: { eq: "homeBG.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxHeight: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const homeBG = data.homeBG.childImageSharp.fluid
  return (
    <Layout>
      <StyledSectionWithBackground fluid={homeBG} darken="true">
        <StyledH1>CZOSNEK NAJWYŻSZEJ JAKOŚCI</StyledH1>
        <StyledHomeInfoGroup>
          <StyledHomeInfoElement>dowóz do klienta</StyledHomeInfoElement>
          <StyledHomeInfoElement>zawsze świeży</StyledHomeInfoElement>
          <StyledHomeInfoElement>wysokie stany magazynowe</StyledHomeInfoElement>
        </StyledHomeInfoGroup>
        <StyledLinkGroup>
          <Button primary="true" to={'/offer'}>sparwdź naszą ofertę</Button>
          <StyledSeparator>lub</StyledSeparator>
          <Button to={'/contact'}>skontaktuj się</Button>
        </StyledLinkGroup>
      </StyledSectionWithBackground>
      <QualityTiles />
      <ShortOffer />
    </Layout>
  )
}

export default IndexPage


// <div class="offer-section">
// <h2>Offer</h2>
// <div class="section-icon"></div>
// <div class="offer">
//    <div class="offer-element">
//      <div class="side">
//        <div class="offer-desc-wrapper">
//          <span class="offer-title">Czosnek niedźwiedzi</span>
//        <span class="offer-description">Najlepszy do potraw</span>
//        <a class="offer-link" href="#">zobacz więcej</a>
//        </div>
//      </div>
//      <div class="side">
//        <img class="offer-image" src="https://www.freepngimg.com/thumb/garlic/1-2-garlic-png-thumb.png" alt="">
//      </div>
//    </div>
//    <div class="offer-element">
//      <div class="side">
//        <div class="offer-desc-wrapper">
//          <span class="offer-title">Czosnek niedźwiedzi</span>
//        <span class="offer-description">Najlepszy do potraw</span>
//        <a class="offer-link" href="#">zobacz więcej</a>
//        </div>
//      </div>
//      <div class="side">
//        <img class="offer-image" src="https://www.freepngimg.com/thumb/garlic/1-2-garlic-png-thumb.png" alt="">
//      </div>
//    </div>
// </div>
// </div>