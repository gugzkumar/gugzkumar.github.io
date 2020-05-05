import styled from "styled-components";

export const StyledRow = styled.div`
    color: ${props => props.theme.registrationBlack};
    background-color: ${props => props.theme.background};
    margin: 0;
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
    align-items: center;
    padding: 1px;
    margin-right: 12px;
    margin-left: 12px;

    @media only screen and (max-width: ${props => props.theme.breakPoints.mobile}px) {
    }
`

export const StyledTitle = styled.h1`
    margin: 0px;
    padding-top: 45px;
    margin-bottom: 32px;
    width: 100%;
    text-align: center;
    color: ${props => props.theme.foreground};
`

export const StyledProjectContainer = styled.div`
    flex-direction: ${props => props.className === 'left' ? 'row' : 'row-reverse'};
    width: 719px;
    margin-bottom: 32px;
    display: flex;
    .portfolio-project-monitor {
        width: 360px;
        margin-right: ${props => props.className === 'left' ? '16px' : ''};
    }
    @media only screen and (max-width: ${props => props.theme.breakPoints.mobile}px) {
        flex-direction: column;
        width: 100%;
        .portfolio-project-monitor {
            width: 100%;
            margin: 0;
        }
    }
    @media only screen and (min-width: ${props => props.theme.breakPoints.desktop}px) {
        width: 1200px;
        .portfolio-project-monitor {
            width: 600px;
        }
    }
`

export const StyledProjectDescription = styled.div`
    justify-self: 'flex-start';
    flex-grow: 1;
    h1, h2 {
      margin: 0px;
    }
`
