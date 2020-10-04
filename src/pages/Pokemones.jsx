import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { seeDetail } from '../redux/actions/pokemon.actions';

export default function Pokemones () {
    const app = useSelector(state => state);
    const {results} = app.pokemonReducer;
    const dispatch = useDispatch();

    console.log('results', results);

    React.useEffect(()=>{

    }, [results]);

    return (
        <div>
            {results.map((pokemon) => {
                return (<div key={pokemon.url}>
                    {pokemon.name}&nbsp;
                    <button onClick={() => dispatch(seeDetail(pokemon.url))}>More</button>
                </div>);
            })}
        </div>
    );
};
