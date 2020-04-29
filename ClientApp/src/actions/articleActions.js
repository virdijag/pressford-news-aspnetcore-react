import axios from 'axios';

export const GET_ALL_ARTICLES_REQUEST = 'GET_ALL_ARTICLES_REQUEST';
export const GET_ALL_ARTICLES_SUCCESS = 'GET_ALL_ARTICLES_SUCCESS';
export const GET_ALL_ARTICLES_ERROR = 'GET_ALL_ARTICLES_ERROR';

const getArticlesSuccess = payload => ({
    type: GET_ALL_ARTICLES_SUCCESS,
    payload
});

const getArticlesError = payload => ({
    type: GET_ALL_ARTICLES_ERROR,
    payload
});

export const getAllArticles = () => dispatch => {
    dispatch({ type: GET_ALL_ARTICLES_REQUEST });

    return axios.get('api/Articles/GetArticles').then(result => {
        const response = result.data;
        dispatch(getArticlesSuccess(response));
    }).catch(error => {
        dispatch(getArticlesError("Application Error!"));
        return Promise.reject({});
    })
}