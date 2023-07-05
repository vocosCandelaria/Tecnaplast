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
          <div className='col-md-5 mx-auto my-auto contacto_izquierda'>
            <div className="title">
              <h2>contacto</h2>
            </div>
            <h5 className='text-justify'>Si tiene preguntas sobre nuestros productos, no dude en contactarnos. Le responderemos tan pronto como sea posible.</h5>
          </div>
          <div className='col-md-7 mx-auto contacto_derecha'>
            <Form/>
          </div>

        </div>
        {/* <Footer/> */}
      </section>

      {/* <section className='container-fluid'>
          <Social/>
      </section> */}
    </>
  )
}

export default Contact