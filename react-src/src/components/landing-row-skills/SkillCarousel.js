import React from "react";
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from "styled-components";
import { FaGraduationCap, FaUserTie } from 'react-icons/fa';


const StyledDiv = styled.div`
  overflow-y: visible;
`


const SkillCarousel = (props) => (
    <StyledDiv className={props.className}>
        {
            props.skills.map((skill) => (
                <div className={'skill-carousel-logo'}>
                    <img src={skill.skillLogoUrl}/>
                </div>
            )
        }
    </StyledDiv>
);

SkillShape = PropTypes.shapeOf(
    {
        skillName: PropTypes.string,
        skillLink: PropTypes.string,
        skillLogoUrl: PropTypes.string,
    }
)


SkillCarousel.propTypes = {
    skills: PropTypes.arrayOf(SkillShape)
}

export default SkillCarousel;
