import styled from "styled-components";

export const StyledRow = styled.div`
    color: ${props => props.theme.registrationBlack};
    background-color: ${props => props.theme.background};
    height: calc(100% + 1px);
    width: 100%;
    margin: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .experience-container{
        height: 70%;
        margin: 12px;
        max-width: 680px;
    }
    .timeline {
        margin-bottom: 24px;
    }
    padding-bottom: 5%;
`

export const StyledTitle = styled.h1`
    padding-top: 5%;
    margin-bottom: 32px;
    width: 100%;
    text-align: center;
    color: ${props => props.theme.foreground};
`
