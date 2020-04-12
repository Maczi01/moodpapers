import React from 'react';
import styled, {css} from 'styled-components';
import {useLocation} from 'react-router-dom';
import IcoButton from "../IcoButton/IcoButton";
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import fav from '../../assets/fav.png'
import remove from '../../assets/remove.png'
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
  //width: 100px;
  justify-content: space-around;
  left: 10px;
  bottom: 10px;
`;
const Tags = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.6);
  color: ${({theme}) => theme.black};
  border-radius: 10px;
  padding: 5px 10px;
`;
const PhotoWrapper = ({card, favorites}) => {
    const {id, imageUrl, author, tags, fullsizeUrl} = card;
    const isFavorite = favorites.some((item) => item.id === id);
    return (
        <Wrapper imageUrl={imageUrl}>

            <ButtonsWrapper>
                <IcoButton icon={fav}
                           onClick={() => {
                               if (isFavorite) {
                                   if (window.confirm('Are you sure?')) removeFromFavorites(id);
                               } else addToFavorites(card);
                           }}
                />
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
    addToFavorites: PropTypes.func.isRequired,
    removeFromFavorites: PropTypes.func.isRequired,
};

PhotoWrapper.defaultProps = {
    favorites: [],
};

const mapStateToProps = ({favorites}) => ({favorites});

const mapDispatchToProps = (dispatch) => ({
    addToFavorites: (newFavorite) => dispatch(addToFavorites(newFavorite)),
    removeFromFavorites: (imageUrl) => dispatch(removeFromFavorites(imageUrl)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoWrapper);