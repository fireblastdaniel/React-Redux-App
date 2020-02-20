import React from 'react'

const TeamCard = props => {
    return (
        <div className='team-card'>
            <img src={props.pokemon.sprites.front_default} alt={props.pokemon.species.name}/>
            {/* <p>Nickname: {props.pokemon.species.name[0].toUpperCase() + props.pokemon.species.name.slice(1)}</p>
            <p>Ability: {props.pokemon.abilities[0].ability.name}</p>
            <div className='moves'>
                <div>Moves:</div>
                <div>
                    <p>{props.pokemon.moves[0] ? props.pokemon.moves[0].move.name : '[none]'}</p>
                    <p>{props.pokemon.moves[1] ? props.pokemon.moves[1].move.name : '[none]'}</p>
                    <p>{props.pokemon.moves[2] ? props.pokemon.moves[2].move.name : '[none]'}</p>
                    <p>{props.pokemon.moves[3] ? props.pokemon.moves[3].move.name : '[none]'}</p>
                </div>
            </div> */}
            <table>
                <tr>
                    <td>Nickname:</td>
                    <td>{props.pokemon.species.name[0].toUpperCase() + props.pokemon.species.name.slice(1)}</td>
                </tr>
                <tr>
                    <td>Ability:</td>
                    <td>{props.pokemon.abilities[0].ability.name}</td>
                </tr>
                <tr>
                    <td>Moves:</td>
                    <td>
                        <p>{props.pokemon.moves[0] ? props.pokemon.moves[0].move.name : '[none]'}</p>
                        <p>{props.pokemon.moves[1] ? props.pokemon.moves[1].move.name : '[none]'}</p>
                        <p>{props.pokemon.moves[2] ? props.pokemon.moves[2].move.name : '[none]'}</p>
                        <p>{props.pokemon.moves[3] ? props.pokemon.moves[3].move.name : '[none]'}</p>
                    </td>
                </tr>
            </table>

        </div>
    );
}

export default TeamCard;