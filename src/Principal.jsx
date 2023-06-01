import React from 'react'
import logo from './assets/enchufe.png'
import './Principal.css'
import data from './data/menu.json'
import Menu from './Menu'
import { Link } from 'react-router-dom'

const Principal = () => {
//container
  return (
    <div className='box'>
        <div className='row d-flex flex-column text-center home mt-5'>
            <div className="col position-absolute top-0 end-0 text-end">
                <div className="dropdown text-center">
                    <button className="dropbtn">Menu</button>
                    {/* {data.map(e => <Menu key={e.numero} element={e}/>)} */}
                    <div className="dropdown-content">
                        <a href="#quienesSomos">Quienes somos</a>
                        <a href="#clientes">Nuestros Clientes</a>
                        <Link to={"/torrecilla/contacto"}>Contacto</Link>
                        <div className="dropdown2 ">
                            <a href="#servicios" className="dropbtn2">Servicios</a>
                            {data.map(e => <Menu key={e.numero} element={e}/>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <img src={logo} alt="logo" className='logo img-fluid'/>
                <h1>TORRECILLA</h1>
            </div>
            <div className='col'>
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(15, 155, 246,0.7)" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(15, 155, 246,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(15, 155, 246,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#0f9bf6" />
                </g>
                </svg>
            </div>
            <div className="col fondo ">
                <h2 className='titulo-dos'>Servicios y soluciones</h2>
                <h3 className='titulo-dos'>eléctricas</h3>
            </div>
        </div>
    </div>
  )
}

export default Principal