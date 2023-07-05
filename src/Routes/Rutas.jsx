import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainerMaquinas from '../Components/ItemListContainerMaquinas/ItemListContainerMaquinas';
import ItemListContainerMoldes from '../Components/ItemListContainerMoldes/ItemListContainerMoldes';
import ItemDetailContainer from '../Components/ItemDetailContainer/ItemDetailContainer';
import Home from '../Views/Home/Home';
import Layout from '../Components/Layout/Layout';
import Contact from '../Views/Contact/Contact';
import Error from '../Views/Error/Error';
import PlantaReciclaje from '../Views/PlantaReciclaje/PlantaReciclaje';

const Rutas = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<Layout/>}>
                  <Route index element= {<Home/>}/>
                  <Route path="/Maquinas" element={<ItemListContainerMaquinas/>}/>
                  <Route path="/Moldes" element={<ItemListContainerMoldes/>}/>
                  <Route path="/PlantaReciclaje" element={<PlantaReciclaje/>}/>
                  <Route path="/Contacto" element={<Contact/>}/>
                  <Route path="/Maquinas/:CategoryId" element = {<ItemListContainerMaquinas/>}/>
                  <Route path="/Maquinas/:CategoryId/:SubCategoryId" element = {<ItemListContainerMaquinas/>}/>
                  <Route path="/Moldes/:CategoryId" element = {<ItemListContainerMoldes/>}/>
                  <Route path="/DetalleProducto/:ItemId" element = {<ItemDetailContainer/>}/>
                </Route>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Rutas