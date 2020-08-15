import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout/layout';
import PageTitle from '../components/PageTitle/PageTitle'
import { Helmet } from 'react-helmet'


const StyledSectionContact = styled.section`
  padding: 50px 0 100px 0;
  background-color: ${({ theme }) => theme.colors.sectionBackground1};
  text-align: center;
`;

const StyledContactWrapper = styled.div`
  display: block;
  padding: 0 10px;
  @media ${({ theme }) => theme.device.tablet}{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 10px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const StyledInformations = styled.div`
    margin-bottom: 40px;
    text-align: left;
    font-size: 1.3em;
    @media ${({ theme }) => theme.device.tablet}{
        margin-bottom: 0;
    }
`;

const StyledMap = styled.div``;

const StyledH3 = styled.h3`
    font-size: 1.9em;
    padding-bottom: 20px;
`;

const StyledSubtitle = styled.p`
    padding-bottom: 20px;
`;

const StyledInformationWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
`;

const StyledInfoLabel = styled.p`
    width: 100px;   
    font-weight: bold;
    @media ${({ theme }) => theme.device.tablet}{
        width: 140px;
    }
`;

const StyledInfo = styled.ul`
    list-style: none;
    text-align: left;
`;

const StyledInfoElement = styled.li``;

const StyledA = styled.a``;

const StyledIframe = styled.iframe`
    width: 100%;
    height: 300px;
    border: none;
`;

const Contact = () => {
    return (
        <Layout>
            <Helmet>
                <title>Sprzedaż czosnku - hurtowa i detaliczna | Wysoka jakość | Dostawa</title>
                <meta
                    name="description"
                    content="Najwyższej jakości świeży czosnek, czysty i aromatyczny. Dostępny w hurtowych ilościach i różnych opakowaniach. Zamów z dostawą już dziś!"
                />

            </Helmet>
            <PageTitle>KONTAKT</PageTitle>
            <StyledSectionContact>
                <StyledContactWrapper>
                    <StyledInformations>
                        <StyledH3>Skontaktuj się z nami</StyledH3>
                        <StyledSubtitle>Napisz do nas lub zadzwoń, postaramy się odpowiedieć na wszelkie nurtujące Cię pytania</StyledSubtitle>

                        <StyledInformationWrapper>
                            <StyledInfoLabel>Adres</StyledInfoLabel>
                            <StyledInfo>
                                <StyledInfoElement>ul. Mostowa 6</StyledInfoElement>
                                <StyledInfoElement>05-334 Latowicz</StyledInfoElement>
                            </StyledInfo>
                        </StyledInformationWrapper>

                        <StyledInformationWrapper>
                            <StyledInfoLabel>Godziny pracy</StyledInfoLabel>
                            <StyledInfo>
                                <StyledInfoElement>poniedziałek - piątek: 8 - 16</StyledInfoElement>
                                <StyledInfoElement>sobota: 8 - 14</StyledInfoElement>
                            </StyledInfo>
                        </StyledInformationWrapper>

                        <StyledInformationWrapper>
                            <StyledInfoLabel>Mail</StyledInfoLabel>
                            <StyledInfo>
                                <StyledInfoElement><StyledA href="mailto:kontakt@czosnek24h.pl@">kontakt@czosnek24h.pl</StyledA></StyledInfoElement>
                            </StyledInfo>
                        </StyledInformationWrapper>

                        <StyledInformationWrapper>
                            <StyledInfoLabel>Tel</StyledInfoLabel>
                            <StyledInfo>
                                <StyledInfoElement><StyledA href="tel:+48517546201">517 546 201</StyledA></StyledInfoElement>
                            </StyledInfo>
                        </StyledInformationWrapper>

                    </StyledInformations>
                    <StyledMap>
                        <StyledIframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52832.52002298793!2d21.772859283547817!3d52.008100251248464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4718b58f868942bb%3A0x6b3241758ad3e7ae!2sMostowa%206%2C%2005-334%20Latowicz!5e0!3m2!1spl!2spl!4v1582580608102!5m2!1spl!2spl" width="600" height="450" frameborder="0" allowfullscreen=""></StyledIframe>
                    </StyledMap>
                </StyledContactWrapper>
            </StyledSectionContact>
        </Layout>
    );
}

export default Contact;
