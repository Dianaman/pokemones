import React from 'react';
import {
  Switch,
  Route,
  Redirect, NavLink
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Home, Listado, Detalle, NotFound } from './pages';

function App() {

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Pokemones</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/pokemones">Pokemones</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        
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
