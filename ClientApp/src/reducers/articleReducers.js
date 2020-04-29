import {
    GET_ALL_ARTICLES_REQUEST,
    GET_ALL_ARTICLES_SUCCESS,
    GET_ALL_ARTICLES_ERROR
} from '../actions/articleActions';

const INITIAL_STATE = {
    loading: false,
    hasError: false,
    error: null,
    data: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_ARTICLES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_ALL_ARTICLES_SUCCESS:
            return {
                ...state,
                loading: false,
                hasError: false,
                data: action.payload
            };
        case GET_ALL_ARTICLES_ERROR:
            return {
                ...state,
                loading: false,
                hasError: true,
                error: action.payload
            };
        default:
            return state;
    }
}