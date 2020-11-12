import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

class Servicios extends React.Component {
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
        <section id="services">
          <div className="container">
            <div
              className="heading wow fadeInUp"
              data-wow-duration="1000ms"
              data-wow-delay="300ms"
            >
              <div className="row">
                <div className="text-center col-sm-8 col-sm-offset-2">
                  <h2 className="p-servicios">Servicios</h2>
                  <p className="p-servicios">
                    Brindamos servicios con una muy buena calidad de atención,
                    donde usted es lo primordial ejecuntadole una solución a
                    todos sus problemas sexuales, así podras tener una mejor
                    calidad de vida sexual y podras ser apetecido o apetecida
                    por todas aquellas personidas que te den esa oportunidad de
                    demostrar lo que aprenderas acá.
                  </p>
                  <p class="p-servicios">¡No te arrepentiras!</p>
                </div>
              </div>
            </div>
            <div className="text-center our-services">
              <div className="row">
                <div
                  className="col-sm-4 wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  <div className="service-icon">
                    <Link className="fa fa-flask" to="/enfermedades"></Link>
                  </div>
                  <div className="service-info">
                    <h3>Enfermedades de transmisión sexual</h3>
                    <p className="p-servicios">
                      Acá podras encontrar toda la información necesaria y
                      concreta para instruirte más sobre las enfermedades de
                      transmisión sexual
                    </p>
                  </div>
                </div>
                <div
                  className="col-sm-4 wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="450ms"
                >
                  <div class="service-icon">
                    <Link className="fa fa-umbrella" to="/embarazos"></Link>
                  </div>
                  <div className="service-info">
                    <h3>Embarazos a temprana edad.</h3>
                    <p className="p-servicios">
                      Encontraras información sobre los embarazos a temprana
                      edad como, por que se da, como evitar y como llegar a
                      controlarlos
                    </p>
                  </div>
                </div>

                <div
                  className="col-sm-4 wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="550ms"
                >
                  <div className="service-icon">
                    <Link className="fa fa-cloud" to="/consejos"></Link>
                  </div>
                  <div className="service-info">
                    <h3>Como aconsejar a su hijo o hija.</h3>
                    <p className="p-servicios">
                      Se te dara información y consejos donde como podras
                      instruir a tu hija o hijo sobre el sexo, y porque es buena
                      idea hacerlo.
                    </p>
                  </div>
                </div>
                <div
                  className="col-sm-4 wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="650ms"
                >
                  <div className="service-icon">
                    <Link className="fa fa-coffee" to="/consejosSexo"></Link>
                  </div>
                  <div className="service-info">
                    <h3>Consejos para tener un mejor encuentro sexual.</h3>
                    <p className="p-servicios">
                      Se te dara consejos de cómo tener mayor seguridad, que
                      cosas puedes hacer para encantar a tú hombre o a tú mujer.
                    </p>
                  </div>
                </div>
                <div
                  className="col-sm-4 wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="750ms"
                >
                  <div className="service-icon">
                    <Link
                      className="fa fa-bitbucket"
                      to="/anticonceptivos"
                    ></Link>
                  </div>
                  <div className="service-info">
                    <h3>Cuales son los metodos anticonceptivos</h3>
                    <p className="p-servicios">
                      Se te dará información acerca de los metodos
                      anticonceptivos y su tasa de efectividad, además del
                      metodo de aplicación.
                    </p>
                  </div>
                </div>
                <div
                  className="col-sm-4 wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="850ms"
                >
                  <div className="service-icon">
                    <i className="fa fa-gift"></i>
                  </div>
                  <div className="service-info">
                    <h3>
                      Agenda una cita de una manera rapida con alguno de
                      nosotros
                    </h3>
                    <p className="p-servicios">
                      Podras agendar una cita con alguno de nosotros, para una
                      ayuda especial ya sea para un problema un poco más
                      complicado o una consulta.
                    </p>
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
export default Servicios;
