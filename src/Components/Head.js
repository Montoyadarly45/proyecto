import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

class Head extends React.Component {
  render() {
    return (
      <React.Fragment>
        <meta
          name="viewport"
          content="width= device width, user-scalable=no, initial-scale=1.0 maximum-scale=1.0, minimun-scale=1.0"
        ></meta>
        <script type="style/css" src="css/animate.min.css"></script>
        <script type="text/javascript" src="js/jquery.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
        <script
          type="text/javascript"
          src="http://maps.google.com/maps/api/js?sensor=true"
        ></script>
        <script type="text/javascript" src="js/jquery.inview.min.js"></script>
        <script type="text/javascript" src="js/wow.min.js"></script>
        <script type="text/javascript" src="js/mousescroll.js"></script>
        <script type="text/javascript" src="js/smoothscroll.js"></script>
        <script type="text/javascript" src="js/jquery.countTo.js"></script>
        <script type="text/javascript" src="js/lightbox.min.js"></script>
        <script type="text/javascript" src="js/main.js"></script>

        <header>
          <div className="header">
            <div className="">
              <div className="collapse-navar">
                <ul class="nav">
                  <li>
                    <a className="var" href=" ">
                      Menú
                    </a>
                    <ul className=" menu  navbar-nav navbar-right">
                      <li className="scroll active">
                        <Link className="scroll active" to="/">
                          Inicio
                        </Link>
                      </li>
                      <li className="scroll">
                        <Link to="/quienesSomos">Quienes somos </Link>
                      </li>
                      <li className="scroll">
                        <Link to="/trabajo">Grupo de trabajo</Link>
                      </li>
                      <li className="scroll">
                        <Link to="/servicios">Servicios</Link>
                      </li>
                      <li
                        className={"scroll"}
                        onClick={() => "http://localhost/"}
                      >
                        <a href="http://localhost/">Productos</a>
                      </li>
                      <li className="scroll">
                        <Link to="/galeria">Galeria</Link>
                      </li>
                      <li className="scroll">
                        <Link to="/opinion">Que dicen nuestros clientes</Link>
                      </li>
                      <li className="scroll">
                        <Link to="/contacto">Contacto</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <section id={"home"}>
          <div className="letra">
            <div className={"tem-active"}>
              <div className="caption">
                <h1 className="animated fadeInLeftBig espacio">
                  BIENVENIDOS A SEXO SANO, VIDA SANA{" "}
                </h1>
              </div>
            </div>
            <div className={"item"}>
              <div className="caption">
                <h1 className="animated fadeInLeftBig espacio colores">
                  Hablamos sin tapujos y enseñamos con el corazón
                </h1>
                <Link
                  data-scroll
                  class="btn btn-submit animated fadeInUpBig espacio"
                  to="/servicios"
                >
                  Comenzar
                </Link>
              </div>
            </div>

            <a className="left-control" href="#home-slider" data-slide="prev">
              <i className="fa fa-angle-left"></i>
            </a>
            <a className="right-control" href="#home-slider" data-slide="next">
              <i className="fa fa-angle-right"></i>
            </a>
            <a id="tohash" href="#services">
              <i className="fa fa-angle-down"></i>
            </a>

            <div className="main-nav">
              <div className="container">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    <span className="sr-only">
                      <Link to="/servicios">Toggle navigation</Link>
                    </span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Head;
