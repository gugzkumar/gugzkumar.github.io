import React from 'react';
import theme from "../theme";
import styled, { ThemeProvider } from "styled-components";

const StyledLogo = styled.div`
    display: inline-flex;
    flex-direction: column;
    text-align: center;
    .first-name {
        font-family: "Itim";
        font-size: 90px;
    }
    .last-name {
        border-style: solid;
        border-width: 1px 0px;
        font-family: "Orbitron";
        text-transform: Uppercase;
        letter-spacing: 4px;
        padding: 5px 0px;
    }
`

class Logo extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render () {
        return (
            <StyledLogo className={this.props.className}>
                <div className="first-name">
                    G<span className="first-name-special-letter">A</span>GAN
                </div>
                <div className="last-name">
                    Kumar Tunuguntla
                </div>
            </StyledLogo>
        )
    }

}

export default Logo;
