import { ADD_TO_CART } from '../constants'

const initialState = {
    cartItem:[]
}
export default function CartItems(state=initialState, action){
    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
                cartItem: action.data
            }
            break;
        default :
        return state
    }
}