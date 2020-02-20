import { FETCH_DATA, UPDATE_TEAM, CLEAR_TEAM, SET_ERROR } from '../actions';

const initialState = {
    team: [],
    isFetchingData: false,
    error: ''
};

export const pokemonReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
            };
        case UPDATE_TEAM:
            return {
                ...state,
                team: [...state.team, action.payload],
                isFetchingData: false
            };
        case CLEAR_TEAM:
            return {
                ...state,
                team: []
            };
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            };
        default:
            return state;
    }
};