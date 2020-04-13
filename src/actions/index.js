import axios from 'axios';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const fav = 'FAV';
const API_URL = 'https://api.unsplash.com/photos/random/';
const API_KEY = 'hu5CTMbpLUHq5f11bxjLsxsz1sm9g5QhbSV7eTue9k4'

export const addToFavorites = (image) => {
    const localStorageState = JSON.parse(localStorage.getItem(fav)) || [];
    localStorage.setItem(fav, JSON.stringify([...localStorageState, image]));
    return {
        type: ADD_FAVORITE,
        payload: {image},
    };
};

export const removeFromFavorites = (id) => {
    const localStorageState = JSON.parse(localStorage.getItem(fav)) || [];
    localStorage.setItem(fav, JSON.stringify(localStorageState.filter((item) => item.id !== id)),
    );
    return {
        type: REMOVE_FAVORITE,
        payload: {
            id,
        },
    };
};

export const fetchItems = () => (dispatch) => {
    dispatch({type: FETCH_REQUEST});
    return axios.get(API_URL, {
        params: {
            client_id: API_KEY,
            count: 12,
            query: getDayPart(new Date()),
        },
        transformResponse: axios.defaults.transformResponse.concat((data) =>
            data.map(({id, urls, user}) => ({
                id: id.toString(),
                imageUrl: urls.regular,
                fullsizeUrl: urls.raw,
                author: user.name,
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

export const getDayPart = (Date) => {
    const currentHour = Date.getHours();
    if (currentHour >= 5 && currentHour < 12) return 'morning';
    if (currentHour >= 12 && currentHour < 18) return 'afternoon';
    if (currentHour >= 18 && currentHour < 21) return 'evening';
    return 'night';
};
