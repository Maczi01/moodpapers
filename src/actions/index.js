import axios from 'axios';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const addFavorite = (newFavorite) => {
    const prevLocalstorageState = JSON.parse(localStorage.getItem('favorites')) || [];
    localStorage.setItem('favorites', JSON.stringify([...prevLocalstorageState, newFavorite]));
    return {
        type: 'ADD_FAVORITE',
        payload: {newFavorite},
    };
};

export const removeFavorite = (id) => {
    const prevLocalstorageState = JSON.parse(localStorage.getItem('favorites')) || [];
    localStorage.setItem(
        'favorites',
        JSON.stringify(prevLocalstorageState.filter((item) => item.id !== id)),
    );

    return {
        type: 'REMOVE_FAVORITE',
        payload: {
            id,
        },
    };
};

export const fetchItems = (keywords) => (dispatch) => {
    dispatch({type: FETCH_REQUEST});
    return axios.get('https://api.unsplash.com/photos/random/', {
        params: {
            client_id: 'IAZAW_X0oAiauBtvVa5VEhYiCgSlcrfUYeXWaOIeaKs',
            count: 9,
            query: 'cat',
        },
        transformResponse: axios.defaults.transformResponse.concat((data) =>
            data.map(({id, urls, user}) => ({
                id,
                imageUrl: urls.regular,
                fullsizeUrl: urls.raw,
                autor: user.name,
                tags: keywords,
            })),
        ),
    })
        .then((data) => {
            dispatch({
                type: FETCH_SUCCESS,
                payload: data,
            });
        })
        .catch((err) => {
            console.error(err)
        });
};
