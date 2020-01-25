import React from 'react';

class Logo extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render () {
        return (
            <div className='message-box'>
                Hello!
            </div>
        )
    }

}

export default Logo;
