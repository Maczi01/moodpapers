import React from 'react';
import styled, {css} from 'styled-components';
import {useLocation} from 'react-router-dom';
import IcoButton from "../IcoButton/IcoButton";
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

const Wrapper = styled.button`
  position: relative;
  height: 280px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background-image: ${({imageUrl}) => imageUrl && css`url('${imageUrl}')`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
const BottomBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.6);
  color: ${({theme}) => theme.white};
  padding: 5px 10px;
`;
const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100px;
  justify-content: space-around;
  right: 10px;
  top: 10px;
`;

const PhotoWrapper = ({card}) => {
    const {id, imageUrl, autor, tags, fullsizeUrl} = card;
    const location = useLocation();
    return (
        <Wrapper imageUrl={imageUrl}>
            <ButtonWrapper>
                <IcoButton/>
                <IcoButton/>
            </ButtonWrapper>
            <BottomBar>autor</BottomBar>
        </Wrapper>
    )
}

PhotoWrapper.propTypes = {
    card: PropTypes.objectOf(
        PropTypes.shape({
            id: PropTypes.string,
            imageUrl: PropTypes.string,
            fullsizeUrl: PropTypes.string,
            autor: PropTypes.string,
            tags: PropTypes.array,
        }),
    ).isRequired,
    favorites: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            imageUrl: PropTypes.string,
            fullsizeUrl: PropTypes.string,
            autor: PropTypes.string,
            tags: PropTypes.array,
        }),
    ),
    // addFavorite: PropTypes.func.isRequired,
    // removeFavorite: PropTypes.func.isRequired,
};

PhotoWrapper.defaultProps = {
    favorites: [],
};

const mapStateToProps = ({ favorites }) => ({ favorites });
const mapDispatchToProps = (dispatch) => ({
    // addFavorite: (newFavorite) => dispatch(addToFavorites(newFavorite)),
    // removeFavorite: (imageUrl) => dispatch(removeFromFavorites(imageUrl)),
});

export default connect(mapStateToProps)(PhotoWrapper);