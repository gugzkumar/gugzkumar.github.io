import styled, { css } from "styled-components";

export const StyledHeader = styled.div`
    color: ${props => props.theme.background};
    background-color: ${props => props.theme.foreground};
    display: flex;
    justify-content: space-between;
    z-index: 10;
    box-shadow: -1px 15px 30px -12px black;
    ul {
      display: flex;
      padding: 0;
      margin: 0;
      text-align: center;
      text-transform: Uppercase;
      text-orientation: lr;
    }
    .social-media-container {
        font-size: 40px;
        display: flex;
        justify-content: space-between !important;
        margin: 52px 24px;
    }
    .profile-pic {
        align-self: center;
    }


    &, ul {
        flex-direction: row;
    }
    .social-media-container {
        font-size: 24px;
        margin: 0px 24px;
        align-self: center;
        svg {
            margin-left: 12px;
        }
    }

    @media only screen and (max-width: ${props => props.theme.breakPoints.mobile}px) {
        .social-media-container {
            margin: 0px 0px;
        }
    }
`

export const StyledLinkContainer = styled.div`
    cursor: pointer;
    width: calc(100% + 1px);
    a {
        display: block;
        text-decoration: none;
        color: inherit;
    }
    li {
        font-size: 16px;
        display: inline-block;
        margin: 20px 16px;
        padding: 8px;
        transform-origin: 0 0;
    }
    &:hover {
        li {
            text-decoration: underline;
        }
    }
    li {
        font-size: 12px;
        padding: 0px;
        margin: 12px 8px;
    }
`
