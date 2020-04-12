import axios from 'axios';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const fav = 'FAV';
const API_URL = 'https://api.unsplash.com/photos/random/';
const API_KEY = 'hu5CTMbpLUHq5f11bxjLsxsz1sm9g5QhbSV7eTue9k4'
let keyword = '';

const currentCondition = () => {
    return axios
        .get('https://api.weatherapi.com/v1/forecast.json?key=3f1ad206d1b94436825173623201101&q=paris')
        .then(res => (
                keyword = res.data.current.condition.text
            )
        )
        .catch(err => {
            console.log(err);
        })
};
currentCondition();

export const addToFavorites = (newFavorite) => {
    const prevLocalstorageState = JSON.parse(localStorage.getItem(fav)) || [];
    localStorage.setItem(fav, JSON.stringify([...prevLocalstorageState, newFavorite]));
    return {
        type: ADD_FAVORITE,
        payload: {newFavorite},
    };
};



export const removeFromFavorites = (id) => {
    const prevLocalstorageState = JSON.parse(localStorage.getItem(fav)) || [];
    localStorage.setItem(fav, JSON.stringify(prevLocalstorageState.filter((item) => item.id !== id)),
    );

    return {
        type: REMOVE_FAVORITE,
        payload: {
            id,
        },
    };
};

export const fetchItems = (keywords) => (dispatch) => {
    dispatch({type: FETCH_REQUEST});
    return axios.get('https://api.unsplash.com/photos/random/', {
        params: {
            // client_id: 'IAZAW_X0oAiauBtvVa5VEhYiCgSlcrfUYeXWaOIeaKs',
            client_id: 'hu5CTMbpLUHq5f11bxjLsxsz1sm9g5QhbSV7eTue9k4',
            count: 9,
            query: keyword,
        },
        transformResponse: axios.defaults.transformResponse.concat((data) =>
            data.map(({id, urls, user}) => ({
                id,
                imageUrl: urls.regular,
                fullsizeUrl: urls.raw,
                author: user.name,
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
