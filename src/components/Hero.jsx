import React from 'react'
import '../styles/Hero.css'
import { rightDetail } from '../constants'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-contain">
        <div className="left">
          <img
            src="https://i0.gmx.net/image/738/38597738,pd=3,h=300,w=530/berichte-kim-jong-un-putin-waffenlieferungen-besuc.webp"
            alt="image"
          />
          <div className="left-det">
            <p>Krieg in der Ukraine</p>
            <h3>
              Putin braucht Hilfe: Liefern soll ein bettelarmes Land – Lage im
              Überblick
            </h3>
          </div>
        </div>
        <div className="right">
          <div className="right-det">
            <hr />
            {rightDetail.map((det) => (
              <div className="right-detail">
                <p className="white" style={{ fontSize: '14px' }}>
                  {det.title}
                </p>
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
