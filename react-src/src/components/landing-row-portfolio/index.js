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
            <ThemeProvider theme={theme}>
                <Fade>
                    <StyledTitle id={this.props.id}><i> My Portfolio </i></StyledTitle>
                </Fade>
                <StyledRow>
                    <StyledProjectContainer className={'left'} >
                        <Monitor className={'portfolio-project-monitor'} imgSrc={ScreenShotOne}/>
                        <StyledProjectDescription>
                            <h2> Personal Webpage and Blog </h2>
                        </StyledProjectDescription>
                    </StyledProjectContainer>
                    <StyledProjectContainer>
                        <Monitor className={'portfolio-project-monitor'} imgSrc={ScreenShotTwo}/>
                        <StyledProjectDescription className={'right'}>
                          <h2> Cheet Sheet </h2>
                        </StyledProjectDescription>
                    </StyledProjectContainer>
                </StyledRow>
            </ThemeProvider>
        )
    }

}

export default LandingRowPortfolio;
