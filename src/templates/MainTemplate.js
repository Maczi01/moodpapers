import React, {useEffect} from 'react'
import {ThemeProvider} from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import {theme} from "../theme/mainTheme";
import {connect} from 'react-redux'
import {fetchItems} from '../actions/index';
import PropTypes from 'prop-types';

function MainTemplate({children, fetchWallpapers}) {
    const keywords = 'cat';


    useEffect(() => {
        fetchWallpapers(keywords);
    }, []);


    return (
        <div>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <>
                    {children}
                </>
            </ThemeProvider>
        </div>
    )
};

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired,
    fetchWallpapers: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    fetchWallpapers: (keywords) => dispatch(fetchItems(keywords)),
});
export default connect(null, mapDispatchToProps)(MainTemplate);
