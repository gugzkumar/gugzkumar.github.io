import React from "react"
import {Helmet} from "react-helmet";
import styled, { ThemeProvider } from "styled-components";
// import { Link } from "gatsby"
import { Header, Footer } from "../";
import { getTheme } from "../theme";

if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]', {
	     speed: 900
    });
}

const StyledLayout = styled.div`
    &,.app-content,.app-navbar,main {
        /* height: 100%; */
    }
    .app-navbar {
        position: fixed;
        width: 156px;
    }
    .app-content {
        margin-left: 0px;
    }
    .app-navbar {
        width: 100%;
        height: 40px;
        position: fixed;
        top: -1px;
    }

`

class Layout extends React.Component {
  render() {
    // const { location, title, children } = this.props;
    // const rootPath = `${__PATH_PREFIX__}/`;
    const { children } = this.props;

    return (
        <ThemeProvider theme={getTheme('')}>
            <Helmet>
                <link href="https://fonts.googleapis.com/css?family=Orbitron:400,500,600,700,800,900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Itim&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap" rel="stylesheet" />
            </Helmet>
            <StyledLayout
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              fontFamily: "Nunito"
            }}
            >
                <Header className="app-navbar" location={this.props.location}></Header>
                <div className="app-content">
                    <main>{children}</main>
                </div>
                <Footer/>
            </StyledLayout>
        </ThemeProvider>
    )
  }
}

export default Layout;
