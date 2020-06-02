import React from "react"
import Layout from '../Layout/layout'
import styled from 'styled-components'
import ShortOffer from "../components/ShortOffer/ShortOffer"
import Table from "../components/Table/Table"
import PageTitle from '../components/PageTitle/PageTitle'

const StyledSectionOffer = styled.section`
  padding: 0 0 100px 0;
  background-color: ${({ theme }) => theme.colors.sectionBackground3};
  text-align: center;
`;

const OfferPage = () => {

  return (
    <Layout>
      <PageTitle>OFERTA</PageTitle>
      <StyledSectionOffer>
        <ShortOffer sectionTitle={"NASZE NAJLEPSZE PRODUKTY"} />
      </StyledSectionOffer>
      <Table />
    </Layout>
  );
}

export default OfferPage;