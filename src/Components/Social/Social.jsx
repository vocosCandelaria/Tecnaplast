import React from 'react';
import Icons from '../Icons/Icons';
import {FaFacebookF, FaInstagram, FaYoutube} from 'react-icons/fa';
import {IoLogoWhatsapp} from "react-icons/io";
import './styleSocial.css';

const Social = () => {
    return (
        <div className="social_bar">
            <a
            className='icon icon-whatsapp'
            href="https://wa.me/5493513587826"
            target="_blank"
            rel="noopener noreferrer"
            ><Icons Icon={IoLogoWhatsapp} color={"white"} size={"20px"}/>
            </a>
            <a
            className='icon icon-facebook'
            href="https://www.facebook.com/Tecnaplast-100170871754453"
            target="_blank"
            rel="noopener noreferrer"
            ><Icons Icon={FaFacebookF} color={"white"} size={"20px"}/>
            </a>
            <a
            className='icon icon-instagram'
            href="https://www.instagram.com/industriatecnaplast/"
            target="_blank"
            rel="noopener noreferrer"
            ><Icons Icon={FaInstagram} color={"white"} size={"20px"}/>
            </a>
            <a
            className='icon icon-youtube'
            href="https://www.youtube.com/channel/UC3w46yfVpadZ-xshWg1XENQ"
            target="_blank"
            rel="noopener noreferrer"
            ><Icons Icon={FaYoutube} color={"white"} size={"20px"}/>
            </a>
      </div>
    )
}

export default Social