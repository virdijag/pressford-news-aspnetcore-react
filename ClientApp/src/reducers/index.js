import {combineReducers} from 'redux';
import articleReducers from './articleReducers';

const rootReducder = combineReducers({
    articles: articleReducers
})

export default rootReducder;