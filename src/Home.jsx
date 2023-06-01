import React from 'react'
import Principal from './Principal'
import './Home.css'
import Descripcion from './Descripcion'
import Carrusel from './Carrusel'
import Clientes from './Clientes'
import Footer from './Footer'
import Contacto from './Contacto'

const Home = () => {
  return (
    <>
        <div className='container box'>
            <Principal/>
            <Descripcion/>
            <Carrusel/>
            <Clientes/>
            <Footer/>
            {/* <Contacto/> */}
        </div>
    </>
  )
}

export default Home