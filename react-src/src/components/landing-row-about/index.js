import React from 'react';
import theme from "../theme";
import { ThemeProvider } from "styled-components";
import Fade from 'react-reveal/Fade';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { TiDocumentText } from 'react-icons/ti';
import { StyledRow, StyledButton, StyledWave } from './styles';
import content from './content';

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
                <StyledRow id={this.props.id}>
                    <div className="background">
                        {/*
                            content.background.map((bkgText, i) => (
                                <div
                                    key={i}
                                    className= {i % 2 == 1 ? `background-text-right` : `background-text-left`}
                                >
                                  {bkgText}
                                </div>
                            ))
                        */}
                    </div>
                    <Fade bottom>
                        <div className={'about-intro'}>
                            {content.intro}
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className={'about-name'}>
                            {content.name}
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className={'about-caption'}>
                            <b>{content.caption}</b>
                        </div>
                    </Fade>
                    <Fade delay={1000}>
                        <div className={'about-description'}>
                            {content.description}
                        </div>
                    </Fade>
                    <Fade delay={1000}>
                      <div className={'about-button-row'}>
                          <StyledButton> GitHub <FaGithub/> </StyledButton>
                          <StyledButton> Linkedin <FaLinkedin/> </StyledButton>
                      </div>
                    </Fade>
                </StyledRow>
                <svg className={'about-wave'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 90">
                  <path fill={theme.foreground} fillOpacity="1" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
            </ThemeProvider>
        )
    }

}

export default LandingRowAbout;
