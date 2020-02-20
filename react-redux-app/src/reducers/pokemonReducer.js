import { 
    FETCH_DATA, 
    UPDATE_TEAM, 
    CLEAR_TEAM, 
    ADD_NICKNAME, 
    TOGGLE_EDIT_NICKNAME,
    SET_ERROR 
} from '../actions';

const initialState = {
    team: [],
    teamSize: 0,
    isFetchingData: false,
    error: '',
    isEditingNickname: -1
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
        case ADD_NICKNAME:
            return {
                ...state,
                
                team: state.team.map( (item, key) => key === action.payload.key ? {...state.team[key], nickname: action.payload.nickname} : {...state.team[key]} ),
                isEditingNickname: -1
            }
        case TOGGLE_EDIT_NICKNAME:
            console.log(action.payload)
            return {
                ...state,
                isEditingNickname: action.payload
            }
        default:
            return state;
    }
};