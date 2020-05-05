/**
 *  This is the Landing Page
 */
import React from 'react';
import {
    Layout,
    LandingRowAbout,
    LandingRowSkills,
    LandingRowExperience,
    LandingRowPortfolio,
    SEO
} from "../components/";
import { navigate } from "gatsby";
import theme from "../components/theme";
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
  }
  .wrapper {
    padding-bottom: 0px;
  }
  hr {
  	height: 1px;
    width: 90%;
    margin-top: 32px;
  }
  hr {
      overflow: visible; /* For IE */
      border: none;
      height: 1px;
      background: radial-gradient(${props => props.theme.foreground}, ${props => props.theme.background});
      color: ${props => props.theme.foreground};
      text-align: center;
  }
`


class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        const { location, title, children } = this.props;
        const hashRoute = location.hash;
        if (hashRoute && hashRoute !== '') {
            navigate (`/${hashRoute}`);
        }
    }

    render () {
        return (
            <>
                <GlobalStyle theme={theme} />
                <SEO title="Software Engineer"/>
                <Layout location={this.props.location}>
                    <LandingRowAbout id="about" />
                    <LandingRowSkills id="skills" />
                    <div className="wrapper"><hr/></div>
                    <LandingRowExperience id="experience" />
                    <hr/>
                    <LandingRowPortfolio id="portfolio" />
                </Layout>
            </>
        )
    }

}

export default LandingPage;
