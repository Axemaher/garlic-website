import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout/layout';
import PageTitle from '../components/PageTitle/PageTitle'
import { colors } from '../utils/colors'


const StyledSectionContact = styled.section`
  padding: 0 0 100px 0;
  background-color: ${({ theme }) => theme.colors.sectionBackground1};
  text-align: center;
  font-size: 1.3em;
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
            <StyledSectionContact>
                <PageTitle colorFilter={colors.fontPrimary}>KONTAKT</PageTitle>
                <StyledContactWrapper>
                    <StyledInformations>
                        <StyledH3>Skontaktuj się z nami</StyledH3>
                        <StyledSubtitle>Napisz do nas lub zadzwoń, postaramy się odpowiedieć na wszelkie nurtujące Cię pytania</StyledSubtitle>

                        <StyledInformationWrapper>
                            <StyledInfoLabel>Adres</StyledInfoLabel>
                            <StyledInfo>
                                <StyledInfoElement>ul. Warszawska 34</StyledInfoElement>
                                <StyledInfoElement>05-300 Mińsk Mazowiecki</StyledInfoElement>
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
                                <StyledInfoElement><StyledA href="mailto:webmaster@example.com">webmaster@example.com</StyledA></StyledInfoElement>
                            </StyledInfo>
                        </StyledInformationWrapper>

                        <StyledInformationWrapper>
                            <StyledInfoLabel>Tel</StyledInfoLabel>
                            <StyledInfo>
                                <StyledInfoElement><StyledA href="tel:+1123-456-7890">123-456-7890</StyledA></StyledInfoElement>
                            </StyledInfo>
                        </StyledInformationWrapper>

                    </StyledInformations>
                    <StyledMap>
                        <StyledIframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.3488986769007!2d21.5598687!3d52.1825305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471f2e8117f3745d%3A0x259d375fb8fca7cc!2zUC5XLiBHQcWBxIRaS0EgU3RhbmlzxYJhdyBHYcWCxIV6a2E!5e0!3m2!1sen!2spl!4v1581147660715!5m2!1sen!2spl" frameborder="0" allowfullscreen=""></StyledIframe>
                    </StyledMap>
                </StyledContactWrapper>
            </StyledSectionContact>
        </Layout>
    );
}

export default Contact;