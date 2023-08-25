import React from 'react'
import '../styles/Update.css'
import { rightDetail2 } from '../constants'

const Update = () => {
  return (
    <div className='update'>
        <div className="update-cover">
            <div className="update-left">
                <img src="https://i0.gmx.net/image/484/38563484,pd=3,h=170,w=300/roland-kaiser.jpg" alt="left-img" />
                <h6 className='white'>stars</h6>
                <h4>Rare photos: Roland Kaiser shows his two grandchildren</h4>
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
                <img src="https://i0.gmx.net/image/484/38563484,pd=3,h=170,w=300/roland-kaiser.jpg" alt="left-img" />
                <h6 className='white'>stars</h6>
                <h4>Rare photos: Roland Kaiser shows his two grandchildren</h4>
                <h6 className='white' style={{fontSize: "10px"}}> 16 minutes ago</h6>
            </div>
        </div>
    </div>
  )
}

export default Update