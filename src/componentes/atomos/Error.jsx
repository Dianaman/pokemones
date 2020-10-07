import React from 'react';
import { useSelector } from 'react-redux';

export function Error() {
    const app = useSelector(state => state);
    const { error } = app.pokemonReducer;

    return(
        <div>
            {error && <p color='red'>{error}</p>}
        </div>
    );
}