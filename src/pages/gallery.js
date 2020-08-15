import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout/layout'
import PageTitle from '../components/PageTitle/PageTitle'
import { SRLWrapper } from 'simple-react-lightbox'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Helmet } from 'react-helmet'


const StyledSectionGallery = styled.section`
  padding: 50px 0 100px 0;
  background-color: ${({ theme }) => theme.colors.sectionBackground1};
  text-align: center;
`;

const StyledGalleryWrapper = styled.article`
  padding: 0 10px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    justify-content: space-around;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-column-gap: 20px;
    grid-row-gap: 20px;
`;

const StyledImg = styled(Img)`
    height: 350px;
    width: auto;
`;

const GalleryPage = () => {

    const data = useStaticQuery(graphql`
    query gallery {
      gallery: contentfulGaleria {
        photos {
            fluid {
                base64
                srcWebp
                srcSetWebp
            }
        }
      }
    }
  `);
    return (
        <Layout>
            <Helmet>
                <title>Sprzedaż czosnku - hurtowa i detaliczna | Wysoka jakość | Dostawa</title>
                <meta
                    name="description"
                    content="Najwyższej jakości świeży czosnek, czysty i aromatyczny. Dostępny w hurtowych ilościach i różnych opakowaniach. Zamów z dostawą już dziś!"
                />
            </Helmet>
            <PageTitle>GALERIA</PageTitle>
            <StyledSectionGallery>
                <SRLWrapper>
                    <StyledGalleryWrapper>
                        {data.gallery.photos.map((el, i) =>
                            <StyledImg key={i} fluid={el.fluid} />
                        )}
                    </StyledGalleryWrapper>
                </SRLWrapper>
            </StyledSectionGallery>
        </Layout>
    );
}

export default GalleryPage;