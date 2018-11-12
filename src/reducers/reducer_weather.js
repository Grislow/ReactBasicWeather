import { FETCH_WEATHER } from "../actions/index";

//initial state is an array since we will be storing dat aon various stays and for multiple days
export default function(state = [], action) {
    
    switch(action.type) {
        //never manipulate state directly: dont "state.push(action.payload.data)"
        //concat() joins array with data and returns new array
        case FETCH_WEATHER: 
            //return state.concat([action.payload.data]); -> works
            return [action.payload.data, ...state ];    //better, more concise way of doing it using ES6 syntax
    }

    return state;
}