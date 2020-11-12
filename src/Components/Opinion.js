import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

class Opinion extends React.Component {
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
        <section id="team">
          <div className="container">
            <div className="row">
              <div
                className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp"
                data-wow-duration="1200ms"
                data-wow-delay="300ms"
              >
                <h2 className="p_quedicen">¿Qué dicen nuestros clientes?</h2>
              </div>
            </div>
            <div className="team-members">
              <div className="row">
                <div className="col-sm-5">
                  <div
                    className="team-member wow flipInY"
                    data-wow-duration="1000ms"
                    data-wow-delay="300ms"
                  >
                    <div className="member-image">
                      <img
                        className="img-responsive"
                        src="src/team/1.jpg"
                        alt=""
                      ></img>
                    </div>
                    <div className="member-info">
                      <h3>Mary lance</h3>
                      <p className="p_quedicen">
                        Son los mejores para dar consejos, pudieron salvar mi
                        matrimonio no se que hubiera echo sin ustedes. muchas
                        gracias enserio, son super efectivos
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div
                    className="team-member wow flipInY"
                    data-wow-duration="1000ms"
                    data-wow-delay="500ms"
                  >
                    <div className="member-image">
                      <img
                        className="img-responsive"
                        src="src/team/2.jpg"
                        alt=""
                      ></img>
                    </div>
                    <div className="member-info">
                      <h3>Camilo5</h3>
                      <p className="p_quedicen">
                        Son super rapido para llegar los productos y son de muy
                        buena calidad, los recomiendo siempre por sus productos
                        y consejos. muy responsables
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div
                    className="team-member wow flipInY"
                    data-wow-duration="1000ms"
                    data-wow-delay="800ms"
                  >
                    <div className="member-image">
                      <img
                        className="img-responsive"
                        src="src/team/3.jpg"
                        alt=""
                      ></img>
                    </div>
                    <div className="member-info"></div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div
                    className="team-member wow flipInY"
                    data-wow-duration="1000ms"
                    data-wow-delay="1100ms"
                  >
                    <div className="member-image">
                      <img
                        className="img-responsive"
                        src="src/team/4.jpg"
                        alt=""
                      ></img>
                    </div>
                    <div className="member-info"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="parallax">
          <div className="container">
            <div className="row count">
              <div
                className="col-sm-3 col-xs-6 wow fadeInLeft"
                data-wow-duration="1000ms"
                data-wow-delay="300ms"
              >
                <i className="fa fa-user"></i>
                <h3 className="timer">4000</h3>
                <p>Clientes</p>
              </div>
              <div
                className="col-sm-3 col-xs-6 wow fadeInLeft"
                data-wow-duration="1000ms"
                data-wow-delay="500ms"
              >
                <i className="fa fa-desktop"></i>
                <h3 className="timer">200</h3>
                <p>Clases</p>
              </div>
              <div
                className="col-sm-3 col-xs-6 wow fadeInLeft"
                data-wow-duration="1000ms"
                data-wow-delay="700ms"
              >
                <i className="fa fa-trophy"></i>
                <h3 className="timer">10</h3>
                <p>Relaciones salvadas</p>
              </div>
              <div
                className="col-sm-3 col-xs-6 wow fadeInLeft"
                data-wow-duration="1000ms"
                data-wow-delay="900ms"
              >
                <i className="fa fa-comment-o"></i>
                <h3>24/7</h3>
                <p>Frecuencia que respondemos</p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Opinion;
