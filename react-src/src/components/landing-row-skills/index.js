import React from 'react';
import theme from "../theme";
import styled, { ThemeProvider } from "styled-components";
import Pulse from 'react-reveal/Pulse';
// import { DataEngineeringSVG } from '../../images/skills-data-engineering.svg';
import DataEngineeringSVG from './DataEngineeringSVG';
import DevOpsSVG from './DevOpsSVG';
import WebDevelopmentSVG from './WebDevelopmentSVG';
import LeadershipSVG from './LeadershipSVG';

const StyledRow = styled.div`
    color: ${props => props.theme.foreground};
    background-color: ${props => props.theme.primarySkills};
    height:100%;
    margin: 0;
    text-align: center;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
`

const SkillCard = styled.div`
    background-color: ${props => props.theme.background};
    width: 244px;
    height: 480px;
    margin: 10px 10px;
    padding: 1px;
    border-radius: 10px;
    box-shadow: -1px 15px 30px -12px black;
    svg {
        margin-top: 16px;
        margin-top: 16px;
        height: 160px;
        width: 160px;
        background-color: white;
        padding: 15px;
        border-radius: 15px;
        fill: ${props => props.theme.secondarySkills};
    }
    h2 {
        margin: 16px 0px;
    }
    p {
        margin: 0px 10px;
    }
`

class LandingRowSkills extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render () {
        return (
            <ThemeProvider theme={theme}>
                <StyledRow id={this.props.id}>
                    <Pulse>
                        <SkillCard>
                            <h2> Web Development </h2>
                            <WebDevelopmentSVG />
                            <p> Creating robust web apps to UX and Bussiness Requirements. Frontend, Backend, Database; I build across the entire stack. </p>
                        </SkillCard>
                    </Pulse>
                    <Pulse>
                        <SkillCard>
                            <h2> DevOps </h2>
                            <DevOpsSVG />
                            <p> Securing the Integrity of the Development Process and Software Environments through Automating Infrastructure Provisioning and implementing Continous Integration and Deployment. </p>
                        </SkillCard>
                    </Pulse>
                    <Pulse>
                        <SkillCard>
                            <h2> Data Engineering </h2>
                            <DataEngineeringSVG />
                            <p> Building fault tolerant ETL pipelines for batch processing and data synchronization across services and databases. </p>
                        </SkillCard>
                    </Pulse>
                    <Pulse>
                        <SkillCard>
                            <h2> Leadership </h2>
                            <LeadershipSVG />
                            <p> I am a PSM 1 certified Scrum Master from Scrum.org. I've led agile teams as an Architect, Technical Lead and Scrum Master. </p>
                        </SkillCard>
                    </Pulse>
                </StyledRow>
            </ThemeProvider>
        )
    }

}

export default LandingRowSkills;
