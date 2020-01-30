import React from "react";
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from "styled-components";
import { FaGraduationCap, FaUserTie } from 'react-icons/fa';


const StyledDiv = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    height: 12px;
    background-color: ${(props) => props.theme.background};
    box-shadow: -1px 15px 30px -12px black;
    border-radius: 20px;
    .timeline-button {
        align-items: center;
        background-color: ${(props) => props.theme.foreground};
        color: ${(props) => props.theme.background};
        height: 18px;
        width: 18px;
        border-radius: 18px;
        padding: 4px;
        font-size: 16px;
        box-shadow: -1px 15px 30px -12px black;
        cursor: pointer;
        &:hover {
            background-color: ${(props) => props.theme.background};
            color: ${(props) => props.theme.secondaryExperience};
        }
        transition: .4s;
    }
    .timeline-button.selected {
        height: 28px;
        width: 28px;
        border-radius: 28px;
        font-size: 24px;
        padding: 8px;
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.secondaryExperience};
    }
`


const TimeLineSelector = (props) => (
    <StyledDiv className={props.className}>
        {
            props.experiences.map((experience) => (
                <div
                    key={experience.name}
                    className={`timeline-button ${ experience.name === props.selectedExperience.name ? 'selected' : ''}` }
                    onClick={experience.onClick}
                    >
                    {
                        experience.experienceType === 'Proffesional' ?
                        <FaUserTie /> :
                        <FaGraduationCap />
                    }
                </div>))
        }
    </StyledDiv>
);

const ExperienceShape = PropTypes.shape(
    {
        name: PropTypes.string.isRequired,
        timeRange: PropTypes.string.isRequired,
        about: PropTypes.string.isRequired,
        experienceType: PropTypes.string,
        technologies: PropTypes.shape({
            Languages: PropTypes.arrayOf(PropTypes.string),
            Techologies: PropTypes.arrayOf(PropTypes.string)
        })
    }
);

TimeLineSelector.propTypes = {
    experiences: PropTypes.arrayOf(ExperienceShape)
}

export default TimeLineSelector;
