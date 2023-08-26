import React from 'react'
import '../styles/Update.css'
import { rightDetail2 } from '../constants'

const Update = () => {
  return (
    <div className='update'>
        <div className="update-cover">
            <div className="update-left">
                <img src="https://i0.gmx.net/image/924/38565924,pd=1,h=170,w=300/heiratsantrag-goldmedaille.jpg" alt="left-img" />
                <h6 className='white'>World's Championships in Athletics</h6>
                <h4>Geher surprises his teammate at the finish with pure romance</h4>
                <h6 style={{fontSize: "10px"}} className='white'>16 minutes ago</h6>
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
                <img src="https://i0.gmx.net/image/424/38566424,pd=1,h=170,w=300/wetter-schwuel-durchwachsen-angenehm-sonnig.jpg" alt="left-img" />
                <h6 className='white'>Weather</h6>
                <h4>Changeable prospects: from muggy and overcast to pleasant and sunny</h4>
                <h6 className='white' style={{fontSize: "10px"}}> 16 minutes ago</h6>
            </div>
        </div>
    </div>
  )
}

export default Update