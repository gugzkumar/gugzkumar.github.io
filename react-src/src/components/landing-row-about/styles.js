import styled from "styled-components";

export const StyledRow = styled.div`
    color: ${props => props.theme.background};
    background-color: ${props => props.theme.foreground};
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
    .background {
        -webkit-user-select: none; /* Chrome/Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+ */

        /* Rules below not implemented in browsers yet */
        -o-user-select: none;
        user-select: none;
        position: absolute;
        margin-left: -5%;
        font-size: 10px;
        opacity: .3;
        top: 0;
        bottom: 0;
        overflow: hidden;
        .background-text-right {
            float: right;
            margin-top: 100px;
        }
        .background-text-left {
            float: left;
            margin-top: 100px;
        }
    }
    .about-caption {
        font-size: 56px;
        color: ${props => props.theme.background};
        font-family: "Itim";
        letter-spacing: 2px;
    }
    .about-intro {
        font-size: 44px;
        color: ${props => props.theme.background};
        font-family: "Itim";
        letter-spacing: 2px;
    }
    .about-name {
        font-size: 56px;
        font-family: "Itim";
        letter-spacing: 2px;
        color: ${props => props.theme.yellow};
    }
    .about-description {
        margin-top: 16px;
        max-width: 700px;
        margin-right: 15%;
        color: ${props => props.theme.background};
        b {
            color: ${props => props.theme.yellow};
            a {
              color: ${props => props.theme.yellow};
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
    background-color: ${props => props.theme.background};
    border: none;
    border-radius: 10px;
    padding: 8px;
    margin-right: 16px;
    cursor: pointer;
    &:focus {
        background-color: ${props => props.theme.registrationBlack};
        color: ${props => props.theme.background};
        box-shadow: -1px 5px 30px -5px black;
        outline: none;
    }
    &:active {
        background-color: ${props => props.theme.registrationBlack};
    }
    svg {
        vertical-align: sub;
    }

`
