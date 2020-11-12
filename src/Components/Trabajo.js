import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

class Trabajo extends React.Component {
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
        <section id="quedicen">
          <div className="container">
            <div className="row">
              <div
                className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp"
                data-wow-duration="1200ms"
                data-wow-delay="300ms"
              >
                <h2 className="pgrupo-trabajo1">Grupo de trabajo</h2>
                <p className="pgrupo-trabajo">
                  Somos un grupo comprometido con nuestros clientes brindando la
                  mejor información sobre enfermedades de transmición sexual,
                  embarazos a temprana edad, metodos de planificación y como
                  tener un mejor desempeño a la hora de tener sexo con tú
                  pareja, más aya de esto somos responsables y comprometidos con
                  lo que hacemos.
                </p>
              </div>
            </div>

            <table className="Scroll">
              <tr>
                <th className="Santiago">Santiago Ruiz </th>
                <th className="Darly">Darly Ospina </th>
              </tr>
              <tr>
                <td>
                  <h4 className="H4">Programador Diseñador</h4>
                  <p className="p_trabajo">
                    Persona comprometida con su trabajo, responsable y siempre
                    dispuesto a colaborar
                    <div className="social-icons">
                      <ul>
                        <li>
                          <a className="facebook" href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a className="twitter" href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </p>
                </td>
                <td>
                  <h4 className="H4">Programadora</h4>
                  <p className="p_trabajo">
                    Con un temperamento muy fuerte pero siempre dispuesta a
                    colaborarles, es muy responsable y respetuosa
                  </p>

                  <div className="social-icons">
                    <ul>
                      <li>
                        <a className="facebook" href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a className="twitter" href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Trabajo;
