import React from 'react'
import styled from 'styled-components'

const StyledSectionTables = styled.section`
  padding: 100px 0 100px 0;
  background-color: ${({ theme }) => theme.colors.sectionBackground1};
`;

const StyledTablesWrapper = styled.div`
  display: block;
  @media ${({ theme }) => theme.device.laptop}{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }
`;

const StyledTable = styled.table`
  background: ${({ theme }) => theme.colors.tableBackground};
  height: auto;
  max-width: 600px;
  padding: 10px;
  margin: 10px auto;
  @media ${({ theme }) => theme.device.laptop}{
    max-width: 600px;
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

const StyledIco = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('http://ressources.jardinage.eu/images/article/les-gousses-d-ail.jpg');
  background-size: cover;
  background-position: center;
`;


const Table = () => {
  return (
    <StyledSectionTables>
      <StyledTablesWrapper>
        <StyledTable>
          <thead>
            <tr>
              <StyledTh colSpan={3}>Czosnek tradycyjny</StyledTh>
            </tr>
          </thead>
          <tbody>
            <StyledTr>
              <StyledTdFirst>
                <StyledIco />
              </StyledTdFirst>
              <StyledTd>worek siatkowy - 1, 2, lub 3 główki czosnku - ok 100g</StyledTd>
              <StyledTdLast>5zł</StyledTdLast>
            </StyledTr>

            <StyledTr>
              <StyledTdFirst>
                <StyledIco />
              </StyledTdFirst>
              <StyledTd>worek siatkowy - 1, 2, lub 3 główki czosnku - ok 100g</StyledTd>
              <StyledTdLast>5zł</StyledTdLast>
            </StyledTr>

            <StyledTr>
              <StyledTdFirst>
                <StyledIco />
              </StyledTdFirst>
              <StyledTd>worek siatkowy - 1, 2, lub 3 główki czosnku - ok 100g</StyledTd>
              <StyledTdLast>5zł</StyledTdLast>
            </StyledTr>

            <StyledTr>
              <StyledTdFirst>
                <StyledIco />
              </StyledTdFirst>
              <StyledTd>worek siatkowy - 1, 2, lub 3 główki czosnku - ok 100g</StyledTd>
              <StyledTdLast>5zł</StyledTdLast>
            </StyledTr>

          </tbody>
        </StyledTable>

        <StyledTable>
          <thead>
            <tr>
              <StyledTh colSpan={3}>Czosnek tradycyjny</StyledTh>
            </tr>
          </thead>
          <tbody>
            <StyledTr>
              <StyledTdFirst>
                <StyledIco />
              </StyledTdFirst>
              <StyledTd>worek siatkowy - 1, 2, lub 3 główki czosnku - ok 100g</StyledTd>
              <StyledTdLast>5zł</StyledTdLast>
            </StyledTr>

            <StyledTr>
              <StyledTdFirst>
                <StyledIco />
              </StyledTdFirst>
              <StyledTd>worek siatkowy - 1, 2, lub 3 główki czosnku - ok 100g</StyledTd>
              <StyledTdLast>5zł</StyledTdLast>
            </StyledTr>

            <StyledTr>
              <StyledTdFirst>
                <StyledIco />
              </StyledTdFirst>
              <StyledTd>worek siatkowy - 1, 2, lub 3 główki czosnku - ok 100g</StyledTd>
              <StyledTdLast>5zł</StyledTdLast>
            </StyledTr>

            <StyledTr>
              <StyledTdFirst>
                <StyledIco />
              </StyledTdFirst>
              <StyledTd>worek siatkowy - 1, 2, lub 3 główki czosnku - ok 100g</StyledTd>
              <StyledTdLast>5zł</StyledTdLast>
            </StyledTr>

          </tbody>
        </StyledTable>
      </StyledTablesWrapper>
    </StyledSectionTables>
  );
}

export default Table;