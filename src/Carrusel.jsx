import React, { useState } from 'react'
import imagenes from './data/imagenes.js'
import './Carrusel.css'

const Carrusel = () => {

    const [number, setNumber] = useState(0)
    const [text, setText] = useState(imagenes[0].text)


    const sum = () => {
        if(number > 24){
            setNumber(0)
        } else {
            setNumber(e => e += 1 )
            setText(imagenes[number].text)
        }
    }

    const res = () => {
        if(number <= 0){
            setNumber(24)
        } else {

            setNumber(e => e -= 1 )
            setText(imagenes[number].text)
        }
    }

  return (
    <div className='row p-5 boxes d-flex flex-column flex-lg-row text-center' id='servicios'>
        <p className='clienteText mb-5'>Servicios</p>
        <div className="col d-flex align-items-center justify-content-center">
            <div >
                <p className='texto-carrusel'>{text}</p>
            </div>
        </div>
        <div className="col">
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imagenes[0].img} className="d-block w-100 img-fluid rounded-4" alt="..."/>
                    </div>
                    {imagenes.map(element =>  <div className="carousel-item" key={element.numero}>
                                                <img src={element.img} className="d-block w-100 img-fluid rounded-4 imgCover" alt="..."/>
                                            </div>
                    )}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={res}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={sum}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Carrusel