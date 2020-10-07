import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';

export function Pokemon () {
    const app = useSelector(state => state);
    const { detalle } = app.pokemonReducer;

    return (
        detalle && 
        <Card style={{ width: '18rem'}} className="centered">
            <Card.Img variant="top" src={detalle.sprites.front_default} alt='pokemon front' />
                        
            <Card.Body>
                <Card.Title>{detalle.name.toUpperCase()}</Card.Title>

                    <div>Habilidades:</div>
                    <ul>
                        {detalle.abilities && detalle.abilities.map((ability, index) => {
                            return <li key={index}>{ability.ability.name}</li>
                        })}                    
                    </ul>
            </Card.Body>

        </Card>
    );
    
}