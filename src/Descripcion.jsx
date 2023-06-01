import React from 'react'
import './Descripcion.css'
import img from './img/img1.jpg'

const Descripcion = () => {
  return (
    <>
    <div className='row box d-flex flex-column flex-lg-row text-center mt-5 p-5' id='quienesSomos'>
        <div className="col">
          <p className='text-sm-start text-lg-start'>En Servicios y Soluciones Eléctricas Torrecilla contamos con más de 20 años de experiencia en el giro brindando servicios de primera calidad en Tlaxcala; nos enfocamos en las instalaciones eléctricas e iluminación. Estamos enfocados en servicios e instalaciones eléctricas, realizados por certificado personal. Actualmente  nos hemos consolidado en ser una de las empresas con  servicios innovadores y por resultados favorables a la hora de entregarlos.</p>
        </div>
        <div className="col">
            <img src={img} alt="img" className='imagen img-fluid rounded-4'/>
        </div>
    </div>
    <div className=''>
                <svg className="" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(240, 240, 246,0.7)" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(15, 155, 246,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(15, 155, 246,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#f8f8f8" />
                </g>
                </svg>
            </div>
    </>
  )
}

export default Descripcion