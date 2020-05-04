import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledCard = styled.div`
    background-color: ${(props) => props.theme.background};
    border-radius: 15px;
    max-width: 680px;
    padding: 20px;
    box-sizing: border-box;
    /* box-shadow: -1px 15px 30px -12px black; */
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    flex-direction: column;
    text-align:left;
    h1, h2, h3 {
        margin: 0;
    }
    ul {
        padding: 0;
        margin-top: 8px;
    }
    li {
        display: inline;
        &::after {
            content: ", ";
        }
        &:last-child::after {
            content: "";
        }
    }
    &, .title-container, .content-container {
        display: flex;
    }
    .title-container {
        justify-content: space-between;
        align-items: base-line;
        margin-bottom: 40px;
        .title-experience-type, .title-experience-position {
            color: ${(props) => props.theme.foreground};
        }
    }
    .content-container {
        flex-direction: column;
    }
    .technology-column {
        margin-top: 16px;
    }
    .title-experience-right-column {
        align-self: flex-end;
    }


    @media only screen and (max-width: ${props => props.theme.breakPoints.mobile}px) {
        .title-container {
            flex-direction: column;
            margin-bottom: 16px;
        }
        .title-experience-right-column {
            align-self: flex-start;
            margin-top: 16px;
        }
    }
`


const ExperienceCard = (props) => (
    <StyledCard className={props.className}>
        <div className={'title-container'}>
            <div>
                <h1> {props.name} </h1>
                <b className={'title-experience-position'}> {props.position} </b>
            </div>
            <div className={'title-experience-right-column'}>
                <h3><i> {props.timeRange} </i></h3>
                <i className={'title-experience-type'}> {props.experienceType} </i>
            </div>
        </div>
        <div className={'content-container'}>
            <div className={'about-column'}> {props.about} </div>
            <div className={'technology-column'}>
                <h3> Languages </h3>
                <ul> {props.technologies.Languages.map((str) => <li key={str}> {str} </li>)} </ul>
                <h3> Techologies </h3>
                <ul> {props.technologies.Techologies.map((str) => <li key={str}> {str} </li>)} </ul>
            </div>
        </div>
    </StyledCard>
);

ExperienceCard.propTypes = {
    name: PropTypes.string.isRequired,
    timeRange: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    experienceType: PropTypes.string,
    technologies: PropTypes.shape({
        Languages: PropTypes.arrayOf(PropTypes.string),
        Techologies: PropTypes.arrayOf(PropTypes.string)
    })
}

export default ExperienceCard;
