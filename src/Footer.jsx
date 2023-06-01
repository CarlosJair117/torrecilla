import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className=''>
        <div className='footerBox'>
                <svg className="" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(240, 240, 246,0.7)" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(15, 155, 246,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(15, 155, 246,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#0f9bf6" />
                </g>
                </svg>
            </div>
        <div className='row noflex text-center'>
            <div className="col p-3">
              <p>2023 por SERVICIOS Y SOLUCIONES ELÉCTRICAS TORRECILLA.</p>
              <p>CALLE 15, 404, XICOHTENCATL, TLAXCALA, TLAX, C.P 90062</p>
              <p>NO. DE OFICINA 246-467-1515</p>
            </div>
        </div>
    </div>
  )
}

export default Footer