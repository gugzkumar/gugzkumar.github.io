/**
 *  This is the Landing Page
 */
import React from 'react';
import {
    Layout,
    LandingRowAbout,
    LandingRowSkills,
    LandingRowExperience
} from "../components/";

class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render () {

        return (
            <Layout location={this.props.location} title={'TEST'}>
                <LandingRowAbout id="about" />
                <LandingRowSkills id="skills" />
                <LandingRowExperience id="experience" />
            </Layout>
        )
    }

}

export default LandingPage;
