import React, { useState } from 'react';
import {connect} from 'react-redux';

import { getData, clearTeam } from '../actions';
import kantoPokemon from '../data/data';

const Form = props => {
    const [activePokemon, setActivePokemon] = useState('')

    const handleGetData = e => {
        if(props.teamSize < 6){
            e.preventDefault();
            props.getData(activePokemon);
        } else {
            //set warning of full team
        }
    }

    return (
        <div>
            <form>
                <select onChange={ e => { setActivePokemon(e.target.value) } }>
                    <option disabled selected value> -- Select a Pokemon -- </option>
                    {kantoPokemon.map( (item, dex) => <option value={item} key={dex}>{item}</option>)}
                </select>
                <input type='submit' onClick={handleGetData} value='Add to Team'/>
                <input type='button' onClick={clearTeam} value='Clear Team' />
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData,
        teamSize: state.teamSize
    };
};

export default connect(
    mapStateToProps,
    { getData, clearTeam }
) (Form);