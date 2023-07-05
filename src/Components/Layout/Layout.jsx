import React from 'react';
import {Outlet} from 'react-router-dom';
import Social from '../Social/Social';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';

const Layout = () => {
  return (
    <>
        <Menu />
        <Outlet /> 
        <Social />
        <Footer />
    </>
  )
}

export default Layout