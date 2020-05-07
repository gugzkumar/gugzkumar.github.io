import styled from "styled-components";

export const StyledRow = styled.div`
    color: ${props => props.theme.foreground};
    background: ${props => props.theme.primaryAccent};
    height: calc(100% + 1px);
    width: 100%;
    margin: 0;
    margin-bottom: -1px;
    display: flex;
    flex-direction: column;
    padding-top: calc(5% + 40px);
    text-align: left;
    padding-left: ${props => props.theme.spacing.leftPadding};
    padding-bottom: 2%;
    word-wrap: break-word;
    overflow: hidden;
    .about-caption {
        font-size: 56px;
        font-family: "Itim";
        letter-spacing: 2px;
    }
    .about-intro {
        font-size: 44px;
        font-family: "Itim";
        letter-spacing: 2px;
    }
    .about-name {
        font-size: 56px;
        font-family: "Itim";
        letter-spacing: 2px;
        color: ${props => props.theme.secondaryAccent};
    }
    .about-description {
        margin-top: 16px;
        max-width: 700px;
        margin-right: 15%;
        b {
            color: ${props => props.theme.secondaryAccent};
            a {
              color: ${props => props.theme.secondaryAccent};
            }
            a:hover {
              color: ${props => props.theme.lightYellow};;
            }
        }
    }
    .about-button-row {
        margin-top: 40px;
    }

    @media only screen and (max-width: ${props => props.theme.breakPoints.mobile}px) {
        .about-button-row {
            display: flex;
            flex-direction: column;
            button {
              margin-bottom: 16px;
            }
        }
    }
`

export const  StyledButton = styled.button`
    font-size: 24px;
    background-color: ${props => props.theme.cards};
    color: ${props => props.theme.foreground};
    border: none;
    border-radius: 10px;
    padding: 8px;
    margin-right: 16px;
    cursor: pointer;
    &:focus {
        background-color: ${props => props.theme.secondaryAccent};
        color: ${props => props.theme.primaryAccent};
        box-shadow: -1px 5px 30px -5px black;
        outline: none;
    }
    &:active {
        background-color: ${props => props.theme.secondaryAccent};
    }
    svg {
        vertical-align: sub;
    }
`

export const StyledWave = styled.svg`{
    path {
      fill: ${props => props.theme.primaryAccent};
    }
    background-color: ${props => props.theme.background};
}`
