import React from 'react';
import { Pokemones, StatusContainer } from '../componentes/organismos';
import { useSelector, useDispatch } from 'react-redux';
import { fetchList, fetchListSize } from '../redux/actions/pokemon.actions';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export function Listado() {
    const app = useSelector(state => state);
    const { previous, next, url} = app.pokemonReducer;
  
    const dispatch = useDispatch();
  
  
    React.useEffect(()=>{
      url && dispatch(fetchList(url))
    }, [url, dispatch]);

    return (
        <div>
            <StatusContainer children={<Pokemones/>} />
            
            <div className="centered">
                <ButtonGroup className="text-center">
                    {previous && <Button variant="secondary" onClick={() => dispatch(fetchList(previous))}>Prev</Button>}

                    <Button variant="secondary" onClick={() => dispatch(fetchListSize(10))}>10</Button>
                    <Button variant="secondary" onClick={() => dispatch(fetchListSize(20))}>20</Button>
                    <Button variant="secondary" onClick={() => dispatch(fetchListSize(30))}>30</Button>

                    {next && <Button variant="secondary" onClick={() => dispatch(fetchList(next))}>Next</Button>}
                </ButtonGroup>                
            </div>
        </div>
    );
}