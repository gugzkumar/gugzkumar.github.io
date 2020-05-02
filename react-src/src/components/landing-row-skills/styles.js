import theme from "../theme";
import styled, { ThemeProvider } from "styled-components";

export const StyledRow = styled.div`
    color: ${props => props.theme.foreground};
    background-color: ${props => props.theme.primarySkills};
    height: calc(100% + 1px);
    margin: 0;
    text-align: center;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;

    &.screen-desktop {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
    }
    &.screen-mobile {
        display: none;
    }

    @media only screen and (max-width: 769px) {
        &.screen-desktop {
            display: none;
        }
        &.screen-mobile {
            display: inherit;
        }
        .react-swipeable-view-container {
            height: calc(100% - 200px);
        }
        .react-reveal {
            padding: 1px;
            height: 100%;

        }
    }
`

export const SkillCard = styled.div`
    background-color: ${props => props.theme.background};
    width: 244px;
    height: 480px;
    margin: 12px 12px;
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

    @media only screen and (max-width: 1300px) {
        & {
            width: 182px;
            height: 360px;
        }
        svg {
            margin-top: 8px;
            margin-top: 8px;
            height: 120px;
            width: 120px;
        }
        h2 {
            font-size: 1.2em;
        }
        p {
            font-size: 12px;
        }
    }

    @media only screen and (max-width: 1300px) {
        & {
            width: 180px;
            height: 360px;
        }
        svg {
            margin-top: 8px;
            margin-top: 8px;
            height: 120px;
            width: 120px;
        }
        h2 {
            font-size: 1.2em;
        }
        p {
            font-size: 12px;
        }
    }

    @media only screen and (max-width: 769px) {
        & {
            width: calc(100% - 24px);
            height: calc(100% - 88px);
            margin: 52px 12px 12px 12px;
        }
        h2 {
            font-size: 3.5vh;
        }
        p {
            font-size: 4vw;
        }
        svg {
            height: 40%;
            width: 40%;
        }
    }

`
