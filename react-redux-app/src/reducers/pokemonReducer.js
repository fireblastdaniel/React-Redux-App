import { FETCH_DATA, UPDATE_TEAM, CLEAR_TEAM, SET_ERROR } from '../actions';

const initialState = {
    team: [],
    teamSize: 0,
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
                teamSize: state.teamSize+1,
                isFetchingData: false
            };
        // case REMOVE_POKEMON:
        //     return {
        //         ...state
        //         //add team - 1 here
        //     }
        case CLEAR_TEAM:
            return {
                ...state,
                team: [],
                teamSize: 0
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