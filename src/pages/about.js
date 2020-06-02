import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout/layout'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import QualityTiles from '../components/QualityTiles/QualityTiles'
import PageTitle from '../components/PageTitle/PageTitle'
import { colors } from '../utils/colors'


const StyledSectionAbout = styled.section`
  padding: 50px 0 100px 0;
  background-color: ${({ theme }) => theme.colors.sectionBackground1};
  text-align: center;
`;

const StyledAboutWrapper = styled.article`
  display: block;
  padding: 0 10px;
  @media ${({ theme }) => theme.device.tablet}{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 10px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const StyledImage = styled(Img)`
  padding: 10px;
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const StyledDescriptionWrapper = styled.div`
  padding: 0;
  text-align: left;
  font-size: 1.3em;
  @media ${({ theme }) => theme.device.tablet}{
    padding-left: 10px;
  }
`;

const StyledDescription = styled.p`
  padding: 10px 0;
`;

const AboutPage = () => {

  const data = useStaticQuery(graphql`
    query aboutImage {
      aboutImage: file(relativePath: { eq: "shortOffer1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const aboutImage = data.aboutImage.childImageSharp.fluid

  return (
    <Layout>
      <PageTitle>O NAS</PageTitle>
      <StyledSectionAbout>
        <StyledAboutWrapper>
          <StyledImage fluid={aboutImage} />
          <StyledDescriptionWrapper>
            <StyledDescription>
              Oferujemy naszym klientom wysoką jakość czosnku, rozsądną i konkurencyjną cenę, terminową i ciągłą dostawę.
              Profesjonalnie podchodzimy do każdego klienta,  cechuje nas szczerość, jasne relacje oraz elastycznie dostosowujemy się do okoliczności i zmian na rynku
            </StyledDescription>
            <StyledDescription>
              Prowadzimy sprzedaż detaliczną i hurtową z możliwością dowozu towaru do klienta naszymi samochodami.
              Dzięki pozyskanemu doświadczeniu w branży dokładnie wiemy czego oczekuje klient.
            </StyledDescription>
            <StyledDescription>
              Przez cały czas jesteśmy mocno zaangażowani w przygotowanie towaru najwyższej jakości.
            </StyledDescription>
          </StyledDescriptionWrapper>
        </StyledAboutWrapper>
      </StyledSectionAbout>
      <QualityTiles />
    </Layout>
  );
}

export default AboutPage;