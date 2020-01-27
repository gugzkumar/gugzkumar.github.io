import React from 'react';
import theme from "../theme";
import styled, { ThemeProvider } from "styled-components";
import { Logo } from '../';

const StyledRow = styled.div`
    color: ${props => props.theme.foreground};
    background-color: ${props => props.theme.primaryAbout};
    height: 100%;
    width: 100%;
    margin: 0;
    text-align: center;
`

class LandingRowAbout extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render () {
        return (
            <ThemeProvider theme={theme}>
                <StyledRow id={this.props.id}>
                    <Logo/>
                </StyledRow>
            </ThemeProvider>
        )
    }

}

export default LandingRowAbout;
