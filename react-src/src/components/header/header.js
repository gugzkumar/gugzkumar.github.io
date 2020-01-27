import React from 'react';
import theme from "../theme";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "gatsby";
import Scrollspy from 'react-scrollspy';

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
    ul {
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 0;
      text-align: center;
      text-transform: Uppercase;
      text-orientation: lr;
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
    &.is-current {
        color: ${props => props.color};
        background-color: ${props => props.backgroundcolor};
        font-weight: 800;
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
                    <ul>
                        <Scrollspy items={menuItems.map(obj => obj.id)} currentClassName="is-current">
                        {menuItems.map(({ label, link, backgroundcolor, color }) => {
                            return <StyledLinkContainer backgroundcolor={backgroundcolor} color={color} key={label}>
                                    <Link to={link}><li>
                                            {label}
                                    </li></Link>
                                </StyledLinkContainer>
                        })}
                        </Scrollspy>
                    </ul>

                </StyledHeader>
            </ThemeProvider>
        )
    }

}

export default Header;
