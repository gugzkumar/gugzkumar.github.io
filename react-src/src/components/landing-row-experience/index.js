import React from 'react';
import theme from "../theme";
import styled, { ThemeProvider } from "styled-components";
import ExperienceCard from './ExperienceCard';

const StyledRow = styled.div`
    color: ${props => props.theme.foreground};
    background-color: ${props => props.theme.primaryExperience};
    height: 100%;
    width: 100%;
    margin: 0;
    text-align: center;
    display: flex;
    .experience-card {
        margin: auto;
        height: 70%;
        width: 70%;

    }
`

const experienceObject = [
    {
        name: 'Elephant Ventures',
        timeRange: '2017 - Current',
        experienceType: 'Proffesional',
        position: 'Software Engineer',
        about: `I currently work at Elephant Ventures. We're a boutique software consultancy that specializes in Venture Development through the agile Methodology. ` +
            `As a Software Engineer I've built many solutions for Green Field projects for a diversity of industries, including Healthcare, SupplyChain, ` +
            `Finance and even Cosmetics. Solutions have ranged from Web Applications, to ETL Pipelines, to Testing Frameworks, to even Machine Learning Models.`,
        technologies: {
            'Languages': ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS/SCSS', 'Bash', 'SQL/HiveQL' ],
            'Techologies': [ 'Angular', 'React', 'Flask',
                'Express', 'Docker', 'Kubernetes',
                'AWS', 'Terraform', 'CircleCI',
                'Jupyter Notebooks', 'SciKit Learn', 'Pandas/Numpy',
                'Postgres/MySQL'
            ]
        }
    },
    {
        name: 'Interpro Solutions',
        timeRange: '2015 - 2016',
        experienceType: 'Proffesional',
        position: 'Software Engineer',
        about: `InterPro Solutions is a leader in providing products and services that increases productivity for Maximo users. ` +
            `Maximo is an IBM Software for Enterprise Asset Management. As a software engineer I primarily acted as a developer ` +
            `for the company's award winning EZMaxMobile product. EZMaxMobile is a responsive Web Application that provides a company’s ` +
            `workforce the ability to view and use Maximo applications efficiently through their mobile devices, both online and offline. ` +
            `I designed, implemented and tested new features for EZMaxMobile. I also ` +
            `assisted individual clients in customizing the platform to confirm to their business requirements.`,
        technologies: {
            'Languages': ['Java', 'JavaScript', 'HTML', 'CSS', 'SQL' ],
            'Techologies': [ 'AngularJS', 'Struts 2', 'Spring MVC',
                'jQuery', 'Oracle DB', 'Microsoft SQL Server',
                'WebSphere', 'WebLogic', 'Maven'
            ]
        }
    }
]

class LandingRowExperience extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render () {
        return (
            <ThemeProvider theme={theme}>
                <StyledRow id={this.props.id}>
                    <ExperienceCard className={'experience-card'} {...experienceObject[1]} />
                </StyledRow>
            </ThemeProvider>
        )
    }

}

export default LandingRowExperience;
