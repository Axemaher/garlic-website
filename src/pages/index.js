import React from "react"
import Layout from '../Layout/layout'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from "gatsby"
import ShortOffer from '../components/ShortOffer/ShortOffer'
import Button from '../components/Button/Button'
import DescriptionTiles from '../components/DescriptionTiles/DescriptionTiles'
import { Helmet } from 'react-helmet'
import { JsonLd } from '../components/JsonLd'


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
      <Helmet>
        <title>czosnek24h - zawsze świeży czosnek</title>
        <description>Sprzedaż czosnku, dowóz do klienta, możliwa wysyłka, zawsze świeży, wysokie stany magazynowe</description>
        <JsonLd>
          {{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "czosnek24h",
            "image": "https://czosnek24h.pl/static/7be0859d54ed7047af07933bae52c23a/b17c1/about.jpg",
            "@id": "",
            "url": "https://czosnek24h.pl",
            "telephone": "517 546 201",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Mostowa",
              "addressLocality": "Latowicz",
              "postalCode": "05-334",
              "addressCountry": "PL"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 52.0204178,
              "longitude": 21.788654
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Tuesday",
                "Monday",
                "Thursday",
                "Wednesday",
                "Friday"
              ],
              "opens": "08:00",
              "closes": "18:00"
            }
          }}
        </JsonLd>
      </Helmet>
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
      <ShortOffer sectionTitle={"SPRAWDŹ NASZE PRODUKTY"} />
      <DescriptionTiles />
    </Layout>
  )
}

export default IndexPage