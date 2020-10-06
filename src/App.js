import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Home, Listado, Detalle, NotFound } from './pages';

function App() {

  return (
    <div>
      <div>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/pokemones">Pokemones</Link>
      </div>
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pokemones">
          <Listado />
        </Route>
        <Route path="/detalle/:pokemon">
          <Detalle />
        </Route>
        <Route path="/pokemon/:id">
          <Detalle />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>

  </div>
  );
}

export default App;
