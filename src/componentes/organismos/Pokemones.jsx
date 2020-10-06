import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 

export function Pokemones () {
    const app = useSelector(state => state);
    const {results} = app.pokemonReducer;


    return (
        <div>
            {results.map((pokemon) => {
                return (<div key={pokemon.url}>
                    {pokemon.name}&nbsp;
                    <Link to={'/detalle/'+ getId(pokemon.url)}>More</Link>
                </div>);
            })}
        </div>
    );
};

function getId(url) {
    const arr = url.split('/');
    const id = arr[arr.length - 2];
    return id;
}