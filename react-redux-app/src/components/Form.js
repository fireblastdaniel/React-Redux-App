import React, { useState } from 'react';
import {connect} from 'react-redux';

import { getData } from '../actions';
import kantoPokemon from '../data/data';

const Form = props => {
    const [activePokemon, setActivePokemon] = useState('')
    console.log(activePokemon)

    return (
        <div>
            <form>
                <select onChange={ e => { setActivePokemon(e.target.value) } }>
                    <option disabled selected value> -- Select a Pokemon -- </option>
                    {kantoPokemon.map( (item, dex) => <option value={item} key={dex}>{item}</option>)}
                </select>
                <input type='submit' value='Add to Team'/>
                <input type='button' value='Clear Team' />
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
};

export default connect(
    mapStateToProps,
    { getData }
) (Form);