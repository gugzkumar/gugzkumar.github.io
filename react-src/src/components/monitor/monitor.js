
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import styled from "styled-components";

export const StyledMonitor = styled.div`
  * {
    box-sizing: border-box;
    tex-align: center;
  }
  .container {
    margin: 0px auto;
    /* position: relative; */
  }

  img {
    height: 100%;
    width: 100%;
  }

  .container > .screen {
    position: relative;
    background: none;
    border: 20px solid #474e5d;
    border-radius: 10px;
  }

  .monitor:before,
  .monitor:after {
     content: "";
     position: absolute;
   }

  .monitor:before {
    top: -10px;
    margin: -3px 0 0 -3px;
    width: 6px;
    height: 6px;
    border-radius: 6px;
    background: #a5adbd;
    left: 50%;
  }

  .screen:after {
    width: 8px;
    height: 8px;
    border-radius: 8px;
    bottom: -10px;
    margin: 0 0 -4px -4px;
    background: #e8ebf0;
    left: 50%;
  }

  .content {
    left: 50%;
    overflow: hidden;
  }
`

class Monitor extends React.Component {

    static propTypes = {
        imgSrc: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {  }
    }

    render () {
        return (
          <StyledMonitor className={this.props.className}>
              <div class="container">
                  <div class="screen monitor">
                      <div class="content">
                          <img src={this.props.imgSrc}/>
                      </div>
                  </div>
              </div>
          </StyledMonitor>
        )
    }

}

export default Monitor;
