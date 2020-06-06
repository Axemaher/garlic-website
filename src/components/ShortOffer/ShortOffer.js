import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import H2 from '../H2/H2'

const StyledSectionOffer = styled.section`
  padding: 50px 0 100px 0;
  background-color: ${({ theme }) => theme.colors.sectionBackground3};
  text-align: center;
`;

const StyledOfferWrapper = styled.div`
  display: block;
  @media ${({ theme }) => theme.device.laptop}{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    justify-content: space-around;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
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

const ShortOffer = ({ sectionTitle }) => {

  const data = useStaticQuery(graphql`
    query shortOfferDescription {
      shortOfferDescription: allContentfulProdukty {
        edges {
          node {
            productName
            productImage {
              fluid {
                base64
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
    <StyledSectionOffer>
      <H2>{sectionTitle}</H2>
      <StyledOfferWrapper>
        {data.shortOfferDescription.edges.map((el, i) =>
          <StyledOfferElement>
            <StyledImage fluid={el.node.productImage.fluid} />
            <StyledName>{el.node.productName}</StyledName>
            <StyledDescription>{el.node.productDesc.productDesc}</StyledDescription>
          </StyledOfferElement>
        )}
      </StyledOfferWrapper>
    </StyledSectionOffer>
  );
}

export default ShortOffer;