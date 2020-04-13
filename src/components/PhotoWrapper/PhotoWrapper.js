import React from 'react';
import styled, {css} from 'styled-components';
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import fav from '../../assets/fav.png'
import remove from '../../assets/remove.png'
import fullscreen from '../../assets/fullscreen.png'
import {addToFavorites, removeFromFavorites} from "../../actions";

const Wrapper = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
  border-radius: 15px;
  border: 3px solid gray;
  overflow: hidden;
  background-image: ${({imageUrl}) => imageUrl && css`url('${imageUrl}')`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  &:hover {
    border: 3px black solid;
  }
`;
const AuthorBar = styled.div`
  position: absolute;
  top: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100vw;
  height: 30px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: ${({theme}) => theme.white};
  color: ${({theme}) => theme.black};
  padding: 10px 10px;
`;
const ButtonsWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  left: 10px;
  bottom: 10px;
`;
const PhotoWrapper = ({card, favorites, addToFavorites, removeFromFavorites}) => {
    const {id, imageUrl, author, fullsizeUrl} = card;
    const isFavorite = favorites.some((item) => item.id === id);
    return (
        <Wrapper imageUrl={imageUrl}>
            <ButtonsWrapper>
                <ButtonIcon icon={fullscreen} onClick={() => window.open(fullsizeUrl, '_blank')}/>
                {isFavorite ? <ButtonIcon icon={remove}
                                          onClick={() => {
                                              if (window.confirm('Remove?')) {
                                                  removeFromFavorites(id)
                                              }
                                          }}/> : <ButtonIcon
                    onClick={() => addToFavorites(card)}
                    icon={fav}/>}
            </ButtonsWrapper>
            <AuthorBar>{author}</AuthorBar>
        </Wrapper>
    )
}

PhotoWrapper.propTypes = {
    card: PropTypes.objectOf(
        PropTypes.shape({
            id: PropTypes.string,
            imageUrl: PropTypes.string,
            fullsizeUrl: PropTypes.string,
            author: PropTypes.string,
        }),
    ).isRequired,
    favorites: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            imageUrl: PropTypes.string,
            fullsizeUrl: PropTypes.string,
            author: PropTypes.string,
        }),
    ),
    addToFavorites: PropTypes.func.isRequired,
    removeFromFavorites: PropTypes.func.isRequired,
};

PhotoWrapper.defaultProps = {
    favorites: [],
};

const mapStateToProps = state => {
    const {favorites} = state;
    return {favorites};
};

const mapDispatchToProps = (dispatch) => ({
    addToFavorites: (image) => dispatch(addToFavorites(image)),
    removeFromFavorites: (imageUrl) => dispatch(removeFromFavorites(imageUrl)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoWrapper);