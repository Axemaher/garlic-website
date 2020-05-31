import React from 'react'
import styled from 'styled-components'
import HomeDelivery from '../../images/icons/homeDelivery.svg'
import FastDelivery from '../../images/icons/fastDelivery.svg'
import Warehouse from '../../images/icons/warehouse.svg'
import Quality from '../../images/icons/quality.svg'
import Experience from '../../images/icons/experience.svg'
import H2 from '../H2/H2'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from "gatsby"


const StyledSectionQualityTiles = styled(BackgroundImage)`
  padding: 100px 0 100px 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.fontBright};
`;

const StyledTilesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  @media ${({ theme }) => theme.device.laptop}{
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  }
`;

const StyledTileImage = styled.img`
  margin: 10px auto;
  height: 70px;
  padding: 14px;
  height: 70px;
  transition: all .2s;
`;

const StyledTile = styled.div`
  width: 200px;
  height: 200px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  &:hover ${StyledTileImage}{
    transform: scale(1.5);
  }
`;

const StyledTileTitle = styled.span`
  font-weight: bold;
  font-size: 2em;
  padding: 0 10px 10px 10px;
`;

const StyledTileDescription = styled.span`
  font-size: 1.3em;
`;

const QualityTiles = () => {

  const data = useStaticQuery(graphql`
  query {
    sectionBG: file(relativePath: { eq: "sectionBG2.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`)

  const sectionBG = data.sectionBG.childImageSharp.fluid

  return (
    <StyledSectionQualityTiles fluid={sectionBG} lowOpacity>
      <H2>KUPUJĄC U NAS MASZ GWARANCJĘ</H2>
      <StyledTilesWrapper>
        <StyledTile>
          <StyledTileImage src={Quality} />
          <StyledTileTitle>wysoka jakość</StyledTileTitle>
          <StyledTileDescription>oferujemy towar najwyższej jakości posiadający wszelkie unijne normy
</StyledTileDescription>
        </StyledTile>

        <StyledTile>
          <StyledTileImage src={HomeDelivery} />
          <StyledTileTitle>dostawa do klienta</StyledTileTitle>
          <StyledTileDescription>towar dowozimy bezpośrednio do klienta
</StyledTileDescription>
        </StyledTile>

        <StyledTile>
          <StyledTileImage src={Warehouse} />
          <StyledTileTitle>duży magazyn</StyledTileTitle>
          <StyledTileDescription>chłodnie oraz duży magazyn gwarantują, że posiadamy tyle czosnku ile potrzebujesz
</StyledTileDescription>
        </StyledTile>

        <StyledTile>
          <StyledTileImage src={Experience} />
          <StyledTileTitle>doświadczenie</StyledTileTitle>
          <StyledTileDescription>mamy długoletnie doświadczenie w sprzedaży tego produktu
</StyledTileDescription>
        </StyledTile>

        <StyledTile>
          <StyledTileImage src={FastDelivery} />
          <StyledTileTitle>szybka dostawa</StyledTileTitle>
          <StyledTileDescription>posiadamy własne samochody dzięki którym dostarczymy Twoje zamówienia
</StyledTileDescription>
        </StyledTile>

      </StyledTilesWrapper>
    </StyledSectionQualityTiles>
  );
}

export default QualityTiles;