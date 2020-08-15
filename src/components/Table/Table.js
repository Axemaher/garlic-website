import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const StyledSectionTables = styled.section`
  padding: 50px 0 100px 0;
  background-color: ${({ theme }) => theme.colors.sectionBackground1};
`;

const StyledTablesWrapper = styled.div`
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

const StyledTable = styled.table`
  background: ${({ theme }) => theme.colors.tableBackground};
  height: auto;
  max-width: 600px;
  padding: 10px;
  margin: 0 auto;
  @media ${({ theme }) => theme.device.laptop}{
    max-width: 600px;
  margin: 10px;

  }
`;

const StyledTh = styled.th`
  color: ${({ theme }) => theme.colors.fontBright};
  background: ${({ theme }) => theme.colors.fontPrimary};
  border-bottom:  2px solid ${({ theme }) => theme.colors.fontBright};
  font-size:  2em;
  padding:  14px;
  text-align: center;
  vertical-align: middle;
`;

const StyledTd = styled.td`
  background: ${({ theme }) => theme.colors.tableBackground};
  text-align: left;
  vertical-align: middle;
  font-size: .8em;
  padding: 5px;
  @media ${({ theme }) => theme.device.laptop}{
    font-size:  1em;
  }
`;

const StyledTdFirst = styled(StyledTd)`
  width: 120px;
  height: 100px;
`;

const StyledTdLast = styled(StyledTd)`
  min-width: 100px;
  text-align: center;
`;

const StyledTr = styled.tr`
  color: ${({ theme }) => theme.colors.fontPrimary};
  font-size:  1.5em;
  &:nth-child(odd) ${StyledTd} {
    background:#EBEBEB;
  }
`;

const StyledIco = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;


const Table = () => {

  const data = useStaticQuery(graphql`
    query packagingAndPrices {
      packagingAndPrices:   allContentfulProdukty {
        edges {
          node {
            productName
            offer {
              garlicType
              packageImage {
                fluid(maxHeight: 120) {
                  base64
                  srcWebp
                  srcSetWebp
                }
              }
              packageDesc
              price
            }
          }
        }
      }
    }
  `);

  return (
    <StyledSectionTables>
      <StyledTablesWrapper>
        {data.packagingAndPrices.edges.map(el =>
          <StyledTable>
            <thead>
              <tr>
                <StyledTh colSpan={3}>{el.node.productName}</StyledTh>
              </tr>
            </thead>
            <tbody>
              {el.node.offer.map(offer =>
                <StyledTr>
                  <StyledTdFirst>
                    <StyledIco fluid={offer.packageImage.fluid} />
                  </StyledTdFirst>
                  <StyledTd>{offer.packageDesc}</StyledTd>
                  <StyledTdLast>{offer.price === null ? "na zapytanie" : offer.price.toFixed(2)}</StyledTdLast>
                </StyledTr>
              )}

            </tbody>
          </StyledTable>
        )}
      </StyledTablesWrapper>
    </StyledSectionTables>
  );
}

export default Table;