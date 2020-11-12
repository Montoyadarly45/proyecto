import React from "react";
import App from "./App";
import { Link } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Head from "./Components/Head.js";
import Enfermedades from "./Components/Enfermedades.js";
import Anticonceptivos from "./Components/Anticonceptivos.js";
import Consejos from "./Components/Consejos.js";
import Embarazos from "./Components/Embarazos.js";
import ConsejosSexo from "./Components/ConsejosSexo.js";
import Contacto from "./Components/Contacto.js";
import Galeria from "./Components/Galeria.js";
import Opinion from "./Components/Opinion.js";
import QuienesSomos from "./Components/QuienesSomos.js";
import Servicios from "./Components/Servicios.js";
import Trabajo from "./Components/Trabajo.js";
import "./animate.min.css";
import "./bootstrap.min.css";
import "./font-awesome.min.css";
import "./lightbox.css";
import "./main.css";
import "./responsive.css";

function Welcome(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Head} />
        <Route exact path="/enfermedades" component={Enfermedades} />
        <Route exact path="/anticonceptivos" component={Anticonceptivos} />
        <Route exact path="/consejos" component={Consejos} />
        <Route exact path="/embarazos" component={Embarazos} />
        <Route exact path="/consejosSexo" component={ConsejosSexo} />
        <Route exact path="/contacto" component={Contacto} />
        <Route exact path="/galeria" component={Galeria} />
        <Route exact path="/opinion" component={Opinion} />
        <Route exact path="/quienesSomos" component={QuienesSomos} />
        <Route exact path="/servicios" component={Servicios} />
        <Route exact path="/trabajo" component={Trabajo} />
      </Switch>
    </BrowserRouter>
  );
}
export default Welcome;
