import React from 'react';
import PropTypes from 'prop-types';
import './header.css'
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function header(props) {
    return (
        <div className="header">
            <p className="header__text">Here's the header | Friday, May 21, 2021</p>
        </div>
    );
}

export default header;