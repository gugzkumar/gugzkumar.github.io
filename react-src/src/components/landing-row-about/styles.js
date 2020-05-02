import styled from "styled-components";

export const StyledRow = styled.div`
    color: ${props => props.theme.foreground};
    background-color: ${props => props.theme.primaryAbout};
    height: calc(100% + 1px);
    width: 100%;
    margin: 0;
    /* display: flex; */
    display: ${props => (props.showRow ? 'flex' : 'none')};
    flex-direction: column;
    padding-top: 10%;
    /* justify-content: center; */
    text-align: left;
    padding-left: 8%;
    word-wrap: break-word;
    .about-caption {
        font-size: 56px;
        color: ${props => props.theme.secondaryAbout};
        font-family: "Itim";
        letter-spacing: 2px;
        /* font-size: 5vw; */
    }
    .about-intro {
        font-size: 44px;
        color: ${props => props.theme.secondaryAbout};
        font-family: "Itim";
        letter-spacing: 2px;
        /* font-size: 4vw; */
    }
    .about-name {
        font-size: 56px;
        font-family: "Itim";
        letter-spacing: 2px;
        /* font-size: 5vw; */
    }
    .about-description {
        margin-top: 16px;
        max-width: 700px;
        margin-right: 15%;
        /* background-color: ${props => props.theme.background}; */
        /* padding: 10px; */
        /* border-radius: 10px; */
        /* box-shadow: -1px 15px 30px -12px black; */
        /* font-size: 1.5vw; */
        color: ${props => props.theme.secondaryAbout};
        b {
            color: ${props => props.theme.foreground};
            a {
              color: #1f6ce6;
            }
        }
    }
    .about-button-row {
        margin-top: 24px;
    }
`

export const  StyledButton = styled.button`
    font-size: 24px;
    background-color: ${props => props.theme.background};
    border: none;
    border-radius: 10px;
    box-shadow: -1px 15px 30px -12px black;
    padding: 8px;
    margin-right: 16px;
    cursor: pointer;
    &:focus {
        background-color: ${props => props.theme.foreground};
        color: ${props => props.theme.background};
        box-shadow: -1px 5px 30px -5px black;
        outline: none;
    }
    &:active {
        background-color: ${props => props.theme.secondaryAbout};
    }
    svg {
        vertical-align: sub;
    }

`
