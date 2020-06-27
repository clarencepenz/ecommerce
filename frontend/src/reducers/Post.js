import {FETCH_POST } from '../actions/action-type'

const initialState ={
    post: {},
    posts: []
}

export const postReducer =(state = initialState, action)=>{
    switch(action.type){
        case FETCH_POST:
            return state
        default:
            return state
    }

}