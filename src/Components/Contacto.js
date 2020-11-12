import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

class Contacto extends React.Component {
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
        <section id="contact">
          <div id="contact-us" className="parallax">
            <div className="container">
              <div className="row">
                <div
                  className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  <h1>Contacta con nostros</h1>
                  <p>
                    Contacta con nosotros para resolver una pequeña duda, o en
                    caso de que no hayas recibido tú pedido durante las últimas
                    48 horas, te atenderemos lo más rapido posible estes
                    pendiente a tu correo electronico.
                  </p>
                </div>
              </div>
              <div
                className="contact-form wow fadeIn"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <form
                      id="main-contact-form"
                      name="contact-form"
                      method="post"
                      action="#"
                    >
                      {" "}
                    </form>
                    <div
                      className="row  wow fadeInUp"
                      data-wow-duration="1000ms"
                      data-wow-delay="300ms"
                    >
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Usuario"
                            required="required"
                          ></input>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            required="required"
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Objetivo"
                        required="required"
                      ></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Cual es su inquietud"
                      required="required"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn-submit ">
                      Enviar
                    </button>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className="contact-info wow fadeInUp"
                      data-wow-duration="1000ms"
                      data-wow-delay="300ms"
                    >
                      <p>
                        Si no deseas contactarte atraves del formulario, puedes
                        hacerlo mediante el correo electronico o puedes hacerlo
                        mediante el número de whatsapp.
                      </p>
                      <ul className="address">
                        <li>
                          <i className="fa fa-phone"></i>{" "}
                          <span> Telefono:</span> +57 317 251 8072{" "}
                        </li>
                        <li>
                          <i className="fa fa-envelope"></i>{" "}
                          <span> Email:</span>
                          <a href="mailto:someone@yoursite.com">
                            {" "}
                            sratxr@gmail.com
                          </a>
                        </li>
                      </ul>
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
export default Contacto;
