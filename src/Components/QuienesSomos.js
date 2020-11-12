import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

class QuienesSomos extends React.Component {
  render() {
    return (
      <React.Fragment>
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
        <section id="about-us" className="parallax">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div
                  className="about-info wow fadeInUp"
                  data-wow-duration="100000ms"
                  data-wow-delay="3000000ms"
                >
                  <h3>¿Quienes somos?</h3>
                  <p className="pabout-us">
                    Somos un grupo de desarroladores, diseñados para ofrecer una
                    mejor información sobre productos, enfermedades de
                    transmición sexual, metodos de planificación, embarazos a
                    temprana edad y como tener una mejor experiencia a la hora
                    de tener relaciones sexuales con tú pareja, manejamos otro
                    tipo de sesión donde ayudaremos a todas aquellas parejas que
                    tienen problemas y así salvar aquello que crean perdido,
                    como el matrimonio o quizas una relación conyugal. todo esto
                    es basado mediante tips, cómo lo son las zonas más
                    sensibles,cuales son los productos más efectivos y como
                    utilizarlos,como controlar la eyaculación precoz, como
                    prodias durar más tiempo en la cama, entre muchas más cosas
                    y como ejecutarlas, solo es que agendes una cita con nostros
                    o visita nuestro aplicativo y aprenderas muchas cosas.
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div
                  className="our-skills wow fadeInDown"
                  data-wow-duration="100000ms"
                  data-wow-delay="300000ms"
                >
                  <div
                    className="single-skill wow fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="300ms"
                  >
                    <p className="lead">Experiencia de los usuarios</p>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-primary six-sec-ease-in-out"
                        role="progressbar"
                        aria-valuetransitiongoal="95"
                      >
                        95%
                      </div>
                    </div>
                  </div>
                  <div
                    className="single-skill wow fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="400ms"
                  >
                    <p className="lead">Información</p>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-primary six-sec-ease-in-out"
                        role="progressbar"
                        aria-valuetransitiongoal="90"
                      >
                        75%
                      </div>
                    </div>
                  </div>
                  <div
                    className="single-skill wow fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="500ms"
                  >
                    <p className="lead">Atención</p>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-primary six-sec-ease-in-out"
                        role="progressbar"
                        aria-valuetransitiongoal="85"
                      >
                        60%
                      </div>
                    </div>
                  </div>
                  <div
                    className="single-skill wow fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="600ms"
                  >
                    <p className="lead">Clases</p>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-primary six-sec-ease-in-out"
                        role="progressbar"
                        aria-valuetransitiongoal="90"
                      >
                        85%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default QuienesSomos;
