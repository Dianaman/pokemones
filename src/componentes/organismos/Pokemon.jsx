import React from 'react';
import { useSelector } from 'react-redux';

export function Pokemon () {
    const app = useSelector(state => state);
    const { detalle } = app.pokemonReducer;

    React.useEffect(() => {
        console.log('detalle', detalle);
    }, [detalle]);

    return (
        detalle && <div>
            <h1>{detalle.name}</h1>
            <img src={detalle.sprites.front_default} alt='pokemon front'/><br/>

            <div>Habilidades:</div>
            <ul>
                {detalle.abilities && detalle.abilities.map((ability, index) => {
                    return <li key={index}>{ability.ability.name}</li>
                })}                    
            </ul>

        </div>
    );
    
}