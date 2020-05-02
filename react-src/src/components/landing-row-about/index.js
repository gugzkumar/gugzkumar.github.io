import React from 'react';
import theme from "../theme";
import styled, { ThemeProvider } from "styled-components";
import { Logo } from '../';
import Fade from 'react-reveal/Fade';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { TiDocumentText } from 'react-icons/ti';

const StyledRow = styled.div`
    color: ${props => props.theme.foreground};
    background-color: ${props => props.theme.primaryAbout};
    height: calc(100% + 1px);
    width: 100%;
    margin: 0;
    /* display: flex; */
    display: ${props => (props.showRow ? 'flex' : 'none')};
    flex-direction: column;
    padding-top: 15%;
    /* justify-content: center; */
    text-align: left;
    padding-left: 8%;
    word-wrap: break-word;
    .about-caption {
        font-size: 56px;
        color: ${props => props.theme.secondaryAbout};
        font-family: "Itim";
        letter-spacing: 2px;
        /* font-size: 5vw; */
    }
    .about-intro {
        font-size: 44px;
        color: ${props => props.theme.secondaryAbout};
        font-family: "Itim";
        letter-spacing: 2px;
        /* font-size: 4vw; */
    }
    .about-name {
        font-size: 56px;
        font-family: "Itim";
        letter-spacing: 2px;
        /* font-size: 5vw; */
    }
    .about-description {
        margin-top: 16px;
        max-width: 700px;
        margin-right: 15%;
        /* background-color: ${props => props.theme.background}; */
        /* padding: 10px; */
        /* border-radius: 10px; */
        /* box-shadow: -1px 15px 30px -12px black; */
        /* font-size: 1.5vw; */
        color: ${props => props.theme.secondaryAbout};
        b {
            color: ${props => props.theme.foreground};
        }
    }
    .about-button-row {
        margin-top: 24px;
    }
`

const StyledButton = styled.button`
    font-size: 24px;
    background-color: ${props => props.theme.background};
    border: none;
    border-radius: 10px;
    box-shadow: -1px 15px 30px -12px black;
    padding: 8px;
    margin-right: 16px;
    cursor: pointer;
    &:focus {
        background-color: ${props => props.theme.foreground};
        color: ${props => props.theme.background};
        box-shadow: -1px 5px 30px -5px black;
        outline: none;
        /* box-shadow: -2px 15px 30px -12px black; */
    }
    &:active {
        background-color: ${props => props.theme.secondaryAbout};
    }
    svg {
        vertical-align: sub;
    }

`

class LandingRowAbout extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = { useGivenIdName: false }
    }

    componentDidMount() {
        this.timerID = setTimeout(
          () => this.setGivenClassName(),
          5
        );
    }

    setGivenClassName() {
      this.setState({ useGivenIdName: true });
      window.scrollBy(0, 1);
    }

    render () {
        return (
            <ThemeProvider theme={theme}>
                <StyledRow id={'fake-about'} showRow={!this.state.useGivenIdName}>

                </StyledRow>
                <StyledRow id={this.props.id} showRow={this.state.useGivenIdName}>
                        <Fade bottom cascade>
                            <div className={'about-intro'}>
                                Hey there! I'm
                            </div>
                        </Fade>
                        <div className={'about-name'}>
                            <Fade bottom cascade>
                                <b>Gagan Kumar Tunuguntla</b>
                            </Fade>
                        </div>
                        <div className={'about-caption'}>
                            <Fade bottom cascade>
                                <b>I'm a software enginer.</b>
                            </Fade>
                        </div>
                        <Fade>
                            <div className={'about-description'}>
                                I've solved all kinds of problems across a variety of
                                industries including Government, Supply Chain, Healthcare, E-Commerce, even Cosmetics.
                                Currently I work for <b>Elephant Ventures</b>.
                                Check us out, we're a Venture Development firm.
                                <br/><br/>
                                My belief is to build <b>Products over Software</b> and that being able to <b>communicate effectively</b> and <b>working with others</b> is more important than any Tech you know.
                                <br/><br/>
                                I also have a personal blog on this website that I try to use as an outlet to the share the things I've learned as an engineer.
                            </div>
                        </Fade>
                        <div className={'about-button-row'}>
                            <StyledButton> GitHub <FaGithub/> </StyledButton>
                            <StyledButton> Linkedin <FaLinkedin/> </StyledButton>
                            <StyledButton> Resume <TiDocumentText/> </StyledButton>
                        </div>
                </StyledRow>
            </ThemeProvider>
        )
    }

}

export default LandingRowAbout;
