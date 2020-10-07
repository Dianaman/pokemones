import React from 'react';
import Card from 'react-bootstrap/Card';

export function Home () {
    
    return (
        <Card style={{width: '20rem'}} className="centered">
            <Card.Body>
                <Card.Title className="text-center">Home Pokemones</Card.Title>
                <div className="detail-block">Autor</div> Diana Man<br />
                <div className="detail-block">Materia</div> Programación Avanzada 2<br />
                <div className="detail-block">Lenguaje</div> React<br />
                <div className="detail-block">Año</div> 2020<br />
            </Card.Body>
        </Card>
    );
};