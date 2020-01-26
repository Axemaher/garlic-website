import React from 'react'
import styled from 'styled-components'
import Dinner from '../../images/icons/dinner.svg'
import Growth from '../../images/icons/growth.svg'
import Heart from '../../images/icons/heart.svg'
import Nose from '../../images/icons/nose.svg'
import Plaster from '../../images/icons/plaster.svg'
import Water from '../../images/icons/water.svg'
import H2 from '../H2/H2'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from "gatsby"

const StyledSectionDescriptionTiles = styled(BackgroundImage)`
  padding: 100px 0 100px 0;
  &::before, &::after{
    filter: opacity(
      ${({ lowOpacity }) => lowOpacity && '.1'}
    )
  }
  text-align: center;
  color: ${({ theme }) => theme.colors.fontBright};
`;


const StyledTilesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  justify-items: center;
  @media ${({ theme }) => theme.device.laptop}{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-around;
  }
`;

const StyledTileImage = styled.img`
  margin: 10px;
  width: 30px;
`;

const StyledTile = styled.div`
  width: 350px;
  margin: 15px;
  display: flex;
`;

const StyledTileTitle = styled.span`
  font-weight: bold;
  font-size: 1.6em;
  padding: 0 10px 10px 0;
  text-transform: uppercase;
`;

const StyledTileDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  color: ${({ theme }) => theme.colors.fontPrimary};
`;

const StyledTileDescription = styled.span`
  font-size: 1.3em;
`;

const DescriptionTiles = () => {

  const data = useStaticQuery(graphql`
  query {
    descriptionBG: file(relativePath: { eq: "sectionBG1.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`)

  const homeBG = data.descriptionBG.childImageSharp.fluid

  return (
    <StyledSectionDescriptionTiles fluid={homeBG} lowOpacity>
      <H2 primaryColor>CZOSNEK NAJWYŻSZEJ JAKOŚCI</H2>
      <StyledTilesWrapper>

        <StyledTile>
          <StyledTileImage src={Dinner} />
          <StyledTileDescriptionWrapper>
            <StyledTileTitle>Do potraw</StyledTileTitle>
            <StyledTileDescription>
              Stanowi idealną przyprawę do wielu przepisów. Posiada fantastyczny smak.
                        </StyledTileDescription>
          </StyledTileDescriptionWrapper>
        </StyledTile>

        <StyledTile>
          <StyledTileImage src={Growth} />
          <StyledTileDescriptionWrapper>
            <StyledTileTitle>Wysokiej jakości</StyledTileTitle>
            <StyledTileDescription>
              Nie posiada pędów, cebule czosnku nie są miękkie.
                        </StyledTileDescription>
          </StyledTileDescriptionWrapper>
        </StyledTile>

        <StyledTile>
          <StyledTileImage src={Heart} />
          <StyledTileDescriptionWrapper>
            <StyledTileTitle>Zdrowy</StyledTileTitle>
            <StyledTileDescription>
              Zdrowy wygląd, wolny od chorób i innych uszkodzeń.
                        </StyledTileDescription>
          </StyledTileDescriptionWrapper>
        </StyledTile>

        <StyledTile>
          <StyledTileImage src={Nose} />
          <StyledTileDescriptionWrapper>
            <StyledTileTitle>Aromat</StyledTileTitle>
            <StyledTileDescription>
              Fantastyczny aromat i intensywny smak co sprawia, że jest idealną przyprawą.
                        </StyledTileDescription>
          </StyledTileDescriptionWrapper>
        </StyledTile>

        <StyledTile>
          <StyledTileImage src={Plaster} />
          <StyledTileDescriptionWrapper>
            <StyledTileTitle>Bez uszkodzeń</StyledTileTitle>
            <StyledTileDescription>
              Starannie przygotowany, nie posiada uszkodzeń np. od uderzeń czy spowodowanych przez maszyny.
                        </StyledTileDescription>
          </StyledTileDescriptionWrapper>
        </StyledTile>

        <StyledTile>
          <StyledTileImage src={Water} />
          <StyledTileDescriptionWrapper>
            <StyledTileTitle>Czysty</StyledTileTitle>
            <StyledTileDescription>
              Dbamy, aby czosnek był czysty, nie posiadał ciał obcych czy pozostałości np. ziemi.
                        </StyledTileDescription>
          </StyledTileDescriptionWrapper>
        </StyledTile>


      </StyledTilesWrapper>
    </StyledSectionDescriptionTiles>
  );
}

export default DescriptionTiles;