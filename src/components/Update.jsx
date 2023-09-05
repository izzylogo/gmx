import React from 'react'
import '../styles/Update.css'
import { rightDetail2 } from '../constants'

const Update = () => {
  return (
    <div className="update">
      <div className="update-cover">
        <div className="update-left">
          <img
            src="https://i0.gmx.net/image/964/38596964,pd=1,h=170,w=300/braunbaerin.webp"
            alt="left-img"
          />
          <h6 className="white">Natur & Umwelt</h6>
          <h4>Jäger erschießt Bärenmutter: Italien in Aufruhr und in Sorge</h4>
          <h6 style={{ fontSize: '10px' }} className="white">
            vor 13 Stunden
          </h6>
        </div>
        <div className="update-middle">
          <hr />
          {rightDetail2.map((det) => (
            <div className="get">
              <p className="white tit">{det.title}</p>
              <h4>{det.detail}</h4>
              <hr />
            </div>
          ))}
        </div>
        <div className="update-left">
          <img
            src="https://i0.gmx.net/image/680/38594680,pd=1,h=170,w=300/asiatische-hornisse.webp"
            alt="left-img"
          />
          <h6 className="white">Natur & Umwelt</h6>
          <h4>Neuer Bericht zeigt Ausmaß von invasiven Arten</h4>
          <h6 className="white" style={{ fontSize: '10px' }}>
            vor 14 Stunden
          </h6>
        </div>
      </div>
    </div>
  )
}

export default Update
