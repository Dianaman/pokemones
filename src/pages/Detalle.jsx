import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail } from '../redux/actions/pokemon.actions';

export function Detalle () {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

    let { pokemon } = useParams();
    let dispatch = useDispatch();
    
    const app = useSelector(state => state);
    let { detalle } = app.pokemonReducer;

    React.useEffect(
        () => {
            pokemon && dispatch(fetchDetail(baseUrl + pokemon))
        }, [pokemon, dispatch]
    );

    return (
        <div>
            {detalle && <div>
                <h1>{detalle.name}</h1>
                <img src={detalle.sprites.front_default} alt='pokemon front'/><br/>

                <div>Habilidades:</div>
                <ul>
                    {detalle.abilities && detalle.abilities.map((ability, index) => {
                        return <li key={index}>{ability.ability.name}</li>
                    })}                    
                </ul>

            </div>}
        </div>

    );
};