import React from 'react';
import {
  Switch,
  Route,
  Link,
  Redirect
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
        <Route path="/not-found">
          <NotFound />
        </Route>
        <Route>
          <Redirect to={{pathname: '/not-found'}} />
        </Route>
      </Switch>

  </div>
  );
}

export default App;
