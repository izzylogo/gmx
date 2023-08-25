import React from 'react'
import '../styles/Hero.css'
import { rightDetail } from '../constants'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-contain">
            <div className="left">
                <img src="https://i0.gmx.net/image/600/38562600,pd=6,h=300,w=530/unwetter-bayern-verletzte-campingplatz-lindau.jpg" alt="image" />
                <div className="left-det">
                    <p>Accident</p>
                    <h3>Record heat in the ocean: development in the ocean is fatal</h3>
                </div>
            </div>
            <div className="right">
                <div className="right-det">
                    <hr />
                    {rightDetail.map((det) => (
                        <div className='right-detail'>
                            <p>{det.title}</p>
                            <h4>{det.detail}</h4>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero