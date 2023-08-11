import React from 'react';
import Logo from '../../Assets/logo.png';
import Icons from '../Icons/Icons';
import {GrMap, GrMailOption, GrPhone} from "react-icons/gr";
import './styleFooter.css';

const Footer = () => {
  return (
    <footer className='text-center'>
      <div className='container-fluid p-1'>
        <div className='row'>
          <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 footer_a'>
            <a href="#">
              <img src={Logo} alt="Logotipo" loading='Tecnaplast' width="65" height="70"/>
              <p className='text-uppercase pt-2 footer_texto'>tecnaplast</p>
            </a>
          </div>

          <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 footer_a'>
            <a href="https://goo.gl/maps/3X3U55UK5Reit5bn7" className='columna_footer' target="_blank" rel="noopener noreferrer">
              <div className='footer_icono_fondo'>
                <Icons Icon={GrMap} color={"black"} size={"40px"}/>
              </div>
              <p className='footer_icono_texto'>Av. Donato Álvarez 9893, Cba, Arg</p>
            </a>
          </div>

          <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 footer_a'>
            <a href="mailto:industriatecnaplast@gmail.com" className='columna_footer' target="_blank" rel="noopener noreferrer">
              <div className='footer_icono_fondo'>
                <Icons Icon={GrMailOption} color={"black"} size={"40px"}/>
              </div>
              <p className='footer_icono_texto'>industriatecnaplast@gmail.com</p>
            </a>
          </div>

          <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 footer_a'>
            <a href="https://wa.me/5493513587826" className='columna_footer' target="_blank" rel="noopener noreferrer">
              <div className='footer_icono_fondo'>
                <Icons Icon={GrPhone} color={"black"} size={"40px"}/>
              </div>
              <p className='footer_icono_texto'>+54 9 3513 58-7826</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer