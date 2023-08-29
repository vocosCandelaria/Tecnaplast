import React from 'react';
import trituradoras from '../../Assets/maquinas/tb/main.png';
import extrusoras from '../../Assets/categorías/extrusoras.png';
import inyectoras from '../../Assets/categorías/inyectoras.png';
import horno_compresion from '../../Assets/categorías/horno_compresion.png';
import prensas_tablas from '../../Assets/categorías/prensas_tablas.png';
import estaciones_combinadas from '../../Assets/categorías/estaciones_combinadas.png';
import buenos_aires from '../../Assets/clientes/1_Ministerio_BsAs.png';
import ministerio_de_educacion_cordoba from '../../Assets/clientes/2_Ministerio_Cordoba.png';
import ministerio_de_educacion_santa_fe from '../../Assets/clientes/3_Ministerio_Santa_Fe.png';
import moldes_compresion from '../../Assets/moldes/mc/main.png';
import moldes_extrusion from '../../Assets/moldes/me/main.png';
import moldes_inyeccion from '../../Assets/moldes/mi/main.png';
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
      <section className='container-fluid portada_imagen'></section>
      <section className='mision'>
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
              <div className='mision_fondo'>
                <h1>Tecnaplast</h1>
              </div>
              <h2 className='mision_titulo'>Sobre <span>Tecnaplast</span></h2>
              <p className='mision_subtitulo'><span>Misión:</span> "Ofrecer máquinas de excelencia destinadas al reciclaje de plástico, asegurando la satisfacción de nuestros clientes y el bienestar de todos nuestros colaboradores promoviendo la conservación del medio ambiente."</p>
              <hr />
              <p className='mision_subtitulo'><span>Visión:</span> "Ser una empresa líder en el rubro a nivel nacional, expandiéndonos a mercados internacionales, brindando maquinarias que ofrecen una rentabilidad económica y socio-ambiental."</p>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 mision_imagen'></div>
          </div>
        </div>
      </section>

      <section className='container-fluid'>
        <div className="title">
          <h2>máquinas</h2>
        </div>
        <div className='row'>
          <CategoryMaquinas imagen={horno_compresion} CategoryId={'Horno de Compresion'} />
          <CategoryMaquinas imagen={trituradoras} CategoryId={'Trituradoras'} />
          <CategoryMaquinas imagen={extrusoras} CategoryId={'Extrusoras'} />
          <CategoryMaquinas imagen={inyectoras} CategoryId={'Inyectoras'} />
          <CategoryMaquinas imagen={prensas_tablas} CategoryId={'Prensas Tablas'} />
          <CategoryMaquinas imagen={estaciones_combinadas} CategoryId={'Estaciones Combinadas'} />
        </div>
      </section>

      <section className='container-fluid home_category'>
        <div className="title">
          <h2>moldes y accesorios</h2>
        </div>
        <div className='row'>
          <CategoryMoldes imagen={moldes_inyeccion} CategoryId={'Moldes de Inyección'} />
          <CategoryMoldes imagen={moldes_extrusion} CategoryId={'Moldes de Extrusión'} />
          <CategoryMoldes imagen={moldes_compresion} CategoryId={'Moldes de Compresión'} />
        </div>
      </section>

      <section className='container-fluid beneficios_fondo mt-4'>
        <div className='row beneficios_total'>

          <div className='col-lg-5 mx-auto my-auto beneficios_izquierda'>
            <hr className='beneficios_linea' />
            <div className='beneficios_izquierda_fondo'>
              <h2 className='text-uppercase mb-4 beneficios_subtitulo'>Beneficios</h2>
              <p className='text-justify'>Brindamos soluciones que minimizan el impacto ambiental bajo el principio de <span>reducción</span>, <span>reutilización</span> y  <span>reciclado de plásticos.</span></p>
            </div>
          </div>

          <div className='col-lg-4 col-sm-6 mx-auto my-auto beneficio_item'>
            <div className='d-flex align-items-center mb-3'>
              <div className='beneficios_numero'>
                <h2 className='beneficios_numero'>01</h2>
              </div>
              <h5 className='pl-3'>Rápido Envío.</h5>
            </div>
            <div className='d-flex align-items-center mb-3 '>
              <div className='beneficios_numero'>
                <h2 className='beneficios_numero'>02</h2>
              </div>
              <h5 className='pl-3'>Equipo profesional.</h5>
            </div>
            <div className='d-flex align-items-center mb-3'>
              <div className='beneficios_numero'>
                <h2 className='beneficios_numero'>03</h2>
              </div>
              <h5 className='pl-3'>Servicio logístico de exportación.</h5>
            </div>
            <div className='d-flex align-items-center mb-3'>
              <div className='beneficios_numero'>
                <h2 className='beneficios_numero'>04</h2>
              </div>
              <h5 className='pl-3'>Asistencia técnica y comercial.</h5>
            </div>
          </div>

          <div className='col-lg-3 col-sm-6 mx-auto my-auto beneficio_item'>
            <div className='d-flex align-items-center mb-3'>
              <div className='beneficios_numero'>
                <h2 className='beneficios_numero'>05</h2>
              </div>
              <h5 className='pl-3'>Fácil operación.</h5>
            </div>
            <div className='d-flex align-items-center mb-3'>
              <div className='beneficios_numero'>
                <h2 className='beneficios_numero'>06</h2>
              </div>
              <h5 className='pl-3'>Mínimo mantenimiento.</h5>
            </div>
            <div className='d-flex align-items-center mb-3'>
              <div className='beneficios_numero'>
                <h2 className='beneficios_numero'>07</h2>
              </div>
              <h5 className='pl-3'>Fiabilidad y alto rendimiento.</h5>
            </div>
            <div className='d-flex align-items-center mb-3'>
              <div className='beneficios_numero'>
                <h2 className='beneficios_numero' >08</h2>
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
          <img className='cliente' src={buenos_aires} alt="Buenos Aires" />
          <img className='cliente' src={ministerio_de_educacion_cordoba} alt="Ministerio de Eduación Córdoba" />
          <img className='cliente' src={ministerio_de_educacion_santa_fe} alt="Ministerio de Eduación Santa Fé" />
          <img className='cliente' src={munic_bragado} alt="Municipalidad de Bragado" />
          <img className='cliente' src={munic_despeñaderos} alt="Municipalidad de Despeñaderos" />
          <img className='cliente' src={munic_rio_grande} alt="Municipalidad de Huerta Grande" />
          <img className='cliente' src={munic_gral_alvarado} alt="Municipio General Alvarado" />
          <img className='cliente' src={munic_huerta_grande} alt="Municipio de Rio Grande" />
          <img className='cliente' src={UNLPam} alt="UNLPam" />
          <img className='cliente' src={facaf} alt="FACAF" />
          <img className='cliente' src={picky_toys} alt="Picky Toys" />
          <img className='cliente' src={comunidad_pro} alt="Comunidad Pro" />
          <img className='cliente' src={ecolif} alt="Ecolif" />
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