import React from "react"
import Layout from '../Layout/layout'
import styled from 'styled-components'
import ShortOffer from "../components/ShortOffer/ShortOffer"
import Table from "../components/Table/Table"
import PageTitle from '../components/PageTitle/PageTitle'
import { Helmet } from 'react-helmet'
import { JsonLd } from '../components/JsonLd'

const StyledSectionOffer = styled.section`
  padding: 0 0 100px 0;
  background-color: ${({ theme }) => theme.colors.sectionBackground3};
  text-align: center;
`;

const OfferPage = () => {

  return (
    <Layout>
      <Helmet>
        <title>czosnek24h - zawsze świeży czosnek</title>
        <description>Sprzedaż czosnku, dowóz do klienta, możliwa wysyłka, zawsze świeży, wysokie stany magazynowe</description>
        <JsonLd>
          {{
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@context": "https://schema.org",
                  "@type": "Article",
                  "url": "https://czosnek24h.pl/offer/#hiszpanski",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://czosnek24h.pl/offer"
                  },
                  "headline": "Czosnek hiszpański",
                  "description": "Wykazuje szczególne działanie bakteriobójcze. Ponadto wzmacnia odporność, ale to nie jedyne jego możliwości. Jednak aby w pełni korzystać z zawartych w nim substancji, najlepiej spożywać go na surowo - po obróbce termicznej traci część właściwości. Sprzedaż również w ilościach hurtowych.",
                  "image": "http://images.ctfassets.net/dky8pootj60q/6LqqltGhhHCpPjECnPXX2m/bb47e4569da0707f8f4d5625dc8c7965/IMG20200530113143.jpg?w=1200&h=720&q=50&fm=webp",
                  "author": {
                    "@type": "Organization",
                    "name": "czosnek24h"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "czosnek24h",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://czosnek24h.pl/static/addfe24ab606c60b34f7f17d9c9622bf/ee2a3/logoIco.png",
                      "width": 40,
                      "height": 47
                    }
                  },
                  "datePublished": "2020-06-06",
                  "dateModified": "2020-06-06"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@context": "https://schema.org",
                  "@type": "Article",
                  "url": "https://czosnek24h.pl/offer/#harnas",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://czosnek24h.pl/offer"
                  },
                  "headline": "Czosnek polski Harnaś",
                  "description": "Wykazuje szczególne działanie bakteriobójcze. Ponadto wzmacnia odporność, ale to nie jedyne jego możliwości. Jednak aby w pełni korzystać z zawartych w nim substancji, najlepiej spożywać go na surowo - po obróbce termicznej traci część właściwości.",
                  "image": "http://images.ctfassets.net/dky8pootj60q/4DWdzL6a1cZiiW8SAktYMS/04abd630a1327feb656d8ca9bfdfb76c/IMG20200212205713.jpg?w=1200&h=900&q=50&fm=webp",
                  "author": {
                    "@type": "Organization",
                    "name": "czosnek24h"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "czosnek24h",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://czosnek24h.pl/static/addfe24ab606c60b34f7f17d9c9622bf/ee2a3/logoIco.png",
                      "width": 40,
                      "height": 47
                    }
                  },
                  "datePublished": "2020-06-06",
                  "dateModified": "2020-06-06"
                }
              }
            ]
          }}
        </JsonLd>
      </Helmet>
      <PageTitle>OFERTA</PageTitle>
      <StyledSectionOffer>
        <ShortOffer sectionTitle={"NASZE NAJLEPSZE PRODUKTY"} />
      </StyledSectionOffer>
      <Table />
    </Layout>
  );
}

export default OfferPage;