import React from 'react';
import theme from "../theme";
import styled, { ThemeProvider } from "styled-components";
import { Logo } from '../';
import Fade from 'react-reveal/Fade';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { TiDocumentText } from 'react-icons/ti';
import { StyledRow, StyledButton } from './styles'

class LandingRowAbout extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        // Set useGivenIdName to prevent scrolling glitch
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
                        <Fade bottom>
                            <div className={'about-intro'}>
                                Hey there! I'm
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className={'about-name'}>
                                <b>Gagan Kumar Tunuguntla</b>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className={'about-caption'}>
                                <b>I'm a Full Stack Software Engineer.</b>
                            </div>
                        </Fade>
                        <Fade>
                            <div className={'about-description'}>
                                I've solved all kinds of problems across a variety of
                                industries including Government, Supply Chain, Healthcare, E-Commerce, even Cosmetics.
                                Currently I work for <b><a href="https://www.elephantventures.com/" target="_blank">Elephant Ventures</a></b>.
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
