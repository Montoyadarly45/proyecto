import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

class Galeria extends React.Component {
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
        <section id="portfolio">
          <div className="container">
            <div className="row">
              <div
                className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="300ms"
              >
                <h2>Galeria de imagenes</h2>
                <p>
                  Podras ver un poco de imagenes sobre el sexo, y que productos
                  hay que nosotros no comercializemos pero que recomendamos
                  plenamente.
                </p>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-3">
                <div
                  className="folio-item wow fadeInRightBig"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  <div className="folio-image">
                    <img
                      className="img-responsive"
                      src="src/portfolio/1.jpg"
                      alt=""
                    ></img>
                  </div>
                  <div className="overlay">
                    <div className="overlay-content">
                      <div className="overlay-text">
                        <div className="folio-info">
                          <h3>Time Hours</h3>
                          <p>Design, Photography</p>
                        </div>
                        <div className="folio-overview">
                          <span className="folio-link">
                            <a
                              className="folio-read-more"
                              href="#"
                              data-single_url="portfolio-single.html"
                            >
                              <i className="fa fa-link"></i>
                            </a>
                          </span>
                          <span className="folio-expand">
                            <a
                              href="src/portfolio/portfolio-details.jpg"
                              data-lightbox="portfolio"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div
                  className="folio-item wow fadeInLeftBig"
                  data-wow-duration="1000ms"
                  data-wow-delay="400ms"
                >
                  <div className="folio-image">
                    <img
                      className="img-responsive"
                      src="src/portfolio/2.jpg"
                      alt=""
                    ></img>
                  </div>
                  <div className="overlay">
                    <div className="overlay-content">
                      <div className="overlay-text">
                        <div className="folio-info">
                          <h3>Time Hours</h3>
                          <p>Design, Photography</p>
                        </div>
                        <div className="folio-overview">
                          <span className="folio-link">
                            <a
                              className="folio-read-more"
                              href="#"
                              data-single_url="portfolio-single.html"
                            >
                              <i className="fa fa-link"></i>
                            </a>
                          </span>
                          <span className="folio-expand">
                            <a
                              href="src/portfolio/portfolio-details.jpg"
                              data-lightbox="portfolio"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div
                  className="folio-item wow fadeInRightBig"
                  data-wow-duration="1000ms"
                  data-wow-delay="500ms"
                >
                  <div className="folio-image">
                    <img
                      className="img-responsive"
                      src="src/portfolio/3.jpg"
                      alt=""
                    ></img>
                  </div>
                  <div className="overlay">
                    <div className="overlay-content">
                      <div className="overlay-text">
                        <div className="folio-info">
                          <h3>Time Hours</h3>
                          <p>Design, Photography</p>
                        </div>
                        <div className="folio-overview">
                          <span className="folio-link">
                            <a
                              className="folio-read-more"
                              href="#"
                              data-single_url="portfolio-single.html"
                            >
                              <i className="fa fa-link"></i>
                            </a>
                          </span>
                          <span className="folio-expand">
                            <a
                              href="src/portfolio/portfolio-details.jpg"
                              data-lightbox="portfolio"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div
                  className="folio-item wow fadeInLeftBig"
                  data-wow-duration="1000ms"
                  data-wow-delay="600ms"
                >
                  <div className="folio-image">
                    <img
                      className="img-responsive"
                      src="src/portfolio/4.jpg"
                      alt=""
                    ></img>
                  </div>
                  <div className="overlay">
                    <div className="overlay-content">
                      <div className="overlay-text">
                        <div className="folio-info">
                          <h3>Time Hours</h3>
                          <p>Design, Photography</p>
                        </div>
                        <div className="folio-overview">
                          <span className="folio-link">
                            <a
                              className="folio-read-more"
                              href="#"
                              data-single_url="portfolio-single.html"
                            >
                              <i className="fa fa-link"></i>
                            </a>
                          </span>
                          <span className="folio-expand">
                            <a
                              href="src/portfolio/portfolio-details.jpg"
                              data-lightbox="portfolio"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div
                  className="folio-item wow fadeInRightBig"
                  data-wow-duration="1000ms"
                  data-wow-delay="700ms"
                >
                  <div className="folio-image">
                    <img
                      className="img-responsive"
                      src="src/portfolio/5.jpg"
                      alt=""
                    ></img>
                  </div>
                  <div className="overlay">
                    <div className="overlay-content">
                      <div className="overlay-text">
                        <div className="folio-info">
                          <h3>Time Hours</h3>
                          <p>Design, Photography</p>
                        </div>
                        <div className="folio-overview">
                          <span className="folio-link">
                            <a
                              className="folio-read-more"
                              href="#"
                              data-single_url="portfolio-single.html"
                            >
                              <i className="fa fa-link"></i>
                            </a>
                          </span>
                          <span className="folio-expand">
                            <a
                              href="src/portfolio/portfolio-details.jpg"
                              data-lightbox="portfolio"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div
                  className="folio-item wow fadeInLeftBig"
                  data-wow-duration="1000ms"
                  data-wow-delay="800ms"
                >
                  <div className="folio-image">
                    <img
                      className="img-responsive"
                      src="src/portfolio/6.jpg"
                      alt=""
                    ></img>
                  </div>
                  <div className="overlay">
                    <div className="overlay-content">
                      <div className="overlay-text">
                        <div className="folio-info">
                          <h3>Time Hours</h3>
                          <p>Design, Photography</p>
                        </div>
                        <div className="folio-overview">
                          <span className="folio-link">
                            <a
                              className="folio-read-more"
                              href="#"
                              data-single_url="portfolio-single.html"
                            >
                              <i className="fa fa-link"></i>
                            </a>
                          </span>
                          <span className="folio-expand">
                            <a
                              href="src/portfolio/portfolio-details.jpg"
                              data-lightbox="portfolio"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div
                  className="folio-item wow fadeInRightBig"
                  data-wow-duration="1000ms"
                  data-wow-delay="900ms"
                >
                  <div className="folio-image">
                    <img
                      className="img-responsive"
                      src="src/portfolio/7.jpg"
                      alt=""
                    ></img>
                  </div>
                  <div className="overlay">
                    <div className="overlay-content">
                      <div className="overlay-text">
                        <div className="folio-info">
                          <h3>Time Hours</h3>
                          <p>Design, Photography</p>
                        </div>
                        <div className="folio-overview">
                          <span className="folio-link">
                            <a
                              className="folio-read-more"
                              href="#"
                              data-single_url="portfolio-single.html"
                            >
                              <i className="fa fa-link"></i>
                            </a>
                          </span>
                          <span className="folio-expand">
                            <a
                              href="src/portfolio/portfolio-details.jpg"
                              data-lightbox="portfolio"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div
                  className="folio-item wow fadeInLeftBig"
                  data-wow-duration="1000ms"
                  data-wow-delay="1000ms"
                >
                  <div className="folio-image">
                    <img
                      className="img-responsive"
                      src="src/portfolio/8.jpg"
                      alt=""
                    ></img>
                  </div>
                  <div className="overlay">
                    <div className="overlay-content">
                      <div className="overlay-text">
                        <div className="folio-info">
                          <h3>Time Hours</h3>
                          <p>Design, Photography</p>
                        </div>
                        <div class="folio-overview">
                          <span className="folio-link">
                            <a
                              className="folio-read-more"
                              href="#"
                              data-single_url="portfolio-single.html"
                            >
                              <i className="fa fa-link"></i>
                            </a>
                          </span>
                          <span className="folio-expand">
                            <a
                              href="src/portfolio/portfolio-details.jpg"
                              data-lightbox="portfolio"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="portfolio-single-wrap">
            <div id="portfolio-single"></div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Galeria;
