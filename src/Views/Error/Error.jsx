import React from 'react';
import error from '../../Assets/error404.png';
import './styleError.css';

const Error = () => {
  return (
    <div className='container-fluid errorContainer'>
      <div className='errorPag d-flex flex-column justify-content-center align-items-center'>
        <img src={error} alt="error 404" />
      </div>
    </div>
  )
}

export default Error