import React from 'react';
import theme from "../theme";
import { ThemeProvider } from "styled-components";
import { Link } from "gatsby";
import Scrollspy from 'react-scrollspy';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { StyledHeader, StyledLinkContainer } from './styles'

const menuItems = [
    { label: 'About' , link: '/#about', backgroundcolor: theme.primaryAbout, color: theme.foreground, id:"about" },
    { label: 'Skills' , link: '/#skills', backgroundcolor: theme.primarySkills, color: theme.background, id:"skills" },
    { label: 'Experience' , link: '/#experience', backgroundcolor: theme.primaryExperience, color: theme.foreground, id:"experience" },
    { label: 'Portfolio' , link: '/#portfolio', backgroundcolor: theme.primaryAbout, color: theme.foreground, id:"portfolio" },
    { label: 'Blog' , link: '/blog', backgroundcolor: theme.primaryBlogs, color: theme.foreground, id:"blogs" }
];


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
                    <Scrollspy items={menuItems.map(obj => obj.id)} currentClassName="is-current" >
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
