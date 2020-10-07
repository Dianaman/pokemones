import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchDetail } from '../redux/actions/pokemon.actions';
import { StatusContainer, Pokemon } from '../componentes/organismos';

export function Detalle () {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

    let { pokemon } = useParams();
    let dispatch = useDispatch();

    React.useEffect(
        () => {
            pokemon && dispatch(fetchDetail(baseUrl + pokemon))
        }, [pokemon, dispatch]
    );

    return (
        <div>
            <StatusContainer children={<Pokemon />}/>
        </div>
    );
}