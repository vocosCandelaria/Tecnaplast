import React from 'react';
import trituradoras from '../../Assets/categorías/1_trituradoras.png';
import extrusoras from '../../Assets/categorías/extrusoras.png';
import inyectoras from '../../Assets/categorías/inyectoras.png';
import horno_compresion from '../../Assets/categorías/horno_compresion.png';
import estaciones_combinadas from '../../Assets/categorías/estaciones_combinadas.png';
import buenos_aires from '../../Assets/clientes/1_Ministerio_BsAs.png';
import ministerio_de_educacion_cordoba from '../../Assets/clientes/2_Ministerio_Cordoba.png';
import ministerio_de_educacion_santa_fe from '../../Assets/clientes/3_Ministerio_Santa_Fe.png';
import munic_bragado from '../../Assets/clientes/4_Municipalidad_Bragado.png';
import munic_despeñaderos from '../../Assets/clientes/5_Municipalidad_Despeñaderos.png';
import munic_rio_grande from '../../Assets/clientes/6_Municipio_Rio_Grande.png';
import munic_gral_alvarado from '../../Assets/clientes/7_Municipio_General_Alvarado.png';
import munic_huerta_grande from '../../Assets/clientes/8_Municipalidad_Huerta_Grande.png';
import UNLPam from '../../Assets/clientes/9_unlPAM.png';
import facaf from '../../Assets/clientes/10_facaf.png';
import picky_toys from '../../Assets/clientes/11_picky_toys.png';
import comunidad_pro from '../../Assets/clientes/12_comunidad_pro.png';
import ecolif from '../../Assets/clientes/13_ecolif.png';
// import Social from '../../Components/Social/Social.jsx';
import './styleHome.css';
import CategoryMaquinas from '../../Components/CategoryMaquinas/CategoryMaquinas';
import CategoryMoldes from '../../Components/CategoryMoldes/CategoryMoldes';
// import Footer from '../../Components/Footer/Footer';


const Home = () => {
  return (
    <>
        <section className='container-fluid portada_imagen'>
          {/* <div className='portada_texto'>
            <h2 className='portada_titulo'>Tecnaplast</h2>
            <h4 className='portada_subtitulo'>La máquina para tu casa</h4>
          </div> */}
        </section>

        <section className='container-fluid mision'>
          <div className='mision_fondo'>
            <h1>Tecnaplast</h1>
          </div>
          <div className='mision_texto'>
            <div className='flow'>
              <h2 className='mision_titulo'>Sobre <span>Tecnaplast</span></h2>
              <p className='mision_subtitulo'><span>Misión:</span> "Ofrecer máquinas de excelencia destinadas al reciclaje de plástico, asegurando la satisfacción de nuestros clientes y el bienestar de todos nuestros colaboradores promoviendo la conservación del medio ambiente."</p>
              <hr />
              <p className='mision_subtitulo'><span>Visión:</span> "Ser una empresa líder en el rubro a nivel nacional, expandiéndonos a mercados internacionales, brindando maquinarias que ofrecen una rentabilidad económica y socio-ambiental."</p>
            </div>
          </div>

          <div className='mision_imagen'></div>
        </section>

        <section className='container-fluid'>
          <div className="title">
            <h2>máquinas</h2>
          </div>
          <div className='row'>
            <CategoryMaquinas imagen={horno_compresion} CategoryId={'Horno Compresión'} />
            <CategoryMaquinas imagen={trituradoras} CategoryId={'Trituradoras'} />
            <CategoryMaquinas imagen={extrusoras} CategoryId={'Extrusoras'} />
            <CategoryMaquinas imagen={inyectoras} CategoryId={'Inyectoras'} />
            <CategoryMaquinas imagen={'https://matesibarra.com/wp-content/uploads/2021/06/doite-termo-stanley-verde-nuevo-2020-46721-02-247x296.jpg'} CategoryId={'Prensas Tablas'} />
            <CategoryMaquinas imagen={estaciones_combinadas} CategoryId={'Estaciones Combinadas'} />
          </div>
        </section>

        <section className='container-fluid home_category'>
          <div className="title">
            <h2>moldes y accesorios</h2>
          </div>
          <div className='row'>
            <CategoryMoldes imagen={'https://matesibarra.com/wp-content/uploads/2021/06/2doCatalogoAbril32-scaled-247x296.jpg'} CategoryId={'Moldes de Inyección'} />
            <CategoryMoldes imagen={'https://matesibarra.com/wp-content/uploads/2021/06/2doCatalogoAbril60-247x296.jpg'} CategoryId={'Moldes de Extrusión'} />
            <CategoryMoldes imagen={'https://matesibarra.com/wp-content/uploads/2021/06/Catalogo-Abril15-247x296.jpg'} CategoryId={'Moldes de Compresión'} />
          </div>
        </section>

        <section className='container-fluid beneficios_fondo mt-4'>
            <div className='row beneficios_total'>

              <div className='col-lg-4 mx-auto my-auto beneficios_izquierda'>
                <hr className='beneficios_linea'/>
                <div className='beneficios_izquierda_fondo'>
                  <h2 className='text-uppercase mb-4'>Beneficios</h2>
                  <p className='text-justify'>Brindamos soluciones que minimizan el impacto ambiental bajo el principio de <span>reducción</span>, <span>reutilización</span> y  <span>reciclado de plásticos.</span></p>
                </div>
              </div>

              <div className='col-lg-4 col-sm-6 mx-auto my-auto'>
                <div className='d-flex align-items-center mb-3'>
                  <div className='beneficios_numero'>
                    <h2>01</h2>
                  </div>
                  <h5 className='pl-3'>Rápido Envío.</h5>
                </div>
                <div className='d-flex align-items-center mb-3'>
                  <div className='beneficios_numero'>
                    <h2>02</h2>
                  </div>
                  <h5 className='pl-3'>Equipo profesional.</h5>
                </div>
                <div className='d-flex align-items-center mb-3'>
                  <div className='beneficios_numero'>
                    <h2>03</h2>
                  </div>
                  <h5 className='pl-3'>Servicio logístico de exportación.</h5>
                </div>
                <div className='d-flex align-items-center mb-3'>
                  <div className='beneficios_numero'>
                    <h2>04</h2>
                  </div>
                  <h5 className='pl-3'>Asistencia técnica y comercial.</h5>
                </div>
              </div>

              <div className='col-lg-4 col-sm-6 mx-auto my-auto'>
                <div className='d-flex align-items-center mb-3'>
                  <div className='beneficios_numero'>
                    <h2>05</h2>
                  </div>
                  <h5 className='pl-3'>Fácil operación.</h5>
                </div>
                <div className='d-flex align-items-center mb-3'>
                  <div className='beneficios_numero'>
                    <h2>06</h2>
                  </div>
                  <h5 className='pl-3'>Mínimo mantenimiento.</h5>
                </div>
                <div className='d-flex align-items-center mb-3'>
                  <div className='beneficios_numero'>
                    <h2>07</h2>
                  </div>
                  <h5 className='pl-3'>Fiabilidad y alto rendimiento.</h5>
                </div>
                <div className='d-flex align-items-center mb-3'>
                  <div className='beneficios_numero'>
                    <h2>08</h2>
                  </div>
                  <h5 className='pl-3'>Amplia gama de productos.</h5>
                </div>
              </div>
            </div>
        </section>

        <section className='container-fluid'>
          <div className="title">
            <h2>nuestros clientes</h2>
          </div>
          <div className='clientes'>
            <img className='cliente' src={buenos_aires} alt="Buenos Aires"/>
            <img className='cliente' src={ministerio_de_educacion_cordoba} alt="Ministerio de Eduación Córdoba"/>
            <img className='cliente' src={ministerio_de_educacion_santa_fe} alt="Ministerio de Eduación Santa Fé"/>
            <img className='cliente' src={munic_bragado} alt="Municipalidad de Bragado"/>
            <img className='cliente' src={munic_despeñaderos} alt="Municipalidad de Despeñaderos"/>
            <img className='cliente' src={munic_rio_grande} alt="Municipalidad de Huerta Grande"/>
            <img className='cliente' src={munic_gral_alvarado} alt="Municipio General Alvarado"/>
            <img className='cliente' src={munic_huerta_grande} alt="Municipio de Rio Grande"/>
            <img className='cliente' src={UNLPam} alt="UNLPam"/>
            <img className='cliente' src={facaf} alt="FACAF"/>
            <img className='cliente' src={picky_toys} alt="Picky Toys"/>
            <img className='cliente' src={comunidad_pro} alt="Comunidad Pro"/>
            <img className='cliente' src={ecolif} alt="Ecolif"/>
            {/* <div className='col-xs-12 mb-3'>
              <img className='cliente' src={buenos_aires} alt="Buenos Aires"/>
              <img className='cliente' src={ministerio_de_educacion_cordoba} alt="Ministerio de Eduación Córdoba"/>
              <img className='cliente' src={ministerio_de_educacion_santa_fe} alt="Ministerio de Eduación Santa Fé"/>
              <img className='cliente' src={munic_bragado} alt="Municipalidad de Bragado"/>
              <img className='cliente' src={munic_despeñaderos} alt="Municipalidad de Despeñaderos"/>
              <img className='cliente' src={munic_rio_grande} alt="Municipalidad de Huerta Grande"/>
            </div>
          </div>
          <div className='row justify-content-around text-center'>
            <div className='col-xs-12 mb-3'>
              <img className='cliente' src={munic_gral_alvarado} alt="Municipio General Alvarado"/>
              <img className='cliente' src={munic_huerta_grande} alt="Municipio de Rio Grande"/>
              <img className='cliente' src={UNLPam} alt="UNLPam"/>
              <img className='cliente' src={facaf} alt="FACAF"/>
              <img className='cliente' src={picky_toys} alt="Picky Toys"/>
            </div> */}
          </div>
          {/* <Footer/> */}
        </section>

        {/* <section className='container-fluid'>
          <Social/>
        </section> */}
    </>
  )
}

export default Home