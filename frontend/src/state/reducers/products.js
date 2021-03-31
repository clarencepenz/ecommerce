import {FETCH_PRODUCTS } from '../actions/action-type'

const initialState ={
    product: {},
    products: []
}

export const productReducer =(state = initialState, action)=>{
    switch(action.type){
        case FETCH_PRODUCTS:
            return state
        default:
            return state
    }

}