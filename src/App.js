import React from 'react';
import Pokemones from './pages/Pokemones';
import { useSelector, useDispatch } from 'react-redux';
import { fetchList } from './redux/actions/pokemon.actions';



function App() {

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

      <button onClick={() => dispatch(fetchList(previous))}>Prev</button>
      <button onClick={() => dispatch(fetchList(next))}>Next</button>
    </div>
  );
}

export default App;
