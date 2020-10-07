import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

export function Pokemones () {
    const app = useSelector(state => state);
    const {results} = app.pokemonReducer;


    return (
        <Card style={{ width: '18rem' }} className="centered">
            <ListGroup>
                {results.map((pokemon) => {
                    return (<ListGroup.Item key={pokemon.url}>
                        {pokemon.name.toUpperCase()}&nbsp;
                        <Link to={'/detalle/'+ getId(pokemon.url)}>More</Link>
                    </ListGroup.Item>);
                })}
            </ListGroup>
        </Card>
    );
};

function getId(url) {
    const arr = url.split('/');
    const id = arr[arr.length - 2];
    return id;
}