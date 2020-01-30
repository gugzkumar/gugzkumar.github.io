import React from 'react';
import theme from "../theme";
import styled, { ThemeProvider, css } from "styled-components";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Image from "gatsby-image"
import Scrollspy from 'react-scrollspy';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const menuItems = [
    { label: 'About' , link: '/#about', backgroundcolor: theme.primaryAbout, color: theme.foreground, id:"about" },
    { label: 'Skills' , link: '/#skills', backgroundcolor: theme.primarySkills, color: theme.background, id:"skills" },
    // { label: 'Projects' , link: '', backgroundcolor: theme.primaryAbout, color: theme.foreground, id:"" },
    { label: 'Experience' , link: '/#experience', backgroundcolor: theme.primaryExperience, color: theme.foreground, id:"experience" },
    { label: 'Blogs' , link: '/blog', backgroundcolor: theme.primaryBlogs, color: theme.foreground, id:"blogs" }
];

const StyledHeader = styled.div`
    color: ${props => props.theme.background};
    background-color: ${props => props.theme.navbar};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 10;
    ul {
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 0;
      text-align: center;
      text-transform: Uppercase;
      text-orientation: lr;
    }
    .social-media-container {
        font-size: 40px;
        display: flex;
        justify-content: space-between !important;
        margin: 52px 24px;
    }
    .profile-pic {
        align-self: center;
    }

    @media only screen and (max-width: 900px) {
        &, ul {
            flex-direction: row;
        }
        .social-media-container {
            font-size: 24px;
            margin: 0px 24px;
            align-self: center;
            svg {
                margin-left: 12px;
            }
        }

    }
`

const StyledLinkContainer = styled.div`
    cursor: pointer;
    a {
        display: block;
        text-decoration: none;
        color: inherit;
    }
    li {
        font-size: 16px;
        display: inline-block;
        margin: 20px 16px;
        padding: 8px;
        transform-origin: 0 0;
    }
    &:hover {
        li {
            text-decoration: underline;
        }
    }
    ${props => true ? css`
            &.is-current {
                color: ${props => props.color};
                background-color: ${props => props.backgroundcolor};
                font-weight: 800;
            }`
            : ``
    }

    @media only screen and (max-width: 900px) {
        li {
            font-size: 12px;
            padding: 0px;
            margin: 12px 8px;
        }
    }
`




class Header extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    onScrollDetect(element) {

    }

    render () {

        return (
            <ThemeProvider theme={theme}>
                <StyledHeader className={this.props.className}>
                    <Scrollspy items={menuItems.map(obj => obj.id)} currentClassName="is-current" onEvent={e => console.log(e)} offset={-20}>
                        {menuItems.map(({ label, link, backgroundcolor, color }) => {
                            return <StyledLinkContainer backgroundcolor={backgroundcolor} color={color} key={label}>
                                    <Link to={link}><li>
                                            {label}
                                    </li></Link>
                                </StyledLinkContainer>
                        })}
                    </Scrollspy>
                    <div className={`social-media-container`}>
                        <FaLinkedin />
                        <FaGithub />
                    </div>
                </StyledHeader>
            </ThemeProvider>
        )
    }

}

export default Header;
