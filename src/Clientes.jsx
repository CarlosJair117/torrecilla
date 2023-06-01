import React from 'react'
import clientes from './data/clientes.js'
import './Clientes.css'

const Clientes = () => {
  return (
    <div className='row container d-flex flex-column text-center clienteBox m-0' id='clientes'>
        <p className='clienteText mt-5'>Nuestros clientes</p>
        <div className='col d-flex justify-content-around mt-5'>
            <img src={clientes[0].img} className="clienteImg img-fluid" alt="..."/>
            <img src={clientes[1].img} className="clienteImg img-fluid" alt="..."/>
            <img src={clientes[2].img} className="clienteImg img-fluid" alt="..."/>
            <img src={clientes[3].img} className="clienteImg img-fluid" alt="..."/>
        </div>
        <div className='col d-flex justify-content-around mt-5'>
            <img src={clientes[4].img} className="clienteImg img-fluid" alt="..."/>
            <img src={clientes[5].img} className="clienteImg img-fluid" alt="..."/>
            <img src={clientes[6].img} className="clienteImg img-fluid" alt="..."/>
            <img src={clientes[7].img} className="clienteImg img-fluid" alt="..."/>
        </div>
    </div>
  )
}

export default Clientes