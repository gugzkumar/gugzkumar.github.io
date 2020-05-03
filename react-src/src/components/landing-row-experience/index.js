import React from 'react';
import theme from "../theme";
import styled, { ThemeProvider } from "styled-components";
import ExperienceCard from './ExperienceCard';
import TimeLineSelector from './TimeLineSelector';
import Fade from 'react-reveal/Fade';
import { StyledRow, StyledTitle } from './styles';

const experienceObject = [
    {
        name: 'Elephant Ventures',
        timeRange: 'Aug 2017 - Current',
        experienceType: 'Proffesional',
        position: 'Software Engineer',
        about: `I currently work at Elephant Ventures. We're a boutique software consultancy that specializes in Venture Development through the agile Methodology. ` +
            `As a Software Engineer I've built many solutions for Green Field projects for a diversity of industries, including Healthcare, SupplyChain, ` +
            `Finance and even Cosmetics. Solutions have ranged from Web Applications, to ETL Pipelines, to Testing Frameworks, to even Machine Learning Models.`,
        technologies: {
            'Languages': ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS/SCSS', 'Bash', 'SQL' ],
            'Techologies': [ 'Angular', 'React', 'Flask',
                'Express', 'Docker', 'Kubernetes',
                'AWS', 'Terraform', 'CircleCI',
                'Jupyter Notebooks', 'SciKit Learn', 'Pandas/Numpy',
                'Postgres/MySQL'
            ]
        }
    },
    {
        name: 'Recurse Center',
        timeRange: 'Jan 2017 to March 2017',
        experienceType: 'Education',
        position: 'Recurser',
        about: `InterPro Solutions is a leader in providing products and services that increases productivity for Maximo users. ` +
            `Maximo is an IBM Software for Enterprise Asset Management. As a software engineer I primarily acted as a developer ` +
            `for the company's award winning EZMaxMobile product. EZMaxMobile is a responsive Web Application that provides a company’s ` +
            `workforce the ability to view and use Maximo applications efficiently through their mobile devices, both online and offline. ` +
            `I designed, implemented and tested new features for EZMaxMobile. I also ` +
            `assisted individual clients in customizing the platform to confirm to their business requirements.`,
        technologies: {
            'Languages': ['JavaScript', 'Python', 'HTML', 'CSS/SCSS' ],
            'Techologies': [ 'React', 'Redux', 'Django', 'Pandas/Numpy', 'Jupyter Notebooks', 'SciKit Learn',]
        }
    },
    {
        name: 'Interpro Solutions',
        timeRange: 'Aug 2015 - Sept 2016',
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
    },
    {
        name: 'University of Maryland',
        timeRange: 'Sept 2011 - May 2015',
        experienceType: 'Education',
        position: 'B.S. Computer Science and Physics',
        about: `I studied at the University of Maryland, where I received a double degree in Physics and Computer Science. ` +
            `During my time their I was a research Assistant for the Astrophysics department. I performed Statistical Analysis ` +
            `and built software for IceCube, a Neutrino Detector in the South Pole. `,
        technologies: {
            'Languages': ['Python', 'C', 'SQL', 'MATLAB'],
            'Techologies': [ 'Jupyter Notebooks', 'Pandas/Numpy', 'Linux', 'MySQL', ]
        }
    },
]

class LandingRowExperience extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        experienceObject.map((experience) => {
            experience.onClick = () => {
                this.setState({selectedExperience: experience});
            };
        });
        this.state = {selectedExperience: experienceObject[0]};
    }

    render () {
        return (
            <ThemeProvider theme={theme}>
                <Fade>
                  <StyledTitle><i> My Education and Experience </i></StyledTitle>
                </Fade>
                <StyledRow id={this.props.id}>
                    <Fade>
                        <div className="experience-container">
                            <TimeLineSelector className={'timeline'} selectedExperience={this.state.selectedExperience} experiences={experienceObject}/>
                            <ExperienceCard className={'experience-card'} {...this.state.selectedExperience} />
                        </div>
                    </Fade>
                </StyledRow>
            </ThemeProvider>
        )
    }

}

export default LandingRowExperience;
