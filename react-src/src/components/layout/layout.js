import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../../utils/typography"
import { Header, Footer } from "../"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const header = <Header/>;

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
        }}
      >
        <Header></Header>
        <main>{children}</main>
        <Footer>
          © Gagan Tunuguntla
        </Footer>
      </div>
    )
  }
}

export default Layout;
