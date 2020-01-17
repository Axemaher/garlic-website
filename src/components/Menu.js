import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import MenuButton from '../components/MenuButton'
import { size } from '../utils/media'
import { colors } from '../utils/colors'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StyledMenuWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 0px;
    @media ${({ theme }) => theme.device.tablet} {
        height: 80px;
    }
`;

const StyledNav = styled.nav`
    z-index: 2;
    width: 100vw;
    padding: 0 10px;
    /* max-width: 1400px;
    margin: 0 auto; */
    background-color: ${({ theme }) => theme.colors.navBG};
    font-size: 3em;
    text-align: center;
    transition: .2s ease-in-out;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-200vh)'};
    @media ${({ theme }) => theme.device.tablet} {
        display: flex;
        justify-content: space-between;
        font-size: 2em;
    }
`;

const StyledNavGroup = styled.ul`
    list-style: none;
    padding: 10px 0;
    margin: 0;
    @media ${({ theme }) => theme.device.tablet} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
    }
`;

const StyledNavElement = styled.li`
    padding: 20px;
    @media ${({ theme }) => theme.device.tablet} {
        padding: 0 10px;
    } 
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.font};
    display: inline-block;
`;

const StyledNavElementSocialIcons = styled(StyledNavGroup)`
    padding: 0;
    display: flex;
    justify-content: center;
`;

const StyledSocialElement = styled(StyledNavElement)`
    padding: 30px 10px 20px 10px;
    @media ${({ theme }) => theme.device.tablet} {
        margin: 0;
    }
`;

const StyledSocialLink = styled.a`
`;

const StyledSocialIcon = styled(Img)`
    width: 40px;
    @media ${({ theme }) => theme.device.tablet} {
        width: 25px;
    }
`;

const Menu = () => {

    const [open, setOpen] = useState(window.screen.width > size.tablet.slice(0, -2) ? true : false)

    const data = useStaticQuery(graphql`
    query menuLinks {
      site {
        siteMetadata {
            menuLinks {
              name
              link
            }
          }
      }
      fbIco: file(relativePath: { eq: "icons/fb-ico.png" }) {
        childImageSharp {
          fluid(maxWidth: 25) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <StyledMenuWrapper open={open}>
            <MenuButton handleOpen={setOpen} open={open}></MenuButton>
            <StyledNav open={open}>
                <StyledNavGroup>
                    <StyledNavElement>
                        <StyledLink to='/'>logo</StyledLink>
                    </StyledNavElement>
                </StyledNavGroup>
                <StyledNavGroup>
                    {data.site.siteMetadata.menuLinks.map(e =>
                        <StyledNavElement key={e.name}>
                            <StyledLink to={e.link} activeStyle={{ color: `${colors.active}` }}>{e.name}</StyledLink>
                        </StyledNavElement>)}
                    <StyledNavElementSocialIcons>
                        <StyledSocialElement>
                            <StyledSocialLink href='#'>
                                <StyledSocialIcon fluid={data.fbIco.childImageSharp.fluid} />
                            </StyledSocialLink>
                        </StyledSocialElement>
                    </StyledNavElementSocialIcons>
                </StyledNavGroup>
            </StyledNav>
        </StyledMenuWrapper>
    );
}

export default Menu;