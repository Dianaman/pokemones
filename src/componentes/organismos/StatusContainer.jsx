import React from 'react';
import { useSelector } from 'react-redux';
import { Spinner, Error } from '../atomos';

export function StatusContainer(props) {

    const app = useSelector(state => state);
    const {isLoading, error} = app.pokemonReducer;
    const { children } = props;

    return (
    <div>
        {
        (isLoading || error)
        ? <div>
            {isLoading && <Spinner />}
            {error && <Error />}           
            </div>
        : children
        }
    </div>
    );
}