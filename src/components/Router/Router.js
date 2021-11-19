import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../Login/Login";
import Empleados from "../Empleados/empleados.buscar";
import Home from "../Pages/Home/Home";
import PrivateRoute from "../Auth/PrivateRoute";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/login"]} component={Login} />
        <Route exact path={["/home"]} component={Home} />
        <PrivateRoute exact path={["/home2"]} component={home2} />
        <PrivateRoute exact path={["/empleados"]} component={Empleados} />

        {/* Ruta de página no encontrada (404) */}
        <Route
          path={"*"}
          component={() => (
            <h1 style={{ marginTop: 300 }}>
              404
              <br />
              Página no encontrada
            </h1>
          )}
        />
      </Switch>
    </Router>
  );
}

function home2() {
  return <h2>Home2</h2>;
}
