import React from 'react';
import theme from "../theme";
import { ThemeProvider } from "styled-components";
import Fade from 'react-reveal/Fade';
import SwipeableViews from 'react-swipeable-views';
import DataEngineeringSVG from './DataEngineeringSVG';
import DevOpsSVG from './DevOpsSVG';
import WebDevelopmentSVG from './WebDevelopmentSVG';
import LeadershipSVG from './LeadershipSVG';
import { StyledRow, StyledTitle, SkillCard } from './styles';
import content from './content';

const swipeableStyles = {
  root: {
    height: '100%',
    overflowY: 'visible',
  },
  slideContainer: {
    height: '100%',
    overflow: 'visible'
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
                <Fade>
                  <StyledTitle id={this.props.id} ><i> My Skills </i></StyledTitle>
                </Fade>
                <StyledRow className="screen-desktop">
                    {
                        content.skills.map(skill =>
                            <Fade key={skill.skillName}>
                                <SkillCard>
                                    <h2> {skill.skillName} </h2>
                                    {skill.svgComponent}
                                    {skill.description}
                                </SkillCard>
                            </Fade>
                        )
                    }
                </StyledRow>

                <StyledRow className="screen-mobile">
                    <SwipeableViews resistance style={swipeableStyles.root} slideStyle={swipeableStyles.slideContainer}>
                        {
                            content.skills.map(skill =>
                                <Fade key={skill.skillName}>
                                    <SkillCard>
                                        <h2> {skill.skillName} </h2>
                                        {skill.svgComponent}
                                        {skill.description}
                                    </SkillCard>
                                </Fade>
                            )
                        }
                    </SwipeableViews>
                </StyledRow>
            </ThemeProvider>
        )
    }

}

export default LandingRowSkills;
