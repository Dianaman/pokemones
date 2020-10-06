import React from 'react';
import { Pokemones } from '../componentes/organismos';
import { useSelector, useDispatch } from 'react-redux';
import { fetchList } from '../redux/actions/pokemon.actions';

export function Listado() {
    const app = useSelector(state => state);
    const {loading, error, previous, next, url} = app.pokemonReducer;
  
    const dispatch = useDispatch();
  
  
    React.useEffect(()=>{
      dispatch(fetchList(url))
    }, [url, dispatch]);

    return (
        <div>
            {
            (loading || error)
            ? <div>
                {loading && <div>Loading</div>}
                {error && <div>Error</div>}           
                </div>
            : <Pokemones/>
            }

            {previous && <button onClick={() => dispatch(fetchList(previous))}>Prev</button>}
            {next && <button onClick={() => dispatch(fetchList(next))}>Next</button>}
        </div>
    );
}