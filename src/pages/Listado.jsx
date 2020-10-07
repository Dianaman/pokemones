import React from 'react';
import { Pokemones, StatusContainer } from '../componentes/organismos';
import { useSelector, useDispatch } from 'react-redux';
import { fetchList } from '../redux/actions/pokemon.actions';

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
            

            {previous && <button onClick={() => dispatch(fetchList(previous))}>Prev</button>}
            {next && <button onClick={() => dispatch(fetchList(next))}>Next</button>}
        </div>
    );
}