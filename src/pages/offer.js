import React from "react"
import Layout from '../Layout/layout'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Table from "../components/Table/Table"
import PageTitle from '../components/PageTitle/PageTitle'
import { colors } from '../utils/colors'

const StyledSectionOffer = styled.section`
  padding: 0 0 100px 0;
  background-color: ${({ theme }) => theme.colors.sectionBackground3};
  text-align: center;
`;

const StyledOfferWrapper = styled.div`
  display: block;
  @media ${({ theme }) => theme.device.laptop}{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }
`;

const StyledOfferElement = styled.article`
  margin: 10px auto;
  background-color: white;
  min-height: 300px;
  text-align: left;
  padding: 10px;
  max-width: 600px;
  @media ${({ theme }) => theme.device.laptop}{
    margin: 10px;
  }
`;

const StyledDescription = styled.p`
  font-size: 1.3em;
`;

const StyledName = styled.h3`
  color: ${({ theme }) => theme.colors.fontPrimary};
  padding: 10px 0;
  font-size: 2em;
`;

const StyledImage = styled(Img)`
  grid-area: image;
  width: 100%;
  height: 150px;
`;

const OfferPage = () => {

  const data = useStaticQuery(graphql`
    query offerImages {
      offerImage: file(relativePath: { eq: "shortOffer1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const offerImage = data.offerImage.childImageSharp.fluid

  return (
    <Layout>
      <StyledSectionOffer>
        <PageTitle colorFilter={colors.fontPrimary}>OFERTA</PageTitle>
        <StyledOfferWrapper>
          <StyledOfferElement>
            <StyledImage fluid={offerImage} />
            <StyledName>Biały czosnek tradycyjny</StyledName>
            <StyledDescription>Jest to bardzo popularny rodzaj czosnku w każdym kraju, dzięki rustykalnej, odpornej i soczystej naturze, a także doskonałej ochronie.
            Ma znaczący zapach, przyjemny smak i średnie do dużych rozmiarów od 10 do 12 goździków.</StyledDescription>
          </StyledOfferElement>
          <StyledOfferElement>
            <StyledImage fluid={offerImage} />
            <StyledName>Czosnek fioletowy</StyledName>
            <StyledDescription>Ze względu na wysoką jakość i intensywny smak czosnek Morado jest jedną z najbardziej cenionych odmian na rynku krajowym i międzynarodowym.
            Ma intensywny zapach, pikantny smak i średnią wielkość od 8 do 10 goździków.</StyledDescription>
          </StyledOfferElement>
        </StyledOfferWrapper>
      </StyledSectionOffer>
      <Table />
    </Layout>
  );
}

export default OfferPage;