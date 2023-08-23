import React from 'react';
import './stylePlantaReciclaje.css'

const PlantaReciclaje = () => {
  return (
    // <section classNameName='container-fluid portada_imagen'>
    //   <h2 classNameName='reciclaje_titulo'>Planta de Reciclaje</h2>
    // </section>
    <section className="container-fluid">
      <div className="portada"></div>

      <div className="container">
        <div className="row mt-0">
          <div id="intro" className="col-sm-12 col-lg-6 row">
            <div className="title d-flex flex-column justify-content-center">
              <h2>Planta de Reciclaje</h2>
              <div>
                <span className="bold subt">Qué son las estaciones de reciclado?</span>
                <p className='pt1'>Son construcciones modulares, listas para comenzar a trabajar. Incluye tanto maquinaria como instalaciones. Ahorrando tiempo y dolores de cabeza que tiene la construcción tradicional de un galpón o taller.
                </p>
                <p>
                  Otro uso es como punto de reciclado o almacén de material ya tratado / compactado.
                </p>

                <p>
                  Están arquitectónicamente diseñados para amoldarse y cumplir con las medidas totales que el proyecto requiera, su tamaño inicial es de 18m2 (la estación más pequeña) hasta los metros que sean necesarios, por ejemplo, 180m2.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-lg-6 order-xs-1">
            <img className="img_planta" src="https://i.blogs.es/c8b434/preciousplastic1/1366_2000.jpg" alt="intro" />
          </div>

          </div>

          <div className='justify-content-center'>
            <p className="bold subt ml1">Algunos beneficios de las estaciones:</p>

            <ul className='text-align-justify'>
              <li><span className="bold">* Solución integral: </span> Nuestros módulos transportables ofrecen una solución completa y lista para usar, lo que significa que no requiere instalaciones complejas ni configuraciones adicionales.</li>
              <li><span className="bold">* Ahorro de tiempo y dinero: </span> Al adquirir nuestro módulo, los clientes ahorran tiempo y dinero al no tener que buscar y adquirir por separado diversas máquinas para el reciclado de plástico ni lidiar con los problemas clásicos de la construcción tradicional de un galpón o taller.</li>
              <li><span className="bold">* Versatilidad: </span> El módulo transportable se adapta a diversas necesidades de reciclado de plástico, desde pequeñas a grandes cantidades, lo que lo hace adecuado para diferentes escenarios y negocios.</li>
              <li> <span className="bold">* Impacto ambiental positivo: </span> Al utilizar nuestro módulo, los clientes contribuyen directamente a la reducción de residuos plásticos y al cuidado del medio ambiente.</li>
              <li> <span className="bold">* Fácil movilidad: </span> La naturaleza transportable del módulo permite a los clientes llevarlo a diferentes ubicaciones según sea necesario, lo que brinda flexibilidad en sus operaciones.</li>
              <li> <span className="bold">* Entrenamiento y soporte: </span> Brindamos capacitación y soporte técnico para garantizar que los clientes puedan operar las máquinas de manera eficiente y sin complicaciones.</li>
              <li> <span className="bold">* Impacto social positivo: </span> Al invertir en nuestros productos, los clientes también estarán generando oportunidades de empleo local en la gestión de residuos y reciclaje.</li>
            </ul>
          </div>

      </div>
      
    </section>
  )
}

export default PlantaReciclaje

