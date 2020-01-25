import React from 'react';
import styles from "./header.module.css";

const menuItems = [
    { label: 'Skills' , link: '' },
    { label: 'Projects' , link: '' },
    { label: 'Experience' , link: '' },
    { label: 'Blogs' , link: '' }
]

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render () {
        return (
            <div className={styles.header}>
                <ul>
                    {menuItems.map(({ label, link }) => {
                        return <li key={label}>{label}</li>
                    })}
                </ul>
            </div>
        )
    }

}

export default Header;
