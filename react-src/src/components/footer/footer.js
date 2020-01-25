import React from 'react';
import styles from "./footer.module.css";

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render () {
        return (
            <div className={styles.footer}>
                Hello!a
            </div>
        )
    }

}

export default Footer;
