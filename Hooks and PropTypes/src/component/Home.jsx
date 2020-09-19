
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Home extends Component {
    render() {
        return (
            <div>
                <h2>Hello Everyone</h2>
            </div>
        )
    }
}

Home.propTypes ={
    name: PropTypes.string,
    age: PropTypes.number,
    calAge: PropTypes.func
};

export default Home
