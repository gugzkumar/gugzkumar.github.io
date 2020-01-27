import React from 'react';
import theme from "../theme";
import styled, { ThemeProvider } from "styled-components";

const menuItems = [
    { label: 'Github' , link: '' },
    { label: 'Linkedin' , link: '' },
    { label: 'Resume' , link: '' },
];

const StyledFooter = styled.div`
    color: ${props => props.theme.background};
    background-color: ${props => props.theme.foreground};
    ul {
      display: block;
      padding: 0;
      margin: 0;
      text-align: center;
      li {
        display: inline-block;
        margin: 0px 15px;
        padding: 8px;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
`

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render () {
        return (
            <ThemeProvider theme={theme}>
                <StyledFooter>
                    <ul>
                        {menuItems.map(({ label, link }) => {
                            return <li key={label}>{label}</li>
                        })}
                    </ul>
                </StyledFooter>
            </ThemeProvider>
        )
    }

}

export default Footer;
