import { combineReducers } from 'redux'
import { postReducer } from './Post'


export const rootReducer = combineReducers({
    posts: postReducer
})