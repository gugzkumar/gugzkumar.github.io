import React from 'react';
import theme from "../theme";
import { ThemeProvider } from "styled-components";
import Fade from 'react-reveal/Fade';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { TiDocumentText } from 'react-icons/ti';
import { StyledRow, StyledButton, StyledWave } from './styles';
import Background from './background.jpeg';

class LandingRowAbout extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
    }

    render () {
        return (
            <ThemeProvider theme={theme}>
                <StyledRow id={this.props.id} background = {Background}>
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
                            I've solved problems across a variety of
                            industries including Government, Supply Chain, Healthcare, E-Commerce, even Cosmetics.
                            Currently I work for <b><a href="https://www.elephantventures.com/" rel="noopener noreferrer" target="_blank">Elephant Ventures</a></b>.
                            <br/><br/>
                            My belief is to build <b>Products over Software</b> and that being able to <b>communicate effectively</b> and <b>working with others</b> is more important than any Tech you know.
                            <br/><br/>
                            I also have a personal blog on this website that I try to use as an outlet to the share the things I've learned as an engineer.
                        </div>
                    </Fade>
                    <Fade>
                      <div className={'about-button-row'}>
                          <StyledButton> GitHub <FaGithub/> </StyledButton>
                          <StyledButton> Linkedin <FaLinkedin/> </StyledButton>
                          <StyledButton> Resume <TiDocumentText/> </StyledButton>
                      </div>
                    </Fade>
                </StyledRow>
                <svg className={'about-wave'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                  <path fill={theme.foreground} fill-opacity="1" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>

            </ThemeProvider>
        )
    }

}

export default LandingRowAbout;
