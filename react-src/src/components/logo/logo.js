import React from 'react';
import theme from "../theme";
import styled, { ThemeProvider } from "styled-components";

const StyledLogo = styled.div`
    display: inline-flex;
    flex-direction: column;
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
                <svg width="300px" height="300px">
                    <text textAnchor="middle" fontFamily="Itim" fontSize="90px" x="150" y="130">GAGAN</text>
                    <path d="M 0 152 H 300 V 155 H 0 L 0 10"/>
                    <text letterSpacing="4px" textAnchor="middle" fontFamily="Orbitron" x="150" y="180">KUMAR TUNUGUNTLA</text>
                    <path d="M 0 196 H 300 V 199 H 0 L 0 10"/>
                </svg>
                {/*
                <div className="first-name">
                    G<span className="first-name-special-letter">A</span>GAN
                </div>
                <div className="last-name">
                    Kumar Tunuguntla
                </div>*/}
            </StyledLogo>
        )
    }

}

export default Logo;
