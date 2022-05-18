import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component {

    render(){

        const { headerTitle } = this.props;

        return(
            <h1>{headerTitle}</h1>
        )
    }
}

Header.propTypes = {
    headerTitle: PropTypes.string.isRequired,
} 

export default Header;