import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { FaGraduationCap, FaUserTie } from 'react-icons/fa';


const StyledDiv = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    height: 12px;
    background-color: ${(props) => props.theme.primaryAccent};
    box-shadow: -1px 15px 30px -12px black;
    border-radius: 20px;
    .timeline-button {
        box-sizing: content-box;
        align-items: center;
        background-color: ${(props) => props.theme.primaryAccent};
        color: ${(props) => props.theme.foreground};
        height: 18px;
        width: 18px;
        border-radius: 18px;
        padding: 4px;
        font-size: 16px;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
        cursor: pointer;
        &:hover {
            background-color: ${(props) => props.theme.foreground};
            color: ${(props) => props.theme.primaryAccent};
        }
        transition: .4s;
    }
    .timeline-button.selected {
        height: 28px;
        width: 28px;
        border-radius: 28px;
        font-size: 24px;
        padding: 8px;
        background-color: ${(props) => props.theme.foreground};
        color: ${(props) => props.theme.primaryAccent};
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
