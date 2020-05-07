import React from 'react';
import theme from "../theme";
import { ThemeProvider } from "styled-components";
import Fade from 'react-reveal/Fade';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { TiDocumentText } from 'react-icons/ti';
import { StyledRow, StyledTitle, StyledProjectContainer, StyledProjectDescription } from './styles';
import { Monitor } from '../';
import ScreenShotOne from './project-1-screenshot.png';
import ScreenShotTwo from './project-2-screenshot.png';

class LandingRowPortfolio extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
    }

    render () {
        return (
            <>
                <Fade>
                    <StyledTitle id={this.props.id}><i> My Portfolio </i></StyledTitle>
                </Fade>
                <StyledRow>
                    <Fade>
                        <StyledProjectContainer className={'left'} >
                            <Monitor className={'portfolio-project-monitor'} imgSrc={ScreenShotOne}/>
                            <StyledProjectDescription>
                                <h2>Personal Webpage and Blog </h2>
                                <p>This is my proffesional website and blog. It's also the current site you are on.</p>
                                <ul>
                                  <li>React</li>
                                  <li>Javascript</li>
                                  <li>Responsive Web App</li>
                                  <li>HTML</li>
                                  <li>SCSS</li>
                                  <li>CircleCi</li>
                                </ul>
                            </StyledProjectDescription>
                        </StyledProjectContainer>
                    </Fade>
                    <Fade>
                        <StyledProjectContainer>
                            <Monitor className={'portfolio-project-monitor'} imgSrc={ScreenShotTwo}/>
                            <StyledProjectDescription className={'right'}>
                                <h2>Cheet Sheet </h2>
                                <p>Cheet Sheet is an open source Content Management System for developers and development teams to Create, Edit and Share code snippets.</p>
                                <ul>
                                    <li>Angular</li>
                                    <li>Python</li>
                                    <li>Typescript</li>
                                    <li>Node</li>
                                    <li>SCSS</li>
                                    <li>AWS</li>
                                    <li>Serverless Design</li>
                                    <li>Docker</li>
                                    <li>CircleCi</li>
                                </ul>
                            </StyledProjectDescription>
                        </StyledProjectContainer>
                    </Fade>
                </StyledRow>
            </>
        )
    }

}

export default LandingRowPortfolio;
