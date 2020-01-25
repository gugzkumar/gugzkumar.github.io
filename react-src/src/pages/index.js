/**
 *  This is the Landing Page
 */
import React from 'react';
import { Layout } from "../components/";

class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render () {

        return (
            <Layout location={this.props.location} title={'TEST'}>

            </Layout>
        )
    }

}

export default LandingPage;
