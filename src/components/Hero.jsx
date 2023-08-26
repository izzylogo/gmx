import React from 'react'
import '../styles/Hero.css'
import { rightDetail } from '../constants'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-contain">
            <div className="left">
                <img src="https://i0.gmx.net/image/392/38559392,pd=2,h=300,w=530.jpg" alt="image" />
                <div className="left-det">
                    <p>Business</p>
                    <h3>Expert worried about Germany: "There is a risk of loss of Prosperity here."</h3>
                </div>
            </div>
            <div className="right">
                <div className="right-det">
                    <hr />
                    {rightDetail.map((det) => (
                        <div className='right-detail'>
                            <p className='white' style={{fontSize: '14px'}}>{det.title}</p>
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