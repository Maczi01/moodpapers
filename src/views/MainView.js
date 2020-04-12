import React from 'react'
import PhotoWrapper from "../components/PhotoWrapper/PhotoWrapper";
import GridTemplate from "../templates/GridTemplate";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const MainView = ({wallpapers}) => (
    <GridTemplate cards={wallpapers}/>
)

MainView.propTypes = {
    wallpapers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            imageUrl: PropTypes.string,
            fullsizeUrl: PropTypes.string,
            author: PropTypes.string,
            tags: PropTypes.array,
        }),
    ),
};

MainView.defaultProps = {
    wallpapers: [],
};

const mapStateToProps = ({wallpapers}) => ({wallpapers});

export default connect(mapStateToProps)(MainView);