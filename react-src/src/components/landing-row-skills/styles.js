import styled from "styled-components";

export const StyledRow = styled.div`
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
export const StyledTitle = styled.h1`
    margin: 0px;
    padding-top: 45px;
    margin-bottom: 32px;
    width: 100%;
    text-align: center;
`

export const SkillCard = styled.div`
    background-color: ${props => props.theme.cards};
    width: 244px;
    height: 480px;
    margin: 12px 12px;
    padding: 1px;
    border-radius: 10px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    svg {
        margin-top: 16px;
        margin-top: 16px;
        height: 160px;
        width: 160px;
        padding: 15px;
        border-radius: 15px;
        fill: ${props => props.theme[props.themeColor]};
    }
    h2 {
        margin: 16px 0px;
    }
    p {
        margin: 0px 10px;
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
            margin: 12px 12px 12px;
            padding-bottom: 24px;
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
