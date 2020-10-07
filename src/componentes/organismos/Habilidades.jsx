import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAbility } from '../../redux/actions/pokemon.actions';
import ListGroup from 'react-bootstrap/listGroup';
import {Spinner} from '../atomos';

export function Habilidades () {
    const dispatch = useDispatch();

    const app = useSelector(state => state);
    const { habilidades, detalle } = app.pokemonReducer;

    React.useEffect(
        () => {
            detalle && detalle.abilities.forEach((ability, index) => {
                dispatch(fetchAbility(ability.ability.url, index));
            })
        }, [detalle, dispatch]
    );

    return (
        <ListGroup>
            {detalle && detalle.abilities.map(
                (ability, index) => {
                    return (
                        <ListGroup.Item key={index}>
                            
                            <h5>{ability.ability.name}</h5>
                            {
                                habilidades[index]  ? 
                                <div>
                                    {habilidades[index].effect_entries[1].effect}
                                </div>
                                : <Spinner />
                            }
                        </ListGroup.Item>
                    );
                })
            }
        </ListGroup>

    );
}