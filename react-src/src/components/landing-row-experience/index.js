import React from 'react';
import theme from "../theme";
import styled, { ThemeProvider } from "styled-components";
import ExperienceCard from './ExperienceCard';
import TimeLineSelector from './TimeLineSelector';
import Fade from 'react-reveal/Fade';
import { StyledRow, StyledTitle } from './styles';
import content from './content';

class LandingRowExperience extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        content.experiences.map((experience) => {
            experience.onClick = () => {
                this.setState({selectedExperience: experience});
            };
        });
        this.state = {selectedExperience: content.experiences[0]};
    }

    render () {
        return (
            <ThemeProvider theme={theme}>
                <Fade>
                  <StyledTitle id={this.props.id}><i> My Education and Experience </i></StyledTitle>
                </Fade>
                <StyledRow>
                    <Fade>
                        <div className="experience-container">
                            <TimeLineSelector className={'timeline'} selectedExperience={this.state.selectedExperience} experiences={content.experiences}/>
                            <ExperienceCard className={'experience-card'} {...this.state.selectedExperience} />
                        </div>
                    </Fade>
                </StyledRow>
            </ThemeProvider>
        )
    }

}

export default LandingRowExperience;
