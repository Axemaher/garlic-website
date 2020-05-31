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
  background: linear-gradient(90deg, rgba(255,255,255,0.6) 72%, rgba(255,255,255,0) 100%);
  height: 100%;
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
    query products {
      products: allContentfulProdukty {
        edges {
          node {
            productName
            productImage {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
              }
            }
             productDesc{
              productDesc
            }
          }
        }
      }
    }
  `);
  return (
    <StyledSectionShortOffer>
      <H2>NAJLEPSZE PRODUKTY</H2>
      <StyledOfferWrapper>
        {data.products.edges.map((el, i) =>
          <StyledOfferElementWithBackground key={i} fluid={el.node.productImage.fluid} >
            <StyledOfferDescriptionWrapper>
              <StyledOfferTitle>{el.node.productName}</StyledOfferTitle>
              <StyledOfferDescription>{el.node.productDesc.productDesc}</StyledOfferDescription>
              <Button primary="true" big="true" to={'/offer'}>zobacz więcej</Button>
            </StyledOfferDescriptionWrapper>
          </StyledOfferElementWithBackground>
        )}
      </StyledOfferWrapper>
    </StyledSectionShortOffer>
  );
}

export default ShortOffer;
