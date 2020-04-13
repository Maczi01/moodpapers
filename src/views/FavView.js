import React from 'react'
import GridTemplate from "../templates/GridTemplate";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const FavView = ({ favorites }) => <GridTemplate cards={favorites} />;

const mapStateToProps = ({ favorites }) => {
    return { favorites };
};

FavView.propTypes = {
    favorites: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            imageUrl: PropTypes.string,
            fullsizeUrl: PropTypes.string,
            autor: PropTypes.string,
            tags: PropTypes.array,
        }),
    ),
};

FavView.defaultProps = {
    favorites: [],
};

export default connect(mapStateToProps)(FavView);