import React from 'react';
// import Footer from '../../Components/Footer/Footer';
import Form from '../../Components/Form/Form';
// import Social from '../../Components/Social/Social.jsx';
import './styleContact.css';

const Contact = () => {
  return (
    <>
      <section className='container-fluid contacto_fondo'>
        <div className='row contacto_total'>
          <div className='col-lg-5 col-md-12 col-sm-12 mx-auto my-auto contacto_izquierda'>
            <div className="title">
              <h2>contacto</h2>
            </div>
            <p className='text-justify'>Si tiene preguntas sobre nuestros productos, no dude en contactarnos. Le responderemos tan pronto como sea posible.</p>
          </div>
          <div className='col-lg-7 col-md-12 col-sm-12 mx-auto contacto_derecha'>
            <Form/>
          </div>

        </div>
        
      </section>
    </>
  )
}

export default Contact