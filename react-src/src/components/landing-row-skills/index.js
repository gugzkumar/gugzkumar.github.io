import React from 'react';
import theme from "../theme";
import { ThemeProvider } from "styled-components";
import Fade from 'react-reveal/Fade';
import SwipeableViews from 'react-swipeable-views';
import DataEngineeringSVG from './DataEngineeringSVG';
import DevOpsSVG from './DevOpsSVG';
import WebDevelopmentSVG from './WebDevelopmentSVG';
import LeadershipSVG from './LeadershipSVG';
import { StyledRow, SkillCard } from './styles';

const swipeableStyles = {
  root: {
    height: '100%'
  },
  slideContainer: {
    height: '100%',
  },
};

class LandingRowSkills extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render () {
        return (
            <ThemeProvider id={this.props.id} theme={theme}>
                <div id={this.props.id} style={{'height': 'calc(100% + 1px)'}}>
                <StyledRow className="screen-desktop">
                    <Fade>
                        <SkillCard>
                            <h2> Web Development </h2>
                            <WebDevelopmentSVG />
                            <p> Creating robust web apps to UX and Bussiness Requirements. Frontend, Backend, Database; I build across the entire stack. </p>
                        </SkillCard>
                    </Fade>
                    <Fade>
                        <SkillCard>
                            <h2> DevOps </h2>
                            <DevOpsSVG />
                            <p> Securing the Integrity of the Development Process and Software Environments through Automating Infrastructure Provisioning and implementing Continous Integration and Deployment. </p>
                        </SkillCard>
                    </Fade>
                    <Fade>
                        <SkillCard>
                            <h2> Data Engineering </h2>
                            <DataEngineeringSVG />
                            <p> Building fault tolerant ETL pipelines for batch processing and data synchronization across services and databases. </p>
                        </SkillCard>
                    </Fade>
                    <Fade>
                        <SkillCard>
                            <h2> Leadership </h2>
                            <LeadershipSVG />
                            <p> I am a PSM 1 certified Scrum Master from Scrum.org. I've led agile teams as an Architect, Technical Lead and Scrum Master. </p>
                        </SkillCard>
                    </Fade>
                </StyledRow>

                <StyledRow className="screen-mobile">
                    <SwipeableViews resistance style={swipeableStyles.root} slideStyle={swipeableStyles.slideContainer}>
                        <Fade>
                            <SkillCard>
                                <h2> Web Development </h2>
                                <WebDevelopmentSVG />
                                <p> Creating robust web apps to UX and Bussiness Requirements. Frontend, Backend, Database; I build across the entire stack. </p>
                            </SkillCard>
                        </Fade>
                        <Fade>
                            <SkillCard>
                                <h2> DevOps </h2>
                                <DevOpsSVG />
                                <p> Securing the Integrity of the Development Process and Software Environments through Automating Infrastructure Provisioning and implementing Continous Integration and Deployment. </p>
                            </SkillCard>
                        </Fade>
                        <Fade>
                            <SkillCard>
                                <h2> Data Engineering </h2>
                                <DataEngineeringSVG />
                                <p> Building fault tolerant ETL pipelines for batch processing and data synchronization across services and databases. </p>
                            </SkillCard>
                        </Fade>
                        <Fade>
                            <SkillCard>
                                <h2> Leadership </h2>
                                <LeadershipSVG />
                                <p> I am a PSM 1 certified Scrum Master from Scrum.org. I've led agile teams as an Architect, Technical Lead and Scrum Master. </p>
                            </SkillCard>
                        </Fade>
                    </SwipeableViews>
                </StyledRow>
                </div>
            </ThemeProvider>
        )
    }

}

export default LandingRowSkills;
