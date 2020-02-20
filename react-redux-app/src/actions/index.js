import axios from 'axios'

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_TEAM = 'UPDATE_TEAM';
export const CLEAR_TEAM = 'CLEAR_TEAM';
export const SET_ERROR = 'SET_ERROR';

export const getData = pokemonName => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
        .then(res => {
            console.log(res)
            dispatch({ type: UPDATE_TEAM, payload: res.data });
        })
        .catch(error => {
            console.error('error fetching data from api, error: ', error);
            dispatch({ type: SET_ERROR, payload: 'Error fetching data from api' });
        });
};

export const clearTeam = () => dispatch => {
    dispatch({ type: CLEAR_TEAM });
}