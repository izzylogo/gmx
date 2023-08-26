import React from 'react'
import '../styles/Update.css'
import { rightDetail2 } from '../constants'

const Update = () => {
  return (
    <div className='update'>
        <div className="update-cover">
            <div className="update-left">
                <img src="https://i0.gmx.net/image/532/38566532,pd=3,h=170,w=300.jpg" alt="left-img" />
                <h6 className='white'>Adel</h6>
                <h4>Haakon und Mette-Marit haben doppelt Grund zum Feiern</h4>
                <h6 style={{fontSize: "10px"}} className='white'>vor 2 Stunden</h6>
            </div>
            <div className="update-middle">
                <hr />
                {rightDetail2.map((det) => (
                    <div className='get'>
                        <p className='white tit'>{det.title}</p>
                        <h4>{det.detail}</h4>
                        <hr />
                    </div>
                ))}
            </div>
            <div className="update-left">
                <img src="https://i0.gmx.net/image/598/37803598,pd=3,h=170,w=300/ups-phishing-mails.jpg" alt="left-img" />
                <h6 className='white'>Aktuelle Betrugsmaschen</h6>
                <h4>Da muss man zweimal hinsehen: Mail der Sparkasse sieht täuschend echt aus</h4>
                <h6 className='white' style={{fontSize: "10px"}}>vor 20 Stunden</h6>
            </div>
        </div>
    </div>
  )
}

export default Update