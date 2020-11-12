import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

class ConsejosSexo extends React.Component {
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
        <section id="ConsejosS">
          <h1 className="H1">CONSEJOS PARA TENER UN MEJOR SEXO</h1>
          <p className="Parrafo">
            Sexo de calidad es sinónimo de sexo gourmet. Se trata de disfrutar
            del placer con todos los sentidos (gusto, olfato, vista, tacto, oído
            y el sexto sentido: “la fantasía”), añadiendo un punto de
            creatividad y olvidándonos de llegar a una meta. Simplemente se
            trata de gozar de todo el proceso.
          </p>
          <p className="Parrafo">
            En muchas ocasiones creemos que para conseguir un buen sexo
            necesitamos tiempo y grandes dosis de imaginación. Pero a través de
            las diez claves expuestas a continuación desmitificaremos esta
            creencia pudiendo mejorar la calidad del sexo sin hacer un elevado
            esfuerzo ni invertir demasiado tiempo.
          </p>
          <ul className="LeftLista">
            <li className="Left">
              1. Prioriza el sexo en tu relación de pareja y en tu día a día:
              Actualmente, nuestro día a día acostumbra a ser muy ajetreado y
              con poco tiempo libre; llegamos a casa por la noche, agotados y
              con ganas de meternos en la cama y descansar. Si nos dejamos
              llevar por esta dinámica siempre acaba quedando el sexo en último
              lugar. Después de lavar los platos por la noche y relajarnos en el
              sofá, quedándonos medio dormidos, es fácil que en ese momento el
              deseo no aparezca y se llegue al momento de hacerlo “porque ya
              toca”. Lo que yo llamo “el síndrome del calendario”.
            </li>
            <li className="Left">
              Por eso, es importante dar un espacio al sexo, priorizarlo ante
              otras obligaciones: Si nos paramos a pensar, en muchas ocasiones
              hacemos cosas que no nos acaban de apetecer, pero si mantenemos un
              ritmo y frecuencia y nos incentivamos, acaban gustándonos y hasta
              acabamos deseando que llegue el momento de volverlo a hacer. Por
              ejemplo, el deporte. Con la sexualidad ocurre exactamente lo
              mismo: si lo priorizamos y no lo dejamos “para después de las
              obligaciones”, disfrutaremos de ello ¡más y mejor!
            </li>
            <li className="Left">
              2. Ten en cuenta que la sexualidad empieza en la seducción: Con el
              paso de los años (y sobre todo si tenemos pareja estable) nos
              olvidamos que el sexo es mucho más que preliminares, coito y
              orgasmo. Por tanto, si queremos tener un sexo de calidad ha
              llegado el momento de volver a recuperar el coqueteo y la picardía
              fuera del momento sexual y convertir nuestro día a día en erótico,
              sensual y positivo. Introduciendo la seducción, automáticamente
              conseguiremos aumentar nuestro deseo y el de nuestra pareja. Con
              esto no quiero decir que se deba dedicar un largo y tedioso tiempo
              a la seducción, sino que en ocasiones un simple beso, mirada,
              acercamiento o comentario subido de tono, conductas que son de dos
              minutos, son suficientes para revivir la llama.
            </li>
            <li className="Left">
              3. Conócete sexualmente y averigua qué es lo que te gusta: Para
              poder disfrutar plenamente del sexo debemos conocernos primero
              nosotros mismos. Es importante conocer nuestras apetencias en el
              terreno sexual: saber qué es lo que nos activa, con qué se
              despierta nuestro deseo, qué es lo que nos interesa y lo que no,
              con qué nos sentimos cómodos, etcétera. Es el momento de
              experimentar y conocer nuestros gustos personales.
            </li>
            <li className="Left">
              4. Comunícate con tu pareja en el tema sexual: Para podernos
              comunicar sexualmente debemos saber qué es lo que nos gusta y lo
              que nos desagrada (punto anterior). Es verdad que es distinto
              saber qué es lo que uno quiere que tenerlo que comunicar al otro,
              y más en el caso de las preferencias sexuales. En muchos casos
              puede invadirnos la timidez, el miedo a que nos juzguen o a dar
              una mala imagen, pero debemos recordar que nuestra pareja nos
              quiere y es nuestra compañera. Además, en el campo de la
              sexualidad no hay cosas bien o mal hechas, sino simplemente
              preferencias y gustos. Si conseguimos saltar el obstáculo del
              miedo y la vergüenza de comunicarnos sexualmente conseguiremos
              crear un sexo de calidad porque permitiremos que nuestra pareja
              conozca nuestros gustos sexuales y nosotros los suyos, pudiendo
              conseguir una complicidad sexual y consecuentemente una vida
              sexual plena. Recordad, el motor indiscutible de la sexualidad es
              la comunicación honesta, atrevida y sin prejuicios.
            </li>
            <li className="Left">
              5. Añade un poco de creatividad: El sexo de calidad va ligado
              indiscutiblemente a la creatividad, espontaneidad e imaginación.
              Los enemigos principales de la sexualidad son la rutina, la pereza
              y la monotonía. Estos aparecen en el instante que dejamos de
              innovar, que caemos en el hábito de hacer siempre lo mismo, en el
              mismo lugar, a la misma hora y de la misma manera. Entiendo que al
              leer estas líneas muchos lectores puedan estar pensando que es muy
              fácil decir, pero no tan fácil de hacer, con tantas
              responsabilidades diarias es imposible y que con los años la
              rutina aparece sin poder evitarlo. Estoy de acuerdo en que nunca
              se mantiene el ritmo del primer año, pero con un poco de ganas y
              dedicación podemos conseguir ir introduciendo pequeños cambios que
              nos hagan salir de la monotonía y evitar la pereza.
            </li>
            <li className="Left">
              6. Céntrate en el aquí y ahora: Para que la sexualidad fluya,
              aparezca el deseo y la excitación es importante centrarse en el
              momento sexual. Todos sabemos que la sociedad actual nos llena de
              dolores de cabeza, preocupaciones y problemas que resolver;
              desconectar y dejarlo todo a un lado es costoso pero necesario y
              fundamental para poder apreciar y disfrutar de los pequeños
              detalles y del espacio sexual.
            </li>
            <li className="Left">
              7. Evita empezar y acabar siempre de la misma manera: Tendemos a
              concebir el sexo en cuatro pasos: caricias de iniciación,
              preliminares, coito y conseguir el orgasmo. Estas fases se
              acostumbran a repetir en cada encuentro sexual haciendo que
              podamos prever y saber qué viene después, eliminando toda intriga
              e ilusión. Lo que deriva a que el deseo descienda porque no
              aparece ni pizca de novedad ni creatividad. Por tanto, es
              importante que este aspecto lo tengamos presente para evitar la
              tediosa rutina, con las claves expuestas anteriormente ya tenemos
              las herramientas para crear distintos encuentros.
            </li>
            <li className="Left">
              8. Rompe el esquema de sexo = orgasmo: Tendemos a concebir el sexo
              como la culminación del orgasmo, lo que crea obligaciones y
              presiones alrededor del momento sexual, haciendo que en muchas
              ocasiones nos centremos en las zonas físicas más erógenas que
              serían los genitales, y los pechos en el caso de las mujeres,
              haciendo demasiado hincapié en ellas y olvidándonos de muchas
              otras. Debemos recordar que el órgano más erógeno es nuestra
              mente, a través de la imaginación y la fantasía podemos llegar a
              elevadas cotas de excitación y pasión hasta el punto de
              simplemente necesitar una caricia. Así como la piel es el órgano
              erógeno más grande, lo que nos lleva a tener que reflexionar que a
              veces nos perdemos muchos estímulos sexuales y sensaciones al
              centrarnos solamente en los genitales y pechos.
            </li>
            <li className="Left">
              9. Disfruta del momento “sobrecama”: Este concepto lo inventé
              porque vi que muchas parejas le daban una muy baja importancia al
              momento posterior al sexo. De modo que intenté compararlo con el
              proceso de comida y me di cuenta que nos era mucho más fácil para
              todos entenderlo con mayor facilidad y darle más relevancia si lo
              concebíamos como el momento de sobremesa, en el que se habla, se
              toma el café y uno se relaja en compañía. Es significante que
              después de un encuentro sexual haya un espacio de unión, de
              intimidad y de conexión, ayuda a que la calidad y la valoración
              del encuentro sean más positivas y que, al mismo tiempo la
              relación de pareja se vea beneficiada. Por tanto, debemos intentar
              no quedarnos dormidos o correr a ponernos la ropa interior y
              centrarnos más en la persona que tenemos al lado, creando ese
              espacio mágico ideal para hablar de sentimientos, emociones o
              quizás para comentar el encuentro sexual que acabamos de tener.
            </li>
            <li className="Left">
              10. Recuerda que para que el sexo funcione la relación de pareja
              debe ser positiva: Cuando la sexualidad dentro de una relación de
              pareja falla acostumbra a ser un reflejo de que algún aspecto de
              la relación de pareja no va del todo bien, así como cuando la
              sexualidad va bien la pareja se ve beneficiada de forma inmediata.
              Por eso, antes de poner en práctica todas las claves que se han
              ido comentando debemos analizar nuestra relación de pareja en
              todas sus facetas (familia, ocio, comunicación, afectividad,
              relaciones sociales, etcétera) así como debemos saber cuáles son
              las necesidades de nuestra pareja, qué es aquello que le hace
              falta para estar bien, e intentar colaborar para proporcionárselo
              si está dentro de nuestro alcance y es razonable.
            </li>
          </ul>
          <p className="Parrafo">
            Al mismo tiempo debemos encargarnos y responsabilizarnos de que
            nuestra pareja conozca aquello que necesitamos y deseamos, es
            importante saber que si no lo decimos no lo puede adivinar. Por
            tanto, el primer paso para empezar a crear un sexo de calidad es que
            los requisitos de ambas partes de la pareja estén cubiertos y que
            ambos miembros se sientan bien.
          </p>
        </section>
      </React.Fragment>
    );
  }
}
export default ConsejosSexo;
