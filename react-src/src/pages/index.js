/**
 *  This is the Landing Page
 */
import React from 'react';
import {
    Layout,
    LandingRowAbout,
    LandingRowSkills,
    LandingRowExperience,
    SEO
} from "../components/";

class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render () {
        return (
            <>
                <SEO title="Software Engineer"/>
                <Layout location={this.props.location}>
                    <LandingRowAbout id="about" />
                    <LandingRowSkills id="skills" />
                    <LandingRowExperience id="experience" />
                </Layout>
            </>
        )
    }

}

export default LandingPage;
