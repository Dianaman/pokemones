import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { Habilidades } from './Habilidades';

export function Pokemon () {
    const app = useSelector(state => state);
    const { detalle } = app.pokemonReducer;

    return (
        detalle && 
        <Card style={{ backgroundColor: 'peachpuff', width: '30rem'}} className="centered">
            <Carousel interval={2000}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={detalle.sprites.front_default}
                        alt="pokemon front"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={detalle.sprites.front_shiny}
                        alt="pokemon shinny"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={detalle.sprites.back_default}
                        alt="pokemon back"
                    />
                </Carousel.Item>
            </Carousel>

            <Card.Body>
                <Card.Title>{detalle.name.toUpperCase()}</Card.Title>
                    <div>Rango: {detalle.order}</div><br />
                    <div>Habilidades:</div>
                    <Habilidades></Habilidades>
            </Card.Body>

        </Card>
    );

}    


/*<ul>
    {detalle.abilities && detalle.abilities.map((ability, index) => {
        return <li key={index}>{ability.ability.name}</li>
    })}
</ul>*/