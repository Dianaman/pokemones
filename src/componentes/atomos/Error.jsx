import React from 'react';
import { useSelector } from 'react-redux';
import Alert from 'react-bootstrap/Alert';

export function Error() {
    const app = useSelector(state => state);
    const { error } = app.pokemonReducer;

    return(
        error && <Alert variant="danger" style={{width:'36rem'}} className="centered">
            <Alert.Heading>Error</Alert.Heading>
            <p>{typeof error === 'string' ? error : error.toString()}</p>
      </Alert>
    );
}