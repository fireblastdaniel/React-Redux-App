import React, { useState } from 'react';
import { connect } from 'react-redux';
import { formatString, capitalize } from '../actions/utilities'

import { toggleEditNickname, addNickname } from '../actions';

const TeamCard = props => {
    const [nickname, setNickname] = useState('')

    const handleNicknameChange = e => {
        setNickname(e.target.value)
    }
    return (
        <div className='team-card'>
            <img src={props.pokemon.sprites.front_default} alt={props.pokemon.species.name}/>
            <table>
                <tr>
                    <td className='nickname-toggle' onClick={() => props.toggleEditNickname(props.posn)} >Nickname:</td>
                    <td>{props.isEditingNickname === props.posn ? 
                            <form> <input className='nickname' type='text' onChange={handleNicknameChange}/><input className='nickname-btn' value={'\u2713'} onClick={() => props.addNickname(nickname, props.posn)} type='button'/> </form> :
                            props.pokemon.nickname ? props.pokemon.nickname : capitalize(props.pokemon.species.name)
                        }</td>
                </tr>
                <tr>
                    <td>Ability:</td>
                    <td>{formatString(props.pokemon.abilities[0].ability.name)}</td>
                </tr>
                <tr>
                    <td>Moves:</td>
                    <td>
                        <p>{props.pokemon.moves[0] ? formatString(props.pokemon.moves[0].move.name) : '[none]'}</p>
                        <p>{props.pokemon.moves[1] ? formatString(props.pokemon.moves[1].move.name) : '[none]'}</p>
                        <p>{props.pokemon.moves[2] ? formatString(props.pokemon.moves[2].move.name) : '[none]'}</p>
                        <p>{props.pokemon.moves[3] ? formatString(props.pokemon.moves[3].move.name) : '[none]'}</p>
                    </td>
                </tr>
            </table>

        </div>
    );
}

const mapStateToProps = state => {
    return {
        isEditingNickname: state.isEditingNickname
    }
}

export default connect(
    mapStateToProps,
    { toggleEditNickname, addNickname }
) (TeamCard);